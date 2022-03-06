import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";

const BrowseSpecificPage = ()=>
{
    const [randomData,setRandomData] = useState([]);
    const [loading, setLoading] = useState(false);
    const id = useParams();

    const fetchData =()=>{
        console.log('button1 clicked')
        
        fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${process.env.API_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setRandomData(data);
            // randomData.innerHTML = JSON.stringify(data.near_earth_objects[6].name);
            // randomData2.innerHTML = JSON.stringify(data.near_earth_objects[6].estimated_diameter);
  
        })
        .catch(err => console.log(err))
        .finally(() => {
            setLoading(false);
          });
    }

    useEffect(()=>{
        setLoading(true);
        fetchData();
    },[]);

    if (loading){
        return <h1>pls wait!!!</h1>
    }
    return(
        <div>
            <h1>Data needed:</h1>
                <p>{randomData.near_earth_objects.name}</p>
                <p>{randomData.near_earth_objects.name_limited}</p>
        </div>
        
    )
}

export default BrowseSpecificPage