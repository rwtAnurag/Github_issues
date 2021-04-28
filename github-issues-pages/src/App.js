
import './App.css';
import Img from './Octocat.png';
import Header from './components/Header.js';
import Header2 from './components/Header2.js';
import GithubIssues from './components/GithubIssues.js';
import Error from './components/Error.js';
import RepoDetail from './components/RepoDetail.js';

import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';

function App() {
  
  
   const [activeUser,setActiveUser] = useState(false);
   const [res,setRes] = useState([]);
   const [userName,setUsername] =useState("");
   const [repo,setRepo] =useState("");
   const [error,setError] = useState("");
  const [flag,setFlag] = useState(false);
  const w_width=window.innerWidth;
  
  return (
    <>
    {w_width>540?<Header/>:<Header2/>}
    {activeUser ?
        error === "Not Found" ? 
        <Error/>
        : 
        flag===true ? <GithubIssues userName={userName} repo={repo} res={res}/>: null
    :
    <div className="container mt-3 d-flex">  
       <img src={Img} alt="logo"></img>  
       <div className="container pb-5 bg-light mt-5 mb-5 pt5 border dark rounded">
        <RepoDetail setError={setError} setFlag={setFlag} setUsername={setUsername} setRepo={setRepo} setRes={setRes} setActiveUser={setActiveUser}/>
       </div> 
    </div>
     }

    </>
  )
}

export default App;
