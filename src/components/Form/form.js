import React,{useEffect, useState} from 'react';
import { Typography,Button,Paper,TextField } from '@material-ui/core';
import FileBase from 'react-file-base64';
import Styles from './style.js';
import { useDispatch, useSelector } from 'react-redux';
import { createPosts ,updatePost} from '../../redux_files/actions/posts.js';
const Form=({currentId,setCurrentId})=>{
    const onepost=useSelector((state)=>currentId ?state.posts.find((p)=>p._id ===currentId ):null);
    const formStyle = Styles();
    const [postData,setPosts]=useState({
       //input field name
       creator:'',tags:'',title:'',selectedFile:'',message:'',
    });
    const dispatch =useDispatch();
    useEffect(()=>{
     if (onepost)setPosts(onepost);
    },[onepost]);
    const handleSubmit=(e)=>{
        //prevent refresh
        e.preventDefault();
        if (currentId) {
            //console.log(currentId,postData);
            dispatch(updatePost(currentId,postData));
        }else{
            console.log('new post created');
            dispatch(createPosts(postData));
        }
        clear();
    }
    const clear=()=>{
        setCurrentId(null);
        setPosts({ creator:'',tags:'',title:'',selectedFile:'',message:'',});

    }
    return(
        <div>
            <Paper className={formStyle.paper}>
             <form autoComplete="on" noValidate onSubmit={handleSubmit} className={`${formStyle.root} ${formStyle.form}`}>
              <Typography variant="h6">{currentId ? "Editing " :"creating"}memory</Typography>
              <TextField name="creator"variant="outlined" label="Creator" fullWidth value={postData.creator}onChange={(e)=>setPosts({...postData,creator:e.target.value})}
              />
              <TextField name="tags"variant="outlined" label="Tags" fullWidth value={postData.tags}onChange={(e)=>setPosts({...postData,tags:e.target.value.split(',')})}
              />
              <TextField name="title"variant="outlined" label="Title" fullWidth value={postData.title}onChange={(e)=>setPosts({...postData,title:e.target.value})}
              />
              <TextField name="message"variant="outlined" label="Message" fullWidth value={postData.message}onChange={(e)=>setPosts({...postData,message:e.target.value})}
              />
            <div className={formStyle.fileInput}><FileBase type="Image" multiple={false} onDone={({ base64 }) => setPosts({ ...postData, selectedFile: base64 })} /></div>
              <Button className="formStyle.buttonSubmit" variant="contained" color="primary"size="large" type="submit">Save</Button>
              <Button variant="contained" color="secondary"size="small" onClick={clear}>Clear</Button>

             </form>
            </Paper>
        </div>
    )
};
export default Form;