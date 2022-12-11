import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { config } from "../utils";


function Addedit(){
    const navigate=useNavigate();
    const params=useParams();

    const[postFrom,setPostfrom]=useState({
       title:'',
       author:'',
       description:'',
    })

    const handleGetDetailpost = async () =>{
        try {
            const data = await axios.get(`${config.API_URL}/posts`);
            setPostfrom(data.data);
        } catch (e) {
            console.log('handleGetDetailpost', e);
        }
    }
    useEffect(()=>{
        if(params.postId){
            handleGetDetailpost();
        }
       
    },[params.postId])

    const handlePostFormChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPostfrom(
            {
                ...postFrom,
                [name]: value
            }
        )
    }
    const handleAddEditPost = async (event) => {
        event.preventDefault();
        try {
            if(params.postId){
                const newPost=await axios.patch(`${config.API_URL}/posts/${params.postId}`,postFrom);
                navigate(`/detail/${newPost.data.id}`);
                return;
            }
            const newPost = await axios.post(`${config.API_URL}/posts`, postFrom);
            navigate(`/detail/${newPost.data.id}`)
        } catch (e) {
            console.log('handleAddEditPost', e);
        }
        
    }


    return <div>
        <form>
        <input onChange={handlePostFormChange} value={postFrom.title} name="title" placeholder="title"  /><br/>
        <input onChange={handlePostFormChange} value={postFrom.author} name="author" placeholder="product" /><br/>
        <textarea onChange={handlePostFormChange} value={postFrom.description} name="description" placeholder="description"></textarea><br/>
        <button onClick={handleAddEditPost}>{params.id ? 'Edit' : 'Post'}</button>
        </form>

    </div>
}
export default Addedit;