import React, { useContext, useState } from "react";
import axios from "axios";
import AppContext from "./AppContext";
import createBrowserHistory from "history/createBrowserHistory";

export default function Login() {
  const { dispatch } = useContext(AppContext);
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const history = createBrowserHistory({ forceRefresh: true });
  const onChangeHandle = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  const onSubmitHandle = async (e) => {
    try {
      e.preventDefault();
      const option = {
        method: "post",
        url: "/api/v1/auth/login",
        data: userInput,
      };
      const response = await axios(option);
      const { token, userName } = response.data.data;
      localStorage.setItem("token", token);
      dispatch({ type: "CURRENT_USER", payload: { userName } });
      history.push("/addpost");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  return (
    <div>
      <div className="container">
        <br />
        <h3 className="text-center">KQT79</h3>
        <hr />

        <div className="row">
          <aside className="col-sm-4"></aside>

          <aside className="col-sm-4">
            <div className="card">
              <article className="card-body">
                <a
                  href="/register"
                  className="float-right btn btn-outline-primary"
                >
                  Sign up
                </a>
                <h4 className="card-title mb-4 mt-1">Sign in</h4>
                <p>
                  <a href="" className="btn btn-block btn-outline-info">
                    <i className="fab fa-twitter"></i>   Login via Twitter
                  </a>
                  <a href="" className="btn btn-block btn-outline-primary">
                    <i className="fab fa-facebook-f"></i>   Login via facebook
                  </a>
                </p>
                <hr />
                <form onSubmit={onSubmitHandle}>
                  <div className="form-group">
                    <input
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      type="email"
                      value={userInput.email}
                      onChange={onChangeHandle}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="******"
                      type="password"
                      name="password"
                      value={userInput.password}
                      onChange={onChangeHandle}
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Login
                        </button>
                        {errorMessage && (
                          <div className="error-message">
                            Error: {errorMessage}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 text-right">
                      <a className="small" href="#">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                </form>
              </article>
            </div>
          </aside>
        </div>
      </div>

      <br />
      <br />
      <br />
      <article className="bg-secondary mb-3">
        <div className="card-body text-center">
          <h4 className="text-white">Techconomy KQT79</h4>
        </div>
        <br />
        <br />
        <br />
      </article>
    </div>
  );
}
