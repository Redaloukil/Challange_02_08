import React from 'react';
import {posts} from './../api';
import Post from './../Components/Post';

class Infinitescroll extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            next : "",
            posts : [],
            errors : "",
        }
        this.handleScroll = this.handleScroll.bind(this)
    }
    
    handleScroll = e => {
        console.log("hello world")
        let element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            console.log("scroll hello")
        }
    }

    componentWillMount(){
        posts.getByPage(1).then(res => {
            console.log(res.results);
            this.setState({posts : res.results , next : res.next});
        }).catch(errors =>{
            this.setState({errors});
        })
    }
    
    render(){
        return (
            <div id="Infinite-content" onScroll={this.handleScroll}>
                    <h1>Infinitescroll Component</h1>
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