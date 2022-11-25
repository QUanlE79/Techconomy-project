import React, { useCallback, useContext, useEffect } from "react";
import axios from "axios";
import AppContext from "./AppContext";

export default function Homepage() {
  const { state, dispatch } = useContext(AppContext);
  const { posts, user } = state;
  const getAllPosts = useCallback(async () => {
    try {
      const option = {
        method: "get",
        url: "/api/v1/posts",
      };
      const response = await axios(option);
      const posts = response.data.data.posts;
      console.log(posts);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <a className="navbar-brand" href="/">
          <i className="fa fa-home fa-lg" aria-hidden="true"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/support">
                Support
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href=""
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Field
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="">
                  IT
                </a>
                <a className="dropdown-item" href="">
                  Bussiness
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="">
                  Partime
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">ComingSoon</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              <i className="fa fa-search" aria-hidden="true"></i>
              Search
            </button>
          </form>
        </div>
        <p>&nbsp;&nbsp;</p>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-outline-primary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            User
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/profile">
              My profile
            </a>
            <a className="dropdown-item" href="/profile">
              My jobs
            </a>
            <a className="dropdown-item" href="/profile">
              My wishlists
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/login">
              Log out
            </a>
          </div>
        </div>
      </nav>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-sm-3">
            <div className="card mb-3">
              <h4 className="card-header">Top tìm kiếm</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Lập trình viên</li>
                <li className="list-group-item">Bussiness analysis</li>
                <li className="list-group-item">Chạy bàn bán thời gian</li>
              </ul>
            </div>
            <div className="card">
              <h4 className="card-header">Gần đây</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Công ty ET</li>
                <li className="list-group-item">Công ty KQT</li>
                <li className="list-group-item">Intern Developer</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="card">
              <h4 className="card-header">Current Recruitments</h4>
              <div className="card text-center">
                <div className="card-header">HOT</div>
                <div className="card-body">
                  <h5 className="card-title">ET company</h5>
                  <p className="card-text">
                    Tuyển lập trình viên back end lương $100000 apply ngay
                  </p>
                  <a href="#" className="btn btn-primary">
                    Apply
                  </a>
                </div>
                <div className="card-footer text-muted">2 days ago</div>
              </div>
              <div className="card text-center">
                <div className="card-header"></div>
                <div className="card-body">
                  <h5 className="card-title">ET company</h5>
                  <p className="card-text">
                    Tuyển lập trình viên font end lương $3000 apply ngay
                  </p>
                  <a href="#" className="btn btn-primary">
                    Apply
                  </a>
                </div>
                <div className="card-footer text-muted">2 days ago</div>
              </div>

              <nav aria-label="...">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">2</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="card-footer text-muted">2 days ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
