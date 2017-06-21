import React from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Popular from './Popular';
import Nav from './Nav';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav />
                    <Route path="/popular" component={Popular} />
                </div>
            </Router>
        )
    }
}

export default App;
