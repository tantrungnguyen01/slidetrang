import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { config } from "../utils";


function Detailpages(){

    const[post,setpost]=useState(null)

    const params=useParams();

    const handleFecthpostdetail= async ()=>{

        try {
            const data = await axios.get(`${config.API_URL}/posts/${params.postid}`);
            setpost(data);
        } catch (e) {
            console.log('handleFecthpostdetail: ',e);
        }
    }
    useEffect(()=>{
        handleFecthpostdetail();
    },[params.postid])



    return <div>

            {
                post && (<div>
                    <p>author:{post.author}</p>
                    <p>title:{post.title}</p>
                    <p>description:{post.description}</p>
                </div>)

            }

    </div>
}
export default Detailpages;