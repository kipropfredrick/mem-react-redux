import postMessage from "../models/post.models.js";
import mongoose from 'mongoose';
export  const getPost = async (req,res)=>{
    try {
        const postMessages = await postMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost= async (req,res)=>{
//res.send('created post');
const post=req.body;
const newpost=new postMessage(post);
try {
    await newpost.save();
    res.status(201).json(newpost);
} catch (error) {
    res.status(409).json({message: error.message});
}
};

export const updatePost = async (req, res) => {
    const { id:_id } = req.params;
    const post = req.body;
   // console.log(post);
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id`);

    const updatedPosts= await postMessage.findByIdAndUpdate(_id, {...post,_id},{new:true});
     if (updatedPosts) {
         console.log('updated');
      res.json(updatedPosts);
     }else{
         console.log('not updated');
     }
}
export const deletePost=async(req,res)=>{
    
    const {id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('no post id with');
    }
    const deleted=await postMessage.findOneAndRemove(id);
   console.log('deleted');
    res.json({message:"deleted succesfully"});
}
export const likePost= async(req,res)=>{
   const {id}=req.params;
   if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('no post id with');
}
const post=await postMessage.findById(id);

const likedPost=await postMessage.findByIdAndUpdate(id,{likeCount:post.likeCount +1},{new:true});
res.json(likedPost);
}