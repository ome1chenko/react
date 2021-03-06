const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";


let store = {
  _state: {
    profilePage:{
      posts:[
        {id:1, message: "Hi, how are you?", likesCount: 12},
        {id:2, message: "It is my first post", likesCount: 11}    
      ],
      newPostText:"Go go go!!!"
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
    ],
    newMessageBody: ""
   }
    
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState(){
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },  
  dispatch(action){//{type: "ADD-POST"}
    if(action.type === ADD_POST){
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
    
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    }else if(action.type === UPDATE_NEW_POST_TEXT){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }else if(action.type === UPDATE_NEW_MESSAGE_BODY){
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }else if(action.type === SEND_MESSAGE){
      let body = this._state.dialogsPage.newMessageBody
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({id: 6, message: body});
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
  ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => 
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default store;