import { useNavigate } from "react-router-dom";


function Post(props) {
    const { post ,handleremove } = props;

    const navigate=useNavigate();
    const handleGoToDetail = () => {
        navigate(`/detail/${post.id}`);
    }

    return <div className="post" onClick={handleGoToDetail}>
        <p>tiltle:{post.title}</p>
        <p>author:{post.author}</p>
        <button onClick={(e)=>{
            e.stopPropagation();
            handleremove(post)
        }}>remove</button>
    </div>

}
export default Post;



