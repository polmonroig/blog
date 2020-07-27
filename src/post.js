import React from 'react';
import './styles/post.css';

class Post extends React.Component{


    render(){
        //<a href={this.props.url}>
        //  <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Post at dev.to" height="40" width="40"></img>
        //</a>
        const tags = this.props.tags;
        return (
            <>
            <div id="post_meta" >
            <button id="back_button" class="meta_button" onClick={this.props.mainMenu}>
            BACK
            </button>
            <a href={this.props.url}>
            <button id="dev_button" class="meta_button" >
            DEV
            </button>
            </a>
            </div>
            <div id="post">
                <div id="post_title">{this.props.title}</div>
                <div id="tags_list">
                {tags.map(tagName => (
                    <span class="tag noselect">
                          {tagName}
                    </span>
                ))}
                </div>
                <div id="post_text" dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
            </div>
            </>
        );
    }


}

export default Post;
