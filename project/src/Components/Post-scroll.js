import React from 'react';

const PostScroll = (props) => {
    return (
        <div     className="post">
            <h1 className="title">{props.content.name}</h1>
            <p>{props.content.height}</p>
            <p>{props.content.mass}</p>
            <p>{props.content.skin_color}</p>        
        </div>
    )
}

export default PostScroll;