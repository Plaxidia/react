import {useState, useEffect} from 'react';

import Bloglist from './bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title : "My new website", body: "lorem ipsum...", author: "musaigwa", id: 1},
        {title : "Welcome party", body: "lorem ipsum...", author: "Hove", id: 2},
        {title : "web dev top tips", body: "lorem ipsum...", author: "Plaxie", id: 3}
    ]);
    const handleDelete = (id) =>{
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog);
    }
    useEffect(() => {
        console.log(" use effect run");
        console.log(blogs);

    });
    return ( 
        <div className=" home">
           <Bloglist blogs = {blogs} title = {"All blogs"} handleDelete = {handleDelete} />
          
        </div>
     );
}
 
export default Home;
/*
 <button onClick = {(e) =>handleclickAgain ('Plaxie',e)} >Click here again</button>
 */