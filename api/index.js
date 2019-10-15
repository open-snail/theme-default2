export function fetchArticleList(request, query) {
  return request({
    url: '/api/blog/posts/posts/v1/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(request, id) {
  return request({
    url: `/api/blog/posts/posts/v1/${id}`,
    method: 'get'
  })
}

export function fetchLinkList(request, query) {
  return request({
    url: '/api/blog/link/link/v1/list',
    method: 'get',
    params: query
  })
}

export function fetchTagsList(request, query) {
  return request({
    url: '/api/blog/tags/tags-article-quantity/v1/list',
    method: 'get',
    params: query
  })
}

export function fetchCategoryList(request, query) {
  return request({
    url: '/api/blog/category/category/v1/list',
    method: 'get',
    params: query
  })
}

export function fetchArchiveGroupYearList(request, query) {
  return request({
    url: '/api/blog/archive/year/v1/list',
    method: 'get',
    params: query
  })
}

export function fetchConfigList(request, params) {
  return request({
    url: '/api/blog/config/config-base/v1/list',
    method: 'get',
    params
  })
}

export function fetchMasterInfo(request) {
  return request({
    url: '/api/blog/auth/master/v1/get',
    method: 'get'
  })
}

export function logout(request) {
  return request({
    url: '/api/blog/auth/auth/v1/logout',
    method: 'post'
  })
}

export function getOauthLoginByGithub(request, params) {
  return request({
    url: '/api/blog/auth/github/v1/get',
    method: 'get',
    params
  })
}

export function login(request, data) {
  return request({
    url: '/api/blog/auth/user/v1/login',
    method: 'post',
    data
  })
}

export function getInfo(request, token) {
  return request({
    url: '/api/blog/auth/user/v1/get',
    method: 'get',
    headers: {
      Authorization: token
    }
  })
}

export function savePostsComments(request, data) {
  return request({
    url: '/api/blog/comments/comments/v1/add',
    method: 'post',
    data
  })
}

export function getPostsCommentsList(request, params) {
  return request({
    url: '/api/blog/comments/comments-posts/v1/list',
    method: 'get',
    params
  })
}
