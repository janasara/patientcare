import { Link } from 'react-router';

import React, { PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as diagnosticcenterActions from '../../actions/diagnosticcenterActions';
import DiagnosticList from './diagnosticlists';
import HomeremedyList from'./Homeremedylists';

import Laborderlists from './Laborderlists';


class Dashboard extends React.Component {

     constructor(props, context) {
    super(props, context);
    // this.AddNewLabtest = this.AddNewLabtest.bind(this);
  }

//  AddNewLabtest() {
//     this.context.router.push('/labtestsf');
//   }



  render(){
      const { diagnosticcenters } = this.props;
      const { homeremedies } = this.props;
      const { labtests } =this.props;
       const { checkServiceAvailable } =this.props;
  return (
            <div className="content">
              <div className="container-fluid">
                <div className="row">

                   <div className="col-md-4">
                    <div className="card">
                      <div className="header">
                        <h4 className="title">Top 5 Diagnostic Centers</h4>
                        <p className="category">Book your test in top 5 listed Diagnostic center</p>
                      </div>
                      <div className="content">
                        {/*<p><img src="assets/img/consultation1.jpg" width={263} height={191} /></p>*/}
                      <div className="diagcenter-hgt"> <DiagnosticList diagnosticcenters={diagnosticcenters} /></div>
                        
                        <div className="footer">
                          <hr />
                          <div className="stats">
                            <i className="fa fa-clock-o" /> Notification text come here
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                   <div className="col-md-4">
                    <div className="card">
                      <div className="header">
                        <h4 className="title">Home Remedies</h4>
                        <p className="category">Useful Home Remedies</p>
                      </div>
                      <div className="content">
                        {/*<p><img src="assets/img/Homeremedies.jpg" width={263} height={191} /></p>*/}
                        <div className="diagcenter-hgt"> <HomeremedyList homeremedies={homeremedies} /></div>
                        <div className="footer">
                          <hr />
                          <div className="stats">
                            <i className="fa fa-clock-o" /> Notification text come here
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card">
                      <div className="header">
                        <h4 className="title">Patient Diagnostic Report</h4>
                        <p className="category">Diagnosis orders</p>
                      </div>
                      <div className="content">
                       {/*<p><img src="assets/img/consultation1.jpg" width={263} height={191} /></p>*/}
                        {checkServiceAvailable?(<div className="diagcenter-hgt"> <Laborderlists labtests={labtests}
                        /></div>):(<div>Service Not Available</div>)}

                         
                       
                        <div className="footer">
                          <hr />
                          <div className="stats">
                            <i className="fa fa-clock-o" /> Notification text come here
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                 
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="header">
                        <h4 className="title">Specialist Availability</h4>
                        <p className="category">Loren ipsumLoren ipsumLoren ipsumLoren ipsum</p>
                      </div>
                      <div className="content">
                        {/*<div id="chartPreferences" class="ct-chart ct-perfect-fourth"></div>*/}
                        <p><img src="assets/img/consultation.jpg" />
                        </p>
                        <a href="#" style={{textAlign: 'right'}}   onClick={this.AddNewLabtest}>Book for an appointment</a>
                        {/*<div class="nav navbar-nav navbar-right"><a>Book for appointment</a></div>*/}
                        <div className="footer">
                          <hr />
                          <div className="stats">
                            <i className="fa fa-clock-o" /> Notification text come here
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card">
                      <div className="header">
                        <h4 className="title">Diagnostic Centers</h4>
                        <p className="category">Loren ipsumLoren ipsumLoren ipsumLoren ipsum</p>
                      </div>
                      <div className="content">
                        <p><img src="assets/img/diagnostic.jpg" width={263} height={191} />
                        </p>
                       <a href="#" style={{textAlign: 'right'}}>Book a test</a>
                        <div className="footer">
                          <hr />
                          <div className="stats">
                            <i className="fa fa-clock-o" /> Notification text come here
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card">
                      <div className="header">
                        <h4 className="title">Blogs</h4>
                        <p className="category">Loren ipsumLoren ipsumLoren ipsumLoren ipsum</p>
                      </div>
                      <div className="content">
                        <p><img src="assets/img/blogimage.jpg" width={263} height={191} />
                        </p>
                        <a href="#" style={{textAlign: 'right'}}>View More</a>
                        <div className="footer">
                          <hr />
                          <div className="stats">
                            <i className="fa fa-clock-o" /> Notification text come here
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                 
                </div>
                <div className="row">
                   <div className="col-md-4">
                    <div className="card">
                      <div className="header">
                        <h4 className="title">Treatment Process</h4>
                        <p className="category">Loren ipsumLoren ipsumLoren ipsumLoren ipsum</p>
                      </div>
                      <div className="content">
                        {/*<div id="chartPreferences" class="ct-chart ct-perfect-fourth"></div>*/}
                        <p><img src="assets/img/treatmentprocess.jpg" width={263} height={191} /></p>
                        <a href="#" style={{textAlign: 'right'}}>View More</a>
                        <div className="footer">
                          <hr />
                          <div className="stats">
                            <i className="fa fa-clock-o" /> Notification text come here
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card ">
                      <div className="header">
                        <h4 className="title">Diet Recommendation</h4>
                        <p className="category">dummy textdummy textdummy textdummy textdummy text</p>
                      </div>
                      <div className="content">
                        <p><img src="assets/img/dietrecommendations.jpg" width={263} height={191} />
                        </p>
                        <a href="#" style={{textAlign: 'right'}}>View More</a>
                        <div className="footer">
                          <hr />
                          <div className="stats">
                            <i className="fa fa-clock-o" /> Notification text come here
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
}

//export default Dashboard;

// export default HomePage;
Dashboard.propTypes = {
  diagnosticcenters: PropTypes.array.isRequired,
  homeremedies: PropTypes.array.isRequired,
  labtests:PropTypes.array.isRequired,
   checkServiceAvailable:PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};
//Pull in the React Router context so router is available on this.context.router.
Dashboard.contextTypes = {
  router: PropTypes.object
};
// 
function mapStateToProps(state) {
  //debugger;
  return {
     diagnosticcenters: state.diagnosticcenters,
     homeremedies: state.homeremedies,
    labtests: state.labtests,
    checkServiceAvailable: state.labtests !=null && state.labtests.serviceStatus != null ? false:true
  };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(diagnosticcenterActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
