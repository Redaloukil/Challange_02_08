import React from 'react';
import axios from 'axios';


class Pagination extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articles : [],
            errors : ""
        }
    }
    
    componentWillMount(){
        Axios
    }
    
    render(){
        return (
            <div>
                Pagination Component


            </div>
        )
    }
}

export default Pagination;