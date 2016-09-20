'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Posts from './components/posts-index';
import PostsNew from './components/posts-new';
import PostsShow from './components/posts-show';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Posts} />
        <Route path="posts/new" component={PostsNew} />
        <Route path="posts/:id" component={PostsShow} />
    </Route>
);
