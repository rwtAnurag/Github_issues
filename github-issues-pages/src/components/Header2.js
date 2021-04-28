
import 'bootstrap/dist/css/bootstrap.css';
import './header.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import DehazeIcon from '@material-ui/icons/Dehaze';

const Header2 =()=>{
    return(
      // <div>
      //   <h1>This is for mobile</h1>
      // </div>
      <header className="App-header pl-4  pb1-1" >
       <GitHubIcon  fontSize="large"/>
        <input  type="text" className="ml-4 mt-3 rounded-lg  pl-3 pt-1 pb-1 " aria-describedby="inputGroup-sizing-lg" placeholder="Search or jump to..."/>
        <span className="float-right">
          <DehazeIcon  fontSize="large">
          </DehazeIcon>
         </span>
        
      </header>
    );
}

export default Header2;