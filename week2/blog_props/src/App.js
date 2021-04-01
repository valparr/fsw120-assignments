import React from 'react'
import './index.css'

import Header from './Components/Header.js'
import BlogList  from './Components/BlogList.js'
import BlogPost from './Components/BlogPost.js'
import Footer from './Components/Footer.js'



function App() {
  return (
    <div className="mycontainer">
      <br /><br />
        <Header />
          <BlogList />
            <BlogPost  
              title= "Man must explore, and this is exploration at its greatest"
              subTitle="Problems look mighty small from 150 miles up"
              author= "Start Bootstrap"
              date= "September 24, 2019"
            />
            <BlogPost  
              title= "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine."
              subTitle= ""
              author= "Start Bootstrap"
              date= "September 18, 2019"
            />
            <BlogPost 
              title= "Science has not yet mastered prophecy" 
              subTitle= "We predict too much for the next year and yet far too little for the next ten." 
              author= "Start Bootstrap"
              date= "August 24, 2019"
            />
            <BlogPost 
              title= "Failure is not an option"
              subTitle= "Many say exploration is part of our destiny, but it’s actually our duty to future generations."
              author= "Start Bootstrap"
              date= "July 8, 2019"
            />
          <Footer />
    </div> 
  );
}



export default App
