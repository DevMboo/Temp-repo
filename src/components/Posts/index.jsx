import { PostCard } from "../PostCard"
import './styles.css'
//uso de parenteses quando não houver lógica
export const Posts = ({posts}) => (
    <div className="posts">
          {posts.map(post => (
            <PostCard key={post.id} 
            id={post.id}
            title={post.title}
            body={post.body}
            cover={post.cover}
            />
          ))}
    </div>
)