import React from 'react';
import Post from './post'; 

// http request for articles 


class Root extends React.Component {
   

    constructor(props){
        super(props);
        this.state = {
            error: null, 
            isLoaded: false, 
            data : []
        };
        this.getData();
    }

    getData = () => {
        const url = 'https://dev.to/api/articles?username=polmonroig';
        const http = new XMLHttpRequest(); 
        http.open("GET", url);
        http.send();
        http.onreadystatechange=(e)=>{
            this.setState({
                isLoaded : true, 
                data : http.responseText
            });
        }
    }

    render(){
        if(this.state.isLoaded){
            return (
                <>
                <h1>Personal Blog</h1>
                <Post title="Machine learning tutorial 1"></Post>
                <Post title="Compressing images with C++"></Post>
                </>
            );    
        }
        else{
            return (
                <>
                <h1>Personal Blog</h1>
                <h2>Loading...</h2>
                </>
            );
        }
        
    }
}

export default Root;
