import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import { getMyPosts } from '../../actions/post';

const Posts = ({ getMyPosts, post: { posts, loading } }) => {
  // Fetchs Posts when component renders
  useEffect(() => {
    getMyPosts();
  }, [getMyPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <p className="large lead text-primary p-1">My Posts</p>
      {posts.length > 0 ? (
        <Fragment>
          <div className="posts">
            {posts.map(post => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>
        </Fragment>
      ) : (
        <p className="lead text-center p-1">
          You have not posted yet, join the conversation!
        </p>
      )}

      <p className="large lead text-primary p-1">My Drives</p>
      <div className="posts">
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getMyPosts }
)(Posts);
