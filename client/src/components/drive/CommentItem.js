import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/drive';

const CommentItem = ({
  auth,
  driveId,
  deleteComment,
  comment: { _id, text, name, avatar, user, date }
}) => {
  return (
    <Fragment>
      <div class="post bg-white p-1 my-1">
        <div>
          <Link to={`profile/${user}`}>
            <img class="round-img" src={avatar} alt="" />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p class="my-1">{text}</p>
          <p class="post-date">
            Posted on <Moment format="MM/DD/YYYY">{date}</Moment>
          </p>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={e => deleteComment(driveId, _id)}
              type="button"
              className="btn btn-danger"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

// Defines props for component
CommentItem.propTypes = {
  driveId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

// Sets auth prop to the current auth state
const mapStateToProps = state => ({
  auth: state.auth
});

// Connects component to redux
export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
