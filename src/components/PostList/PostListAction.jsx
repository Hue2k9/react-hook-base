import React from "react";
import PropTypes from "prop-types";

PostListAction.propTypes = {
  posts: PropTypes.array || [],
};

function PostListAction(props) {
  const { posts } = props;

  return (
    <ul className="post-list">
      {posts.map((post, index) => {
        return <li key={post.id}>{index+1}. {post.title}hiii</li>;
      })}
    </ul>
  );
}

export default PostListAction;

