import React from 'react';

const Post = (props) => {
    return (
        <div>
            <h1 className="title">{props.content.name}</h1>
        
        </div>
    )
}

export default Post;