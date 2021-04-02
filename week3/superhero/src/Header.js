import React from 'react';

function Header() {
    return (
        <div className="nav">
            <ul className="navbar">
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
            <div className="myheader">
                <h1>MARVEL'S NEW SUPERHEROES LIST</h1>
                <p>Click to reveal your character's famous catch phrase!</p>
            </div>
        </div>
    );
}

export default Header;