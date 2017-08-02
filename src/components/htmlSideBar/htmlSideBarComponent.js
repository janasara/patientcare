import React from 'react';

 import { Link } from 'react-router';

class HtmlSideBarComponent extends React.Component {
  render() {
    
    return (
            <div className="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">
            <div className="sidebar-wrapper">
              <div className="logo">
                <Link to={'/dashboard'} className="simple-text"> 
                  Patient Care
               </Link>
              </div>
              <ul className="nav">
                <li className="active">
                  <Link to={'/dashboard'}> <i className="pe-7s-graph" />
                    <p>Dashboard</p>                  
                    </Link>
               
                </li>
                <li>
                  
                    <Link to={'/labtests'}>   <i className="pe-7s-bell" />
                    <p>Diagnostic Centers</p>                 
                    </Link>

               
                </li>

                <li>

                    <Link to={'/homeremedy'}> <i className="pe-7s-science" />
                    <p>Home Remedy</p>                  
                    </Link>

                
                </li>
                <li>
                  
                  <Link to={'/specialityavailability'}> <i className="pe-7s-map-marker" />
                    <p>Specialist Availability</p>                  
                    </Link>
                
                </li>
                <li>

                     <Link to={'/patientdiagnosticreport'}> <i className="pe-7s-note2" />
                    <p>Patient Diagnostic Report</p>                  
                    </Link>
                  
                </li>
                {/*<li>
                  <a href="notificationsTest.html">
                    <i className="pe-7s-bell" />
                    <p>Blogs</p>
                  </a>
                </li>*/}

                {/*<li>
                  <a href="notificationsTest.html">
                    <i className="pe-7s-bell" />
                    <p>Diet Recommendation</p>
                  </a>
                </li>*/}
                <li>
                   <Link to={'/userprofile'}> 
                    <i className="pe-7s-user" />
                    <p>User Profile</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
    );
//   }
}

}

export default HtmlSideBarComponent;




// var NewComponent = React.createClass({
//   render: function() {
//     return 
//   }
// });