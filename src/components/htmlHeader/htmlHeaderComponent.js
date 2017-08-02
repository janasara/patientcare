import React from 'react';
const HtmlHeaderComponent = () => {

    return (
      <nav className="navbar navbar-default navbar-fixed">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a className="navbar-brand" href="#">Dashboard</a>
                </div>
                <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav navbar-left">
                    {/*<li>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-dashboard"></i>
                            </a>
                        </li>*/}
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-globe" />
                        <b className="caret" />
                        <span className="notification"></span>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a href="#">Notification 1</a></li>
                        <li><a href="#">Notification 2</a></li>
                        <li><a href="#">Notification 3</a></li>
                        <li><a href="#">Notification 4</a></li>
                        <li><a href="#">Another notification</a></li>
                      </ul>
                    </li>
                    {/*<li>
                           <a href="">
                                <i class="fa fa-search"></i>
                            </a>
                        </li>*/}
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                    {/*<li>
                           <a href="">
                               Account
                            </a>
                        </li>
                        <li class="dropdown">
                              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    Dropdown
                                    <b class="caret"></b>
                              </a>
                              <ul class="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                              </ul>
                        </li>*/}
                    <li className="nav navbar-nav navbar-left">
                      <a href="#"> Welcome User</a>
                    </li>
                    <li>
                      <a href="#">
                        Log out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
    );};

export default HtmlHeaderComponent;

