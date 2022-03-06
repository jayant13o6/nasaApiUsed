// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes,useRoutes } from 'react-router-dom';
import Home from './component/home';
import BrowseDataPage from './component/browseDataPage';
import BrowseSpecificPage from './component/browseSpecificPage';

const AddRoute = () => {
	let routes = useRoutes([
	    { path: "/", element: <Home /> },
      { path: "/browseDataPage", element: <BrowseDataPage/>},
      { path: "/browseSpecificPage/:id", element: <BrowseSpecificPage/>}
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
