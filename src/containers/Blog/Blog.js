import React, { Component } from 'react';
//Route is used for routing to component on basis of url
//NavLink is similar to Link in the sense it not reloads the component when loading only 
// changes component but state doesnt go NavLink has also some addition property like
//activeClass ,activeStyle unlike Link they are different from 
//a href as it again loads the page
//switch is used whn only loading one Router is used else all the router whose path matches will load
import { Route, NavLink,Link ,Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
//the below xomponent wraps any component and loads it (download the component source code)
//when user routes to its url
import lazyroutinghighordercomponent from '../../highordercomponent/lazyroutingcomponent';

//its implementation in high order component importing the component when router routes to this cmponent
//see below newpostInsideLazyRouting is in component of routing
let newpostInsideLazyRouting=lazyroutinghighordercomponent(()=>{
    return import('./NewPost/NewPost');
})

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                // the activeClass and activeStyle is only used in NavLink
                                // not in link
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                {/* due to swich only one router will work */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={newpostInsideLazyRouting} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not found</h1>}/>
                    {/* in redirect from will onlybe used if switch is there */}
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;