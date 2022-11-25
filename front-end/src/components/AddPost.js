import React, { useCallback, useContext, useEffect } from "react";
import axios from "axios";
import AppContext from "./AppContext";
import PostItem from "./PostItem";
import PostList from "./PostList";

export default function AddPost() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <a className="navbar-brand" href="#">
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
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Field
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  IT
                </a>
                <a className="dropdown-item" href="#">
                  Bussiness
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
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
            Org
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Add post
            </a>
            <a className="dropdown-item" href="#">
              Update
            </a>
            <a className="dropdown-item" href="#">
              Delete
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/login">
              Log out
            </a>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group">
              <a
                href="#"
                className="list-group-item list-group-item-action active"
              >
                Dashboard
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                User Management
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Used
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Enquiry
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Dealer
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Media
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Post
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Category
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                New
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Comments
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Appearance
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Reports
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Settings
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3 border-right">
                    <h4>Add New Post</h4>
                  </div>
                  <div className="col-md-7">
                    <button type="button" className="btn btn-sm btn-primary">
                      Add New
                    </button>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-8">
                    <form>
                      <div className="form-group row">
                        <label for="text" className="col-12 col-form-label">
                          Enter Title here
                        </label>
                        <div className="col-12">
                          <input
                            id="text"
                            name="text"
                            placeholder="Enter Title here"
                            className="form-control here"
                            required="required"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label for="textarea" className="col-12 col-form-label">
                          Visual Editor
                        </label>
                        <div className="col-12">
                          <textarea
                            id="textarea"
                            name="textarea"
                            cols="40"
                            rows="5"
                            className="form-control"
                          ></textarea>
                        </div>
                      </div>
                    </form>
                    <PostList />
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-3">
                      <div className="card-header bg-light">Publish</div>
                      <div className="card-body"></div>
                      <div className="card-footer bg-light">
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                        >
                          Preview
                        </button>
                        <button type="button" className="btn btn-info btn-sm">
                          Save Draft
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          Publish
                        </button>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-header bg-light">Tags</div>
                      <div className="card-body">
                        <form>
                          <div className="form-group row">
                            <div className="col-9">
                              <input
                                id="tags"
                                name="tags"
                                placeholder="seperate with commas"
                                required="required"
                                className="form-control here"
                                type="text"
                              />
                            </div>
                            <div className="col-2">
                              <button
                                name="submit"
                                type="submit"
                                className="btn btn-light"
                              >
                                Add
                              </button>
                            </div>
                            <div className="col-12">
                              <small>Seperate Tags with commas</small>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer bg-light">
                        <a href="#">Choose from the most used tags</a>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-header bg-light">Categories</div>
                      <div className="card-body">
                        <form>
                          <div className="form-group row">
                            <div className="col-9">
                              <input
                                id="tags"
                                name="tags"
                                placeholder=" "
                                required="required"
                                className="form-control here"
                                type="text"
                              />
                            </div>
                            <div className="col-2">
                              <button
                                name="submit"
                                type="submit"
                                className="btn btn-light"
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        </form>
                        <form>
                          <div className="form-group row">
                            <label
                              for="select"
                              className="col-12 col-form-label"
                            >
                              Select Category
                            </label>
                            <div className="col-8">
                              <select
                                id="select"
                                name="select"
                                className="custom-select"
                                required="required"
                              >
                                <option value="rabbit">Rabbit</option>
                                <option value="duck">Duck</option>
                                <option value="fish">Fish</option>
                              </select>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer bg-light">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          Add New Category
                        </button>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-header bg-light">Featured Image</div>
                      <div className="card-body"></div>
                      <div className="card-footer bg-light">
                        <a href="#">Set Featured Image</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
