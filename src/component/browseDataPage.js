import React,{useState,useEffect} from "react";

const BrowseDataPage = () =>{
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [randomData,setRandomData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData =()=>{
        console.log('button2 clicked')
        
        fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.near_earth_objects[6])
            setRandomData(data.near_earth_objects[Math.floor((Math.random() * 10) + 1)]);
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
            <h1>BrowseDataPage:</h1>
            <ul>
            {
                <div>{randomData.name}
                <br/>
                {randomData.name_limited}</div>
                // <div>{randomData.estimated_diameter}</div>
                // <li>{randomData.estimated_diameter}</li>
            }
            </ul>
        </div>
    )
}

export default BrowseDataPage