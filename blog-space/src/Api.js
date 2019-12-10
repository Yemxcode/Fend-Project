import axios from "axios";

const baseUrl = "https://app-nc-news.herokuapp.com/api/";

export const getData = () => {
  return axios.get(`${baseUrl}topics`).then(({ data }) => data);
};

export const getArticleById = id => {
  return axios.get(`${baseUrl}articles/${id}`).then(({ data }) => data);
};

export const getArticles = params => {
  return axios.get(`${baseUrl}articles`, { params }).then(({ data }) => data);
};

export const getComments = (id, params) => {
  return axios
    .get(`${baseUrl}articles/${id}/comments`, { params })
    .then(({ data }) => data);
};

export const postComment = (id, username, body) => {
  return axios
    .post(`${baseUrl}articles/${id}/comments`, { username, body })
    .then(({ data }) => data);
};

export const getUser = username => {
  return axios.get(`${baseUrl}users/${username}`).then(({ data }) => data);
};

export const getUsers = () => {
  return axios.get(`${baseUrl}users`).then(({ data }) => data);
};

// export const getArtAndTop = () => {
//   return axios.all([
//     axios.get(`${baseUrl}topics`),
//     axios.get(`${baseUrl}articles`)
//   ]).then(axios.spread(([topicsRes, articlesRes]) => (topicsRes, articlesRes) ));
// };

export const getTopics = () => {
  return axios.get(`${baseUrl}topics`).then(({ data }) => data);
};

export const patchVotes = (commentOrArticle, id, votes) => {
  console.log(votes)
  return axios
    .patch(`${baseUrl}${commentOrArticle}/${id}`, votes)
    .then(({ data }) => data);
};

export const deleteCommentById = id => {
  return axios.delete(`${baseUrl}comments/${id}`).then(res => res);
};

export const deleteArticleById = id => {
  return axios.delete(`${baseUrl}articles/${id}`).then(res => res);
};

export const postTopic = (description, slug) => {
  return axios
    .post(`${baseUrl}topics`, { description, slug })
    .then(({ data }) => data);
};

export const postArticle = (author, body, topic, title) => {
  return axios
    .post(`${baseUrl}articles`, { author, body, topic, title })
    .then(({ data }) => data);
};

export const postUser = (username, avatar_url, name) => {
  return axios
    .post(`${baseUrl}users`, { username, avatar_url, name })
    .then(({ data }) => data);
};
