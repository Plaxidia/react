import { useState, useEffect } from 'react';

import Bloglist from './bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPendeing ] = useState(true);
    const [error , setError] =useState(null);

    useEffect(() => { 
        setTimeout (() => {
            fetch(" http://localhost:3000/blogs")
            .then(res => {
                console.log(res);
            if(!res.ok)
            {
                throw Error ("Could not fetch the data");

            }
        
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPendeing(false);
                setError(null);
            })
            .catch(err => {
                setIsPendeing(false);
                setError(err.message);
                //console.log(err.message);
                        })
            
        },2000);
   
    }, []);
    return (
        <div className=" home">
            {error && <div> {error}</div>}
            {isPending && <div> Loading.....</div>}
            {blogs && <Bloglist blogs = {blogs} title = {"All blogs"}/>}
        </div>
    );
}

export default Home;
/*
 <button onClick = {(e) =>handleclickAgain ('Plaxie',e)} >Click here again</button>
 */