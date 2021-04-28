
import './GithubIssues.css';

import { green } from '@material-ui/core/colors';
import 'bootstrap/dist/css/bootstrap.css'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
const GithubIssues =({res,userName,repo})=>{
    const displaydata = res.map((item)=>(
        <div className="g_issues pt-2 pl-2 d-flex">
            <ErrorOutlineIcon style={{ color: green[500] }} fontSize="small" className="issue__logo"/>
            <a  style={{textDecoration: "none", color: "black"}} href={item.html_url}>
            <div className="issue__content">
                <h6 className=" ml-1 issue__title">{item.title}</h6>
                <p className="issue__detail">{`#${item.number} opened on ${item.updated_at.slice(0,10).replaceAll("-","/")} by ${item.user.login}`}</p>
            </div>
            </a>

        </div>
    ))
    return (
        <>
          <div className="UpperDiv d-flex">
              <span className=" repo mt-3 ml-4 mr-1">{userName}</span><span className=" repo2 ml-0 mt-3">/</span><h4 className="mt-3 ml-0">{repo}</h4> 
          </div>
          <div className="lowerDiv d-flex">
              <ChevronLeftIcon fontSize="medium" className=" mt-3 ml-5 mr-0"/>
              <ChevronRightIcon fontSize="medium" className=" mt-3 ml-0 mr-0"/>
              <span className=" mt-3 ml-0 mr-1">Code</span>
              <span className="issues mt-3 mb-0  mr-1"><ErrorOutlineIcon className="mr-1"/>Issues 13</span>
              <span className="  mt-3 ml-4 mr-1">Pull requests</span>
              <span className="  mt-3 ml-4 mr-1">Action</span>
              <span className="  mt-3 ml-4 mr-1">Projects</span>
              <span className="  mt-3 ml-4 mr-1">Wiki</span>
              <span className="  mt-3 ml-4 mr-1">Security</span>
              <span className="  mt-3 ml-4 mr-1">Insights</span>
          </div>
          <div className=" guide   mt-4 rounded justify-content-center">
             <center><h5 className="mt-2">Want to contribute to TheCurryMan/GithubIntro?</h5></center>
              <center><p className="mb-0 mt-2">If you have a bug or an idea, browse the open issues before opening a new one. You can also take a look at the Open Source</p></center> 
           <center><span className="mt-0">Guide.</span></center>
          </div>
          <div className="d-flex input-group mb-3 filter mt-3">
              <button class=" btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">filter</button>
              <input type="text"  className="searchissues"  placeholder="search for issues"/>
                <button class=" ml-3 btn btn-outline-secondary" type="button">label 8</button>
                <button class="btn btn-outline-secondary" type="button">milestones 0</button>
                <button type="button" className="float-rigth ml-3 btn btn-success">New issue</button>
           </div>
           <div className="rounded-top g_issues2 pt-2 pl-2 d-flex">
               <ErrorOutlineIcon fontSize="small" className="float-right issue__logo"/>
               <p className=" float-right ml-2 mt-0">{`${res.length} open`}</p>
            
              
             
           </div>
           {/* <div className="container"> */}
           {displaydata}
           {/* </div> */}
        

        </>
    );
}

export default GithubIssues;