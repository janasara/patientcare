import React, { PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as diagnosticcenterActions from '../../actions/diagnosticcenterActions';
import DiagnosticList from './diagnosticlists';


class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
       const { diagnosticcenters } = this.props;
    return (
      <div >
   
        <p>Patient Care Dashboard</p>

         <div className="bcontainer" >
      

        <DiagnosticList diagnosticcenters={diagnosticcenters} />
      </div>

      </div>
    );
  }
}



// export default HomePage;
HomePage.propTypes = {
  diagnosticcenters: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
//Pull in the React Router context so router is available on this.context.router.
HomePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  return {
    diagnosticcenters: state.diagnosticcenters
  };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(diagnosticcenterActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
