import React from 'react';

// if we need routing related props which we dont have for the
// component which is normally rendered ike this compnent rendered in posts.js
// not rendered by Router we can pass it from parent
// as normal props or use high order componet withRouer
// and wrap the component in it
import {withRouter} from 'react-router-dom';
import './Post.css';

const post = (props) => {
    console.log(props);
    return(<article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
        </article>)
};

export default withRouter(post);