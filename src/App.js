// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes,useRoutes } from 'react-router-dom';
import Home from './component/home';

const AddRoute = () => {
	let routes = useRoutes([
	    { path: "/", element: <Home /> },
  	]);
  	return routes;
}

function App() {
  return (
    <Router>
      <AddRoute/>
    </Router>
    
  );
}


export default App;
