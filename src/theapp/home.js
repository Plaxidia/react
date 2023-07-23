import { useState, useEffect } from 'react';
import usefetch from './usefetch';
import Bloglist from './bloglist';

const Home = () => {


    const {dataa: blogs, isPending, error } = usefetch("http://localhost:3000/blogs");

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