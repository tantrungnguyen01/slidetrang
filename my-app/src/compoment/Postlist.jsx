import Post from "./Post"
import "./ecc.css"

function Postlist(props) {

    return <div className="warpper">

        {
            props.posts.map((post) => {
                return <Post handleremove={props.handleremove} key={post.id} post={post}  />
            })
        }

    </div>

}
export default Postlist;