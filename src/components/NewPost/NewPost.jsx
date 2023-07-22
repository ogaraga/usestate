import { useState } from "react"; 
import styles from "../NewPost/NewPost.module.css";
function NewPost() {
  const [readMe, setReadMe] = useState('');
  const [myName, setMyName] = useState('');
 const onKeyHandler = (event)=>{
  setReadMe(event.target.value);
 }
 const onNameHandler = (event)=>{
  setMyName(event.target.value);
 }
 
 
return (
    <form className = {styles.new}>
       <div className= {styles.textA}>
        <h1>Learning how to use States and Events</h1>
        <input onKeyUp={onNameHandler} type="text" name="name" id="myname" className={styles.myname} placeholder="Enter your name here" />
        <textarea onKeyUp={onKeyHandler} name="textarea" id="textarea" cols={30} rows={3} placeholder="Write something here..."/>
       </div>
       <div className={styles.transport}>
        <h2>{myName}</h2>
        <p>{readMe}</p>
       </div>
    </form>
    
  )
  
}


export default NewPost;