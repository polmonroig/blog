import React from 'react';
import './styles/root.css'; 
import PostHeader from './post_header';
import Post from './post';

// http request for articles


class Root extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: null,
            openPost: false,
        };
    }

    componentDidMount() {

        const url = 'https://dev.to/api/articles?username=polmonroig';
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                data: result
              });
           }
          )
    }

    openPost = (id) => {
        const url = 'https://dev.to/api/articles/' + id;
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                openPost: true,
                data: result
              });
           }
          )
    }

    render(){
        if(this.state.openPost){
            return (
                <>
                <div id="title">Personal Blog</div>
                <Post content={this.state.data.body_html}></Post>
                </>
            ); 
        } 
        else if(this.state.isLoaded){
            const data = this.state.data;
            console.log(data); 
            return (
                <>
                <div id="title">Personal Blog</div>
                {data.map(item => (
                    <PostHeader onClick={() => this.openPost(item.id)}
                          key={item.title} title={item.title} content={item.description}
                          comments={item.comments_count}
                          reactions={item.public_reactions_count}
                          date={item.readable_publish_date}
                    ></PostHeader>      
                ))}
                </>
            );
        }
        else{
            return (
                <>
                <div id="title">Personal Blog</div>
                <h2>Loading...</h2>
                </>
            );
        }

    }
}

export default Root;
