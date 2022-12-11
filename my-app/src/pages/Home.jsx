import { useEffect, useState } from "react";
import axios from 'axios';
import { config } from "../utils";
import Postlist from "../compoment/Postlist";
import { Postcontext } from "../context/Postcontext";


function Homepage() {
    const [page, setpage] = useState(1);
    const [list, setlist] = useState([]);
    const [pages, setpages] = useState(0);

    const handleFetchpost = async () => {
        try {
            const postData = await axios.get(`${config.API_URL}/posts?_limit=15_page=${page}`);
            setlist(postData.data.data);

            const { _totalRows, _limit } = postData.data.pagination;
            const pages = Math.ceil(_totalRows / _limit);
            setpages(pages);
            console.log(new Array(pages));
            console.log(Array.from({ length: pages }))
        } catch (e) {
            console.log('handle fetch post: ', e);
        }

    }

    useEffect(() => {
        handleFetchpost();
    }, [page]);


    const handleremove = async (post) => {
        try {
            await axios.delete(`${config.API_URL}/posts/${post.id}`);
            handleFetchpost();
        } catch (e) {
            console.log('DELETE ERROR:', e);
        }
    }


    return (
        <Postcontext.Provider>

            <Postlist posts={list} handleremove={handleremove} />
            {
                Array.from({ length: pages }).map((_, index) => {
                    return <button onClick={() => setpage(index + 1)} key={index}>{index + 1}</button>
                })
            }
        </Postcontext.Provider>


    )



}
export default Homepage;