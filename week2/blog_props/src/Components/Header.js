import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <nav className="header-container">
                <div className="Nav-container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">SAMPLE POST</a></li>
                            <li><a href="#">CONTACT</a></li>
                        </ul>
                    </div>
                    <div className="myHeader">
                        <h1>Clean Blog</h1>
                        <h4>A Blog Theme by Start Boostrap</h4>
                    </div>
                </div>
                
            </nav>
        )
    }
}
