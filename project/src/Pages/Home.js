import React from 'react';
import { Link } from 'react-router-dom';
class Home extends React.Component {
    render(){
        return(
            <div>
                <h1 className="select"><Link to="/pagination">Pagination</Link></h1>
                <h1 className="select"><Link to="/scroll"> Scroll</Link></h1>
                
            </div>
        )
    }
}

export default Home;