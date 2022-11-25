import AddPost from "./components/AddPost";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Resgister from "./components/Resgister";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppReducer from "./reducers/AppReducer";
import { useReducer, useEffect, useCallback } from "react";
import AppContext from "./components/AppContext";
import axios from "axios";
import PostList from "./components/PostList";
function App() {
  const initState = { user: null, posts: [] };
  const [state, dispatch] = useReducer(AppReducer, initState);

  const checkCurrentUser = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const option = {
        method: "get",
        url: "/api/v1/auth/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios(option);
      if (response.data.data.user) {
        const { userName } = response.data.data.user;
        dispatch({ type: "CURRENT_USER", payload: { userName } });
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  useEffect(() => {
    checkCurrentUser();
  }, [checkCurrentUser]);
  return (
    <Router>
      <AppContext.Provider value={{ state, dispatch }}>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <PostList />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Resgister />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/addpost">
              <AddPost />
            </Route>
            <Route exact path="*">
              <div>Page not found</div>
            </Route>
          </Switch>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
