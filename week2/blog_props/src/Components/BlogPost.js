import React from 'react'
 
function BlogPost(props) {
    return (
        <div className="props">
            <h1>{props.title}</h1>
            <h4>{props.subTitle}</h4>
            <p>Posted by <strong>{props.author}</strong></p><p>on {props.date}</p>
        </div>
    )
}


export default BlogPost 