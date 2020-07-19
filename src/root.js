import React from 'react';
import Post from './post';

// http request for articles


class Root extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: null
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
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }

    render(){
        if(this.state.isLoaded){
            const data = this.state.data;
            console.log(data); 
            return (
                <>
                <h1>Personal Blog</h1>
                {data.map(item => (
                    <Post title={item.title} content={item.description}
                          comments={item.comments_count}
                          reactions={item.public_reactions_count}></Post>

                ))}
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
