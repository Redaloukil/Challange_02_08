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
        fetch('../../data.json').then((data)=> {
            console.log(data);
        }).catch((errors)=>{
            this.state(errors);
        })
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