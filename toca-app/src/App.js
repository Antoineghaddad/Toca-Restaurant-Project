import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Logo from "./Images/Logo.jpg";
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Events from './Components/Events/Events';
import {BrowserRouter , Route } from 'react-router-dom';
import Order from './Components/Order/Order';
import Sidebardata from './Components/Sidebar/Sidebardata';



const App = () => {

  return (
  
  <BrowserRouter>
    <div className="App" id="outer-container">
      <Sidebardata pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <div id="page-wrap">
       <img className="Logo-img" src={Logo} alt="logo" />
       
      <Navbar  pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
      <Route exact path="/" component={Home}/>
      <Route path="/Blogs" component={Blogs}/>
      <Route path="/Order" component={Order}/>
      <Route path="/Events" component={Events}/>
      </div>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
