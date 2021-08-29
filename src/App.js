import React,{useEffect, useState} from 'react';
import { Grid,Grow,Typography,Container,AppBar } from '@material-ui/core';
import memories from './components/images/memories.jpg';
import Post from './components/post/post';
import { useDispatch } from 'react-redux';
import Form from './components/Form/form';
//inside the redux files actions folder
//import {getPost} from './redux_files/actions/posts.js';
import useStyles from './styles.js';
import { getPost } from './redux_files/actions/posts';
 const App=()=>{
     const classes=useStyles();
     const [currentId,setCurrentId]=useState(null);
     //define the hook
     //useEffect is used to dispatch the appropriate action
     const dispatch=useDispatch();
     useEffect(()=>{
     dispatch(getPost());
     },[dispatch]);
    return(
        <Container maxwidth="lg">
            <AppBar className={classes.img} position="static">
                <Typography className={classes.heading} variant="h2" align="center">Mmories</Typography>
                <img  className={classes.img} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" className={classes.maintc} alignItems="stretch" spacing={3}>
                    {/* divices width xs an sm */}
                     <Grid item xs={12} sm={7}>
                        <Post  setCurrentId={setCurrentId}/> 
                     </Grid>
                     <Grid item xs={12} sm={4}>
                       <Form currentId={currentId} setCurrentId={setCurrentId}/>  
                     </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
};
export default App;