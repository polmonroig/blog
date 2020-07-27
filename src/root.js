import React from 'react';
import './styles/root.css';
import PostHeader from './post_header';
import Post from './post';
import ReactLoading from 'react-loading';
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
        this.title = "The Silicon Corner";
    }

    componentDidMount() {
        this.fetchAllPosts();
    }

    fetchAllPosts = () => {
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
        this.setState({
            isLoaded: false
        });
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

    resetPage = (id) => {
        this.setState({
            openPost: false,
            isLoaded: false
        })
        this.fetchAllPosts();
    }

    render(){
        if(this.state.openPost){
            return (
                <>
                <div onClick={this.resetPage} id="title">{this.title}</div>
                <Post content={this.state.data.body_html} title={this.state.data.title}
                              tags={this.state.data.tags}
                              url={this.state.data.url}
                              mainMenu={this.resetPage}></Post>
                </>
            );
        }
        else if(this.state.isLoaded){
            const data = this.state.data;
            console.log(data);
            return (
                <>
                <div id="title">{this.title}</div>
                <div id="post_list">
                {data.map(item => (
                    <PostHeader onClick={() => this.openPost(item.id)}
                          key={item.title} title={item.title} content={item.description}
                          comments={item.comments_count}
                          reactions={item.public_reactions_count}
                          date={item.readable_publish_date}
                    ></PostHeader>
                ))}
                </div>
                </>
            );
        }
        else{
            return (
                <>
                <div id="title">{this.title}</div>
                <ReactLoading id="loading" type="bars" color="black" height={'5%'} width={'5%'} />
                </>
            );
        }

    }
}

export default Root;
