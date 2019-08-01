import React from 'react';
import { BrowserRouter as Router,Route , Switch} from 'react-router-dom';
import Home from './Pages/Home'
import Pagination from './Pages/Pagination';
import InfinitScroll from './Pages/Infinitescroll';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/pagination" component={Pagination}/>
            <Route path="/scroll" component={InfinitScroll}/>
          </Switch>  
        </Router>
      </header>
    </div>
  );
}

export default App;
