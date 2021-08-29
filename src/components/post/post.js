import React from 'react';
import Posts from './Post/posts';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';
import useStyles from './style';

const Post =({setCurrentId})=>
{
    const classes=useStyles();
    //posts from reducers index js file
    const selector=useSelector((state)=>state.posts);
    //console.log(selector.length);
    return(
        !selector.length ? <CircularProgress /> :selector.map(post=>(
            <Grid className={classes.container}  spacing={3} container alignItems="stretch">
             <Grid key={post._id} item xs={12} sm={6} md={6}>
             <Posts post={post} setCurrentId={setCurrentId}/>
             </Grid>
            </Grid>
        ))
    )
}
export default Post;