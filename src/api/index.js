import axios from  'axios';

const url="http://localhost:5000/post";

export const fetcPost=()=>axios.get(url);
export const createPost=(newpost)=>axios.post(url,newpost);
export const updatePost=(id,updatePost)=>axios.patch(`${url}/${id}`,updatePost);
export const deletePosts=(id)=>axios.delete(`${url}/${id}`);
export const likePost=(id)=>axios.patch(`${url}/${id}/likepost`);
