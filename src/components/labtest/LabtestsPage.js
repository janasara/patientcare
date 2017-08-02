import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as labtestActions from '../../actions/labtestActions';
import LabtestList from './LabtestList';


class LabtestsPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.AddNewLabtest = this.AddNewLabtest.bind(this);

  }


  AddNewLabtest() {
    this.context.router.push('/labtestsf');
  }


  render() {
    const { labtests } = this.props;
    return (

      <div className="bcontainer" >
        <div className="form-header" >
          <label className="lane-name paraheader-labtest"> BOOK A TEST</label>
        </div>

        <input type="button" value="New Order" className="btn btn-primary btn-xs  bbtn" onClick={this.AddNewLabtest} />

        <LabtestList labtests={labtests} />
      </div>
    );
  }

}

LabtestsPage.propTypes = {
  labtests: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
//Pull in the React Router context so router is available on this.context.router.
LabtestsPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  return {
    labtests: state.labtests
  };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(labtestActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LabtestsPage);