//import { FETCH_ALL,CREATE } from "../../contstants/actionTypes";
//State should always be equal to something
//posts=state

import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from "../../contstants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (posts =[],action)=>{
   switch (action.type) {
      case DELETE:
         return posts.filter((post)=>post._id !==action.payload);
       case FETCH_ALL:
          return action.payload;
         //  case "LIKE":
         //  return posts.map((post)=>post._id===action.payload._id ?action.payload :post);
         //  or
       case UPDATE:
       case LIKE:
          return posts.map((post)=>post._id===action.payload._id ?action.payload :post);
        case CREATE:
        return [...posts,action.payload];
          
       default:
           return posts;
   }
}