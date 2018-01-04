import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fecthPost } from "../actions";

class PostIndex extends Component {
  componentDidMount() {
    this.props.fecthPost();
  }

  renderPosts() {
    return _.map(this.props.posts, posts => {
      return (
        <li className="list-group-item" key={posts.id}>
          <Link to={`/post/${posts.id}`}>{posts.title}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/post/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul>{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fecthPost })(PostIndex);
