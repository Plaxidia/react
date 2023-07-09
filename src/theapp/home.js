const Home = () => {
    const handleclick =(e) =>{
        console.log("hello,P ",e);
    }
    const handleclickAgain =(name, e) => {
        console.log("hello",+ name,e.target)

    }
    return ( 
        <div className=" home">
            <h2> HomePage</h2>
            <button onClick = {handleclick}> Click here</button>
            <button onClick = {(e) =>handleclickAgain ('Plaxie',e)} >Click here again</button>
        </div>
     );
}
 
export default Home;