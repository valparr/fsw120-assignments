import React from 'react'
import BlogPost from './BlogPost.js'


const data = [
    {

        title: "Man must explore, and this is exploration at its greatest",
        subTitle: "Problems look mighty small from 150 miles up",
        author: "Start Bootstrap",
        date: "September 24, 2019"

    },{

        title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
        subTitle: "",
        author: "Start Bootstrap",
        date: "September 18, 2019"

    },{

        title: "Science has not yet mastered prophecy",
        subTitle: "We predict too much for the next year and yet far too little for the next ten.",
        author: "Start Bootstrap",
        date: "August 24, 2019"

    },{

        title: "Failure is not an option",
        subTitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
        author: "Start Bootstrap",
        date: "July 8, 2019"
    }

]


function BlogList() {
    const blogComponents = data.map(blog => <BlogPost 
        key={blog.id}
        title={blog.title}
        subTitle={blog.subTitle}
        author={blog.author}
        date={blog.date}
        />)

        return (
            <div>{blogComponents}</div>
        )
}




export default BlogList