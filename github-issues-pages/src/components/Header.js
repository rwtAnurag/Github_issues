
import 'bootstrap/dist/css/bootstrap.css';
import './header.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const Header =()=>{
    return(
      <header className="App-header pl-4  pb1-1" >
       <GitHubIcon  fontSize="large"/>
        <input  type="text" className="ml-4 mt-3 rounded-lg  pl-3 pt-1 pb-1 " aria-describedby="inputGroup-sizing-lg" placeholder="Search or jump to..."/>
        <span>Pull requests</span>
        <span>Issues</span>
        <span>Marketplace</span>
        <span>Explore</span>
        <span className="float-right ml-0 mr-1"><ArrowDropDownIcon/></span>
        <span className="float-right ml-0 mr-0"><AccountCircleIcon/></span>
        <span className="float-right ml-0 mr-3"><ArrowDropDownIcon/></span>
        <span className="float-right mr-0 "><AddIcon /></span>
        <span className="float-right mr-0"><NotificationsNoneIcon /></span>
        
      </header>
    );
}

export default Header;