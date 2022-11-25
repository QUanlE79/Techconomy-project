import React, { useCallback, useContext, useEffect } from "react";
import axios from "axios";
import AppContext from "./AppContext";
import PostItem from "./PostItem";
export default function PostList() {
  const { state, dispatch } = useContext(AppContext);
  const { _posts, user } = state;
  const getAllPosts = useCallback(async () => {
    try {
      const option = {
        method: "get",
        url: "/api/v1/posts",
      };
      const response = await axios(option);
      const posts = response.data.data.posts;
      dispatch({ type: "GET_ALL_POSTS", payload: posts });
      console.log(posts);
      _posts = posts;
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <section className="post-section">
      <div className="post-list">
        {_posts.map((post) => (
          <PostItem post={post} key={post._id} />
        ))}
      </div>
    </section>
  );
}
