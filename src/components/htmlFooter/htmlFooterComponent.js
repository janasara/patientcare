import React from 'react';
 import { Link } from 'react-router';

// class HtmlComponent extends React.Component {
    class  HtmlFooterComponent extends React.Component {
  render() {
    return (
       <footer className="footer">
              <div className="container-fluid">
                <nav className="pull-left">
                  <ul>
                    <li>
                      {/*<Link to={'/'}>Home</Link>*/}
                     
                    </li>
                    {/*<li>
                      <a href="#">
                        Company
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Blog
                      </a>
                    </li>*/}
                  </ul>
                </nav>
                <p className="copyright pull-right">
                  © 2017    <Link to={'/'}> Patient Care</Link>, made with love for a better web
                </p>
              </div>
            </footer>
    );
  }
}

export default HtmlFooterComponent;



