import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Components/Header';
import BlogList  from './Components/BlogList';
import Footer from './Components/Footer';


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                        <h1>Clean Blog</h1>
                        <h3>A Blog Theme by Start Bootstrap</h3>
                    </div>
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <BlogList />
                        </div>
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <Footer />
                        </div>
                    </div>
                    </div>
                </div> 
            </div>
        );
    }
}


ReactDOM.render(<App />,document.getElementById('root'));

