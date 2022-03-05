import React,{useState} from 'react'
// import Navbar from './navbar';

const Home = () =>{
    const [user, setUser] = useState({apiData:''});
    
    
    let name,value;
    const handleInput = (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value});
    }

    const button1Func = ()=>{
        console.log('button1 clicked')
        console.log(console.log(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`))
    }

    const button2Func = ()=>{
        console.log('button2 clicked')
        console.log(`https://api.nasa.gov/neo/rest/v1/neo/${user.apiData}?api_key=${API_KEY}`)
        // console.log(`https://api.nasa.gov/planetary/${user.apiData}?api_key=${API_KEY}`)
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
            <a href={`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`}>
                <button type="button" className="btn" id="button1" 
                    onClick={button1Func} disabled={!user.apiData}>
                    Button 1
                </button>
            </a>
            <a href={`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`}>
            <button type="button" className="btn" id="button2" onClick={button2Func}>Button 2</button>
            </a>
        </div>
    )
}
export default Home;