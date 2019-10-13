<template>
  <div class="blog-detail">
    <h2>{{detail.title}}</h2>
    <div class="blog-desc">
     <span class="left">
        {{detail.time}}
      <span>|</span>
      <span>阅读:{{detail.time}}次</span>
     </span>
      <span class="right">
        <span v-for="(item,index) in detail.tag" :key="index">
          {{item}}
        </span>
      </span>
    </div>
    <div class="blog-content">
      {{detail.content}}
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
          <div class="comment-right-content">
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
export default {
  name: '_id',
  data() {
    return {
      replyValue: '',
      detail: {
        title: '经过几天努力终于开源了一个前后分离的vue + springboot的个人博客',
        time: '2016-12-02',
        readTime: 2251,
        tag: ['java', 'springBoot'],
        content: '为什么会开发这个个人博客？说到为什么会开发这个个人博客，愿意在上半年写了一个多人博客，byteblogs 但是总感觉缺少点什么，最后考虑一下准备写一个个人博客让个人博客的文章可以同步发到byteblogs上去，这个就形成一个圈子。只说不练假把式，于是就开工搞起了。我看了很多的个人博客大都是java + freemaker ，这个做主题是比较好更换的，但是局限性很大，不利于二次开发，而是改一下前端都需要整个重启费时费力。于是我就干脆直接搞个前后分离的博客。',
        comment: [
          {
            id: '1',
            name: 'byteblogs',
            content: '写不不错学习了',
            time: '2018-03-09',
            avatar: 'https://www.baidu.com/img/bd_logo1.png?where=super'
          },
          {
            id: '2',
            name: 'byteblogs',
            content: '写不不错学习了',
            time: '2018-03-09',
            avatar: 'https://www.baidu.com/img/bd_logo1.png?where=super'
          }
        ],
        commentTime: 500
      }
    }
  },
  mounted() {
    console.log(this.$route.query.id)
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
