import React from 'react';


class Infinitescroll extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articles : [],
            errors : ""
        }
    }
    
    componentWillMount(){
        
    }
    
    render(){
        return (
            <div>
                Infinitescroll Component


            </div>
        )
    }
}

export default Infinitescroll;