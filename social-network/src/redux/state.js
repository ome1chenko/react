import {rerenderEntireTree} from "../render";
let state = {
  profilePage:{
    posts:[
      {id:1, message: "Hi, how are you?", likesCount: 12},
      {id:2, message: "It is my first post", likesCount: 11}    
    ]
  },
  dialogsPage:{
  messages:[
    {id:1, message: "Hi"},
    {id:2, message: "Hello"},
    {id:3, message: "How are you"}   
  ],
  dialogs:[
    {id:1, name: "aAlex"},
    {id:2, name: "bAlex"},
    {id:3, name: "cAlex"},
    {id:4, name: "dAlex"},
    {id:5, name: "eAlex"}
  ]
 }
  
}

export let addPost = (postMessage) => {
  
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export default state;