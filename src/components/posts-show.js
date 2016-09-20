'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from "react-router";

class PostsShow extends Component {

    constructor () {
        super();
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount () {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick () {
        this.props.deletePost(this.props.params.id)
            .then(() => this.context.router.push('/'));
    }

    render () {

        const { post } = this.props;

        if (!post) {
            return <div>Loading ...</div>
        }

        else {

            // const { post: { title, categories, content } } = this.props;
            const { title, categories, content } = post;

            return (
                <div>
                    <Link to="/">Return to List</Link>
                    <button onClick={this.onDeleteClick} className="btn btn-danger pull-xs-right">Delete</button>
                    <h3>{title}</h3>
                    <h6>Categories: {categories}</h6>
                    <p>{content}</p>
                </div>
            );
        }
    }
}

function mapStateToProps (state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);