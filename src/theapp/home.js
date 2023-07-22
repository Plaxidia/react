import { useState, useEffect } from 'react';

import Bloglist from './bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPendeing ] = useState(true);

    useEffect(() => { 
        setTimeout (() => {
            fetch(" http://localhost:3000/blogs")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPendeing(false);
            })
        },2000)
   
    }, []);
    return (
        <div className=" home">
            {isPending && <div> Loading.....</div>}
            {blogs && <Bloglist blogs = {blogs} title = {"All blogs"}/>}
        </div>
    );
}

export default Home;
/*
 <button onClick = {(e) =>handleclickAgain ('Plaxie',e)} >Click here again</button>
 */