import React from 'react';


// http request for articles 
const url = 'https://dev.to/api/articles?username=polmonroig';
const http = new XMLHttpRequest(); 
http.open("GET", url);
http.send(); 
http.onreadystatechange=(e)=>{
    console.log(http.responseText); 
}

class Root extends React.Component {
    
    render(){
        return (
            <>
            <h1>Personal Blog</h1>
            <p>Hello world</p>
            </>
        );
    }
}

export default Root;
