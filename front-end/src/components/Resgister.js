import React, { useContext, useState } from "react";
import AppContext from "./AppContext";
import createBrowserHistory from "history/createBrowserHistory";
import axios from "axios";
export default function Resgister() {
  const { dispatch } = useContext(AppContext);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    password1: "",
  });
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
        url: "/api/v1/auth/register",
        data: userInput,
      };
      const response = await axios(option);
      const { token, userName } = response.data.data;
      localStorage.setItem("token", token);
      dispatch({ type: "CURRENT_USER", payload: { userName } });
      history.push("/");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  return (
    <div>
      <div class="container">
        <br />
        <h3 class="text-center">KQT79</h3>
        <hr />

        <div class="row">
          <aside class="col-sm-4"></aside>

          <aside class="col-sm-4">
            <div class="card">
              <article class="card-body">
                <a href="/login" class="float-right btn btn-outline-primary">
                  Login
                </a>
                <h4 class="card-title mb-4 mt-1">Sign up</h4>

                <hr />
                <form method="post" onSubmit={onSubmitHandle}>
                  <p>Name</p>
                  <div class="form-group">
                    <input
                      name="name"
                      class="form-control"
                      placeholder="Email"
                      type="text"
                      value={userInput.name}
                      onChange={onChangeHandle}
                    />
                  </div>

                  <p>Email</p>
                  <div class="form-group">
                    <input
                      name="email"
                      class="form-control"
                      placeholder="Email"
                      type="email"
                      value={userInput.email}
                      onChange={onChangeHandle}
                    />
                  </div>

                  <p>Password</p>
                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="******"
                      type="password"
                      name="password"
                      value={userInput.password}
                      onChange={onChangeHandle}
                    />
                  </div>
                  <p>Confirm password</p>
                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="******"
                      type="password"
                      name="password1"
                      value={userInput.password1}
                      onChange={onChangeHandle}
                    />
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">
                          Sign up
                        </button>
                      </div>
                    </div>
                    {errorMessage &&
                      (Array.isArray(errorMessage) ? (
                        errorMessage.map((err) => (
                          <div className="error-message">Error: {err}</div>
                        ))
                      ) : (
                        <div className="error-message">
                          Error : {errorMessage}
                        </div>
                      ))}
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
      <article class="bg-secondary mb-3">
        <div class="card-body text-center">
          <h4 class="text-white">Techconomy KQT79</h4>
        </div>
        <br />
        <br />
        <br />
      </article>
    </div>
  );
}
