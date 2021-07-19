import s from './Post.module.css';

const Post = (props) =>{
  
  return ( 
  
    <div className={s.item}>
      <img src="https://www.imgacademy.com/sites/default/files/2018-10/080818-img-world-tour-logo-c-1600x1600.png"/>
      {props.message}
      <span>like</span>{props.likesCount}
    </div>
    
  
    
  )   
  
}
export default Post;