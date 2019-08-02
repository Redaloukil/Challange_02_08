import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <h4 className="title">name : {props.content.name}</h4>
            <h4>height : {props.content.height}</h4>
            <h4>weight : {props.content.mass}</h4>
        </div>
    )
}

export default Post;