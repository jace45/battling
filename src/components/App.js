import React from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Popular from './Popular';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/battle" component={Battle} />
                    <Route path="/battle/results" component={Results} />
                    <Route path="/popular" component={Popular} />
                </div>
            </Router>
        )
    }
}

export default App;
