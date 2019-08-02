import React from 'react';
import { posts } from './../api';
import Post from '../Components/Post-pagination';
import PaginationList from './../Components/PaginationList';


class Pagination extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading : true , 
            numberPerPage : 10,
            count : 0,
            currentPage:0,
            posts : [],
            errors : "",
        }
        this.setPage = (page) =>{
            
            posts.getByPage(page + 1)
                .then(res => {
                    this.setState({posts : res.results , currentPage : page});
                })
                .catch(err => {
                    this.setState({errors : err});
                })
        }
    }
    
    

    componentWillMount(){
        this.setPage({isLoading:true})
        posts.getAll()
        .then(res => {
            console.log(res)
            this.setState({posts : res.results , count : res.count , isLoading : false});
        })
        .catch(err => {
            this.setState({errors : err})
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

            <div className="pagination-content">
                <h1>Pagination Component</h1>
                <table>
                <tr>
                    <th>Name</th>
                    <th>height</th>
                    <th>Weight</th>
                    <th>Skincolor</th>
                </tr>
                {this.state.posts.map((element , key ) =>{
                    return <Post content={element} key={key}/>
                })}
                </table>
                <PaginationList count={this.state.count} currentPage={this.state.currentPage} setPage={this.setPage}/>
            </div>
        )
    }
}

export default Pagination;