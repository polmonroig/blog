import React from 'react'; 


class Post extends React.Component{
    
    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <h2>{this.props.title}</h2>
        ) 
    }


}

export default Post; 
