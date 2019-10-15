<template>
  <div class="blog-detail">
    <h1>{{detail.title}}</h1>
    <div class="blog-desc">
     <span class="left">
        {{getLastDate(detail.createTime)}}
      <span>|</span>
      <span>阅读:{{detail.views}}次</span>
     </span>
      <span class="right">
        <span v-for="(item,index) in detail.tag" :key="index">
          {{item}}
        </span>
      </span>
    </div>
    <div class="blog-content markdown-body" v-html="content">
    </div>
    <div class="comment">
      <div class="comment-desc">
        {{detail.commentTime}}条评论
      </div>
      <div class="comment-content" v-for="(item,index) in detail.comment" :key="index">

        <div class="comment-avatar">
          <img :src="item.avatar" alt="">
        </div>
        <div class="comment-right">
          <div class="comment-right-name">
            {{item.name}}
          </div>
          <div class="comment-right-content" >
            {{item.content}}
          </div>
          <div class="comment-right-time">
            {{item.time}}
            <el-link>回复</el-link>
          </div>
        </div>

      </div>
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
    <div class="reply">
      <el-avatar :size="50" class="reply-avatar"></el-avatar>
      <el-input
        style="width: 800px"
        type="textarea"
        :rows="3"
        placeholder="请输入内容"
        v-model="replyValue"/>
      <el-button type="primary" round > 发送</el-button>
    </div>
  </div>
</template>

<script>
    import { fetchArticle, savePostsComments, getPostsCommentsList  } from '~/api/index'
    import highlight from '~/plugins/highlight'
export default {
  name: '',
   async asyncData({ app, store, params }) {
       let { model } = await fetchArticle(app.$axios.$request, params.id)
       let content = highlight(model.content)
       console.log(model)
        return {
            detail: model,
            content: content
        }
   },
    methods: {
        getLastDate: function(time) {
            const date = new Date(time);
            const month =
                date.getMonth() + 1 < 10
                    ? "0" + (date.getMonth() + 1)
                    : date.getMonth() + 1;
            const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            return date.getFullYear() + "-" + month + "-" + day;
        },
            login() {
                const token = this.$store.state.token;
                if (token === null || token === undefined) {
                    this.$router.push("/login");
                }
            },
            savePostsComments() {
                if (this.content === "") {
                    this.$message({
                        message: "内容不能为空",
                        type: "error",
                        showClose: true,
                        duration: 1000
                    });
                    return;
                }

                let json = {
                    content: this.content,
                    postsId: this.postsId
                };

                if (this.isReply) {
                    let content = this.content.replace(this.preContent, "");
                    if (this.content.indexOf(this.preContent, 0) !== -1) {
                        json["parentId"] = this.parentId;
                        json["content"] = content;
                    }
                    console.log(json);
                    console.log(this.content.indexOf(this.preContent, 0));
                }

                savePostsComments(json).then(res => {
                    console.log(res);
                    this.$message({
                        message: "评论成功",
                        type: "success",
                        showClose: true,
                        duration: 1000
                    });

                    this.getPostsCommentsList();
                    this.content = "";
                });
            },
            getPostsCommentsList(page) {
                getPostsCommentsList({
                    postsId: this.postsId,
                    page: page === undefined ? 1 : page,
                    size: 5
                }).then(res => {
                    console.log(res);
                    const { success, models, pageInfo } = res;
                    if (success === 1) {
                        this.list = models;
                        this.listQuery = pageInfo;
                    }
                });
            },
            reply(item) {
                this.preContent = "@" + item.authorName + ":";
                this.content = this.preContent;
                this.isReply = true;
                this.parentId = item.id;
            },
            prevPage(item) {
                console.log(item);
                this.getPostsCommentsList(item);
            },
            nextPage(item) {
                console.log(item);
                this.getPostsCommentsList(item);
            },
            currentPage(item) {
                console.log(item);
                this.getPostsCommentsList(item);
            }
    },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
  .blog-detail {
    width: 1000px;
    padding-top: 30px;
    margin: 20px auto;

    .blog-desc {
      padding: 20px 0;
      font-size: 16px;
      color: rgba(166, 166, 166, 1);
      display: flex;
      justify-content: space-between;

      .right {
        color: #222;
      }
    }

    .blog-content {
      font-size: 16px;
    }

    .comment {
      padding-top: 50px;

      .comment-desc {
        font-size: 20px;
        color: rgba(166, 166, 166, 1);
      }

      .comment-content {
        display: flex;

        .comment-avatar img {
          width: 100px;
          height: 100px;
          border-radius: 10px;
          margin: 10px;
        }

        .comment-right {
          padding-top: 40px;

          .comment-right-name {
            font-size: 16px;
            color: rgba(166, 166, 166, 1);
            margin: 10px;

          }

          .comment-right-content {
            font-size: 16px;
            color: rgba(166, 166, 166, 1);
            margin: 10px;
          }

          .comment-right-time {
            font-size: 16px;
            color: rgba(166, 166, 166, 1);
            margin: 10px;
          }
        }
      }
    }

    .reply {
      .reply-avatar{
        margin: 10px;
      }
      flex: 1;
    }
  }
</style>
