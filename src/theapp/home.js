import { useState, useEffect } from 'react';

import Bloglist from './bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState("Mario");
    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog);
    }

    useEffect(() => {
        fetch(" http://localhost:3000/blogs")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
            })
    }, []);

    // you put an empty array if you want to run the array once
    return (
        <div className=" home">
            {blogs && <Bloglist blogs = {blogs} title = {"All blogs"} 
             handleDelete = {handleDelete} />
               }
                 <button onClick = {() => setName("Edina")}> change name</button>
        </div>
    );
}

export default Home;
/*
 <button onClick = {(e) =>handleclickAgain ('Plaxie',e)} >Click here again</button>
 */