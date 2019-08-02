import React from 'react';

const Post = (props) => {
    return (
        
        <tr className="">
            <td>{props.content.name}</td>
            <td>{props.content.height}</td>
            <td>{props.content.mass}</td>
            <td>{props.content.skin_color}</td>        
            </tr>
    )
}

export default Post;