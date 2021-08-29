import {makeStyles} from '@material-ui/core/styles';
export default makeStyles((theme)=>({
appBar:{
    borderRdaius:15,
    margin:'30px 0',
    display:'flex',
    flexDirection:'ceneter',
    justifyContent:'row',
    alignItems:'ceneter',
},
[theme.breakpoints.down('sm')]:{
   maintc:{
    flexDirection:"column-reverse"
}, 
},

heading:{
    color:'rgba(0,185,255,1)',
},
margin:{
 marginLeft:'15px',
}
}));