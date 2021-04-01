import React from 'react'
 
function BlogPost(props) {
    return (
        <div style={{textAlign:"center"}}>
            <h2>{props.title}</h2>
            <h3>{props.subTitle}</h3>
            <p>{props.author}</p>
            <p>{props.date}</p>
        </div>
    )
}


export default BlogPost 