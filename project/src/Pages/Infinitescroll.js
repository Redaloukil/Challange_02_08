import React from 'react';
import {posts} from './../api';
import PostScroll from '../Components/Post-scroll';

class Infinitescroll extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading :false ,
            next : "",
            posts : [],
            errors : "",
        }
        
        window.onscroll = () => {
            if( window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight){
                    posts.getByUrl(this.state.next)
                    .then(res => {
                        this.setState({next : res.next ? res.next : null , posts : this.state.posts.concat(res.results)})
                    })
                }
        }
    }
    
    

    componentWillMount(){
        this.setState({isLoading : true })
        posts.getByPage(1).then(res => {
            console.log(res.results);
            this.setState({posts : res.results , next : res.next , isLoading : false});
        }).catch(errors =>{
            this.setState({errors});
        })
        
    }
    
    render(){
        if (posts.length == 0){
            return (
                <div>No posts found yet..</div>
            )
        }
        if(this.state.isLoading) {
            return (
                <div>Loading..</div>
            )
        }
        return (
            <div id="Infinite-content" onScroll={this.handleScroll}>
                    <h1>Infinitescroll Component</h1>
                    <div className="pagination-content">
                        {this.state.posts.map((element , key ) =>{
                            return <PostScroll content={element} key={key}/>
                        })}
                    </div>
            </div>
        )
    }
}

export default Infinitescroll;