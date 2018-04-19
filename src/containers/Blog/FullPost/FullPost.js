import React, { Component } from 'react';
import axios from 'axios';


import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount () {//when component is mounted we are loading data as 
        // fullpost component is nested routed component of posts.js
        //it loads full post below the posts component
        console.log(this.props);
        this.loadData();
    }

    componentDidUpdate() {//keep in mind when we are in the same component which we already mounted 
        //so it wont be again mounted and remounted therefore it only updates component
        // and thus again in componentDidUpdate we should load data
        this.loadData();
    }

    loadData () {
        if ( this.props.match.params.id ) {
            //adding + turns this into number which it is string here
            //or else have != only value check
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
                axios.get( '/posts/' + this.props.match.params.id )
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.match.params.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;