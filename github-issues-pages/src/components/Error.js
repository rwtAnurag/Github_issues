import './Error.css';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import 'bootstrap/dist/css/bootstrap.css'
const Error = ()=>{
    return(
        <>
        <div className="mt-4 btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary">created</button>
        <button type="button" class="btn  btn-outline-secondary">assigned</button>
        <button type="button" class="btn  btn-outline-secondary">mentioned</button>
        <input type="text" className=" ml-2 form-control1" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon"></input>
        </div>
        <div  className="error_div1 mt-3 rounded-top">

        </div>
        <div className="error_div justify-content-center pt-5">
        <center>  <ErrorOutlineIcon fontSize="large" className="mt-3"/></center>
         <center><h5 className="mt-4">No results matched your search.</h5></center>  
         <center> <p>You could search all of GitHub or try an advanced search.</p></center>
        </div>
        </>
    );
}
 export default Error;