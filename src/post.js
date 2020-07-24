import React from 'react';
import './styles/post.css';

class Post extends React.Component{


    render(){
        // <div id="post_meta" ></div> 
        return (
            <>

            <div id="post">
                <div id="post_title">{this.props.title}</div>
                <div id="post_text" dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
            </div>
            </>
        );
    }


}

export default Post;
