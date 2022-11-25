export default function reducer(state, action) {
  switch (action.type) {
    case "CURRENT_USER":
      return { ...state, user: action.payload };
    case "GET_ALL_POST":
      return { ...state, post: action.payload };
    case "CREATE_ONE_POST":
      return { ...state, posts: [...state.posts, action.payload] };
    case "UPDATE_ONE_POST":
      return {
        ...state,
        posts: state.post.map((post) =>
          post._id === action.payload._id
            ? { ...post, ...action.payload }
            : post
        ),
      };
    case "DELETE_ONE_POST":
      return {
        ...state,
        posts: state.post.filter((post) => post._id !== action.payload._id),
      };
    default:
      return state;
  }
}
