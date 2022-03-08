import { useNavigate } from 'react-router-dom';
import React,{useState} from 'react'
// import Navbar from './navbar';

const Home = () =>{
    const [user, setUser] = useState({apiData:''});
    const API_KEY = process.env.REACT_APP_API_KEY;

    const navigate = useNavigate();
    let name,value;
    const handleInput = (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value});
    }

    const button1Func = ()=>{
        console.log('button1 clicked')
        console.log(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`)
        fetch(`https://api.nasa.gov/neo/rest/v1/neo/${user.apiData}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            navigate(`/browseSpecificPage/${user.apiData}`)
        })
        .catch(err => console.log(err))
    }

    const button2Func = async()=>{
        console.log('button2 clicked')
        var randomData = document.querySelector('.randomData')
        var randomData2 = document.querySelector('.randomData2')
        console.log(`https://api.nasa.gov/neo/rest/v1/neo/${user.apiData}?api_key=${API_KEY}`)
        // console.log(`https://api.nasa.gov/planetary/${user.apiData}?api_key=${API_KEY}`)
        fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.near_earth_objects[Math.floor((Math.random() * 10) + 1)])
            randomData.innerHTML = JSON.stringify(data.near_earth_objects[Math.floor((Math.random() * 10) + 1)].name);
            randomData2.innerHTML = JSON.stringify(data.near_earth_objects[Math.floor((Math.random() * 10) + 1)].estimated_diameter);
            navigate('/browseDataPage');    
        })
        .catch(err => console.log(err))

    }

    return(
        <div>
            {/* <Navbar/> */}
            <p className='mt-5'>Welcome</p>
            <h1>Mern Development</h1>
            
            <form>
                <div className="form-group">
                    <label htmlFor="data">Enter data</label>
                    <input type="text" 
                    className="form-control" 
                    id = "apiData"  name = "apiData"
                    placeholder="Enter value"
                    onChange = {handleInput}
                    value = {user.apiData}/>
                </div>
            </form>
            {/* <a href={`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`}> */}
                <button type="button" className="btn" id="button1" 
                    onClick={button1Func} disabled={!user.apiData}>
                    Button 1
                </button>
            {/* </a> */}
            {/* <a href='localhost:3000/browseRandomData'> */}
            <button type="button" className="btn" id="button2" onClick={button2Func}>Button 2</button>
            {/* </a> */}
            <p className='randomData'></p>
            <p className='randomData2'></p>
        </div>
    )
}
export default Home;