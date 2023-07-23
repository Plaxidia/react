import { useEffect ,useState} from "react";


const Usefetch =(url) => {

    const [dataa, setData] = useState(null);
    const [isPending, setIsPendeing ] = useState(true);
    const [error , setError] =useState(null);

    useEffect(() => { 

        setTimeout (() => {

            fetch(url)
            .then(res => {
                console.log(res);

            if(!res.ok)
            {
                throw Error ("Could not fetch the data");
            }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPendeing(false);
                setError(null);
            })
            .catch(err => {
                setIsPendeing(false);
                setError(err.message);
            })
            
        },2000);
   
    }, [url]);
    return {error, dataa, isPending};
}
export default Usefetch;