import React from 'react'; 


class PostHeader extends React.Component{
    

    render(){
        return (
            <>
            <h2>{this.props.title}</h2>
            <p>{this.props.content}</p>
            <b>Date </b>{this.props.date}<br/>
            <b>Comments </b> {this.props.comments}
            <b> Reactions </b> {this.props.reactions}
            </>
        ) 
    }


}

export default PostHeader; 
