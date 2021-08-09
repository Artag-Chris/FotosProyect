import axios from 'axios';//axios ayuda a conectar con el back-end mandando request

const url = 'http://localhost:5000/posts';

//http verbos para conectar el back-end con el front-end

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
