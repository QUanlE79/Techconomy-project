import React from "react";

export default function PostItem({ post }) {
  return (
    <div>
      <div className="card text-center">
        <div className="card-header">
          <a href="#" className="btn btn-primary">
            Update
          </a>

          <a href="#" className="btn btn-danger">
            Delete
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">ET company</h5>
          <p className="card-text">{post.content}</p>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    </div>
  );
}
