import React, { PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeremediesActions from '../../actions/homeremediesActions';
import HomeremediesList from './homeremedieslists';


class Homeremedies extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
       const { homeremedies } = this.props;
    return (
      <div >
   
        <p>Home Remedies</p>

         <div className="bcontainer" >
      

        <HomeremediesList homeremedies={homeremedies} />
      </div>

      </div>
    );
  }
}



// export default HomePage;
Homeremedies.propTypes = {
  homeremedies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
//Pull in the React Router context so router is available on this.context.router.
Homeremedies.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  return {
    homeremedies: state.homeremedies
  };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(homeremediesActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Homeremedies);