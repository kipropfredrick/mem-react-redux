
import * as api from '../../api/index'
import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from '../../contstants/actionTypes'
//action creators
export const getPost = (posts)=>async(dispatch)=>{
    try {
        const {data}=await api.fetcPost(posts)
            dispatch(
                {
                    type:FETCH_ALL,
                    payload:data
                }
         ) 
         
    } catch (error) {
        
    }
    
}
export const createPosts=(post)=>async (dispatch)=>{
    try {
        console.log(post);
        const {data}=await api.createPost(post);
        console.log(data);
            dispatch(
                {
                    type:CREATE,
                    payload:data
                }
            );
        
    } catch (error) {
        console.log("Error:" + error);
        
    }
}
export const updatePost =(id,post)=>async(dispatch)=>{
    try {
        const {data}= await api.updatePost(id,post);
        dispatch({type:UPDATE,payload:data});
        console.log(data);
    } catch (error) {
        console.log("error:"+ error);
        
    }
}
export const deletePosts=(id)=>async(dispatchDle)=>{
try {
    await api.deletePosts(id);
    dispatchDle({type:DELETE,payload:id});
} catch (error) {
    console.log({post:"post deleted"});
}}

export const likingPost=(id)=>async(dispatchlike)=>{
    try {
        const {data}=await api.likePost(id);
        dispatchlike({type:LIKE,payload:data});
    } catch (error) {
        console.log(error);
    }
}
