import NewPost from "../NewPost/NewPost";
import styles from "../Post/Post.module.css";
function Post() {

 return (
    <div>
        <NewPost styles = {styles.newp}/>
    </div>
  )
}

export default Post;