import { useState } from "react";

const RepoDetail = ({setError,setFlag,setRepo,setUsername,setActiveUser,setRes})=>{
    const [username,setUserName] = useState('');
    const [reponame,setRepoName] = useState('');
    const handleClick = ()=>{
      if(username && reponame){
        setUsername(username);
        setRepo(reponame);
        setActiveUser(true); 
        fetch(`https://api.github.com/repos/${username}/${reponame}/issues`)
        .then((response)=>response.json())
        .then((result)=>{
          console.log(result);
          if(result.message!==undefined){
            setError(result.message);
            console.log(result.message);
            setRes([]);
            setFlag(false);
        }
        else{
            setError("");
            setRes(result);
            setFlag(true); 
            setActiveUser(true);  
        }
        })
      }
      else{
        alert("⚠️ User Name and Repo Name can't be empty");
      }
    }
    return(
        <>
        <input className="form-control mt-5" type="text" placeholder="User Name" value={username} onChange ={(event)=>{
                  setUserName(event.target.value)
        }}/>
          <input className="form-control mt-4" type="text" placeholder="Repo Name" value={reponame} onChange ={(event)=>{
                  setRepoName(event.target.value)
        }}/> 
          <button type="button" className="btn btn-info mt-4 mb-1" onClick={handleClick}>Get Issues</button> 
        </>  
    );

}

export default RepoDetail;