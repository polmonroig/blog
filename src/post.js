import React from 'react'; 


class Post extends React.Component{
    

    render(){
        return (
            <div dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
        );  
    }


}

export default Post; 
