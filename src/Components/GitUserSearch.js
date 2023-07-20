import React from "react";
import {useState} from "react";

const API_URL = "https://api.github.com";

async function getQueryResults(query){

    try{
    const response=await fetch(`${API_URL}/search/users?q=${query}`);
    const json=await response.json();
    return json.items||[];
    }
    catch(e){
        throw new Error(e);
    }
}



function GitUserSearch(){
    const [query, setquery]=useState("");
    const [results, setResults]=useState([]);

    async function onQueryChange(event){
        setquery(event.target.value);
    }

    async function onQuerySubmit(event){
        event.preventDefault();
        const results=await getQueryResults(query);
        setResults(results);

    }

    return (
        <div>

            <form onSubmit={onQuerySubmit}>
                <input type="text" name="quer" onChange={onQueryChange} value={query}></input>
                <button>search</button>
            </form>
            <div>
            {results.map((user)=>(
                     
                     <User key={user.login} username={user.login} avatar={user.avatar_url} url={user.html_url}>

                     </User>
         
            ))}
           </div>
        </div>
    );
}

function User({ avatar, url, username }) {
    return (
      <div className="user">
        <img src={avatar} alt="Profile" width="50" height="50" />
        <a href={url} target="_blank" rel="noopener noreferrer">
          {username}
        </a>
      </div>
    );
  }

export default GitUserSearch;