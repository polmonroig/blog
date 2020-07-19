import React from 'react'; 


class Post extends React.Component{
    

    render(){
        return (
            <>
            <h2>{this.props.title}</h2>
            <p>{this.props.content}</p>
            <b>Comments </b> {this.props.comments}
            <b> Reactions </b> {this.props.reactions}
            </>
        ) 
    }


}

export default Post; 
