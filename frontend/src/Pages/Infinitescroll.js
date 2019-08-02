import React from 'react';
import {posts} from './../api';
import Post from './../Components/Post';

class Infinitescroll extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts : [],
            errors : ""
        }
    }
    
    handleScroll = e => {
        let element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
          // do something at end of scroll
        }
    }

    componentWillMount(){
        posts.getByPage(1).then(res => {
            this.setState({posts});
        }).catch(errors =>{
            this.setState({errors});
        })
    }
    
    render(){
        return (
            <div onScroll={this.handleScroll} id="Infinite-content">
                Infinitescroll Component
                    <div className="pagination-content">
                        {this.state.posts.map((element , key ) =>{
                            return <Post content={element} key={key}/>
                        })}
                    </div>
            </div>
        )
    }
}

export default Infinitescroll;