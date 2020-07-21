import React from 'react';
import './styles/post.css';

class Post extends React.Component{


    render(){
        return (
            <>
            <div id="post_meta" ></div>
            <div id="post" dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
            </>
        );
    }


}

export default Post;
