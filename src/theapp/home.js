import {useState} from 'react';

const Home = () => {
    //let name = "Plaxie";
    const [name ,setName] = useState('Musaigwa');
    const [age ,setAge] =useState (23);


    const handleclick =() =>{
      setName("hove");
      setAge(24);
    }
    return ( 
        <div className=" home">
            <h2> HomePage</h2>
            <p>{name} is {age} years old</p>
            <button onClick = {handleclick}> Click here</button>
        </div>
     );
}
 
export default Home;
/*
 <button onClick = {(e) =>handleclickAgain ('Plaxie',e)} >Click here again</button>
 */