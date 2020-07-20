import React from 'react'; 
import './styles/post_header.css'

class PostHeader extends React.Component{
    

    render(){
        return (
            <>
            <div className="post_header" onClick={this.props.onClick}>
            <h2>{this.props.title}</h2>
            <p>{this.props.content}</p>
            <b>Date </b>{this.props.date}<br/>
            <b>Comments </b> {this.props.comments}
            <b> Reactions </b> {this.props.reactions}
            </div>
            </>
        ) 
    }


}

export default PostHeader; 
