
import s from "./../Dialogs.module.css";


//Sub component
const Message = (props) => {
  
  return (
    <div className={s.dialog}>{props.message}</div>
  )
}


export default Message;