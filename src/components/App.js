// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import HtmlFooterComponent from './htmlFooter/htmlFooterComponent';
import HtmlSideBarComponent from './htmlSideBar/htmlSideBarComponent';
import HtmlHeaderComponent from './htmlHeader/htmlHeaderComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" href="assets/img/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>Light Bootstrap Dashboard by Creative Tim</title>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
        <meta name="viewport" content="width=device-width" />
        {/* Bootstrap core CSS     */}
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
        {/* Animation library for notifications   */}
        <link href="assets/css/animate.min.css" rel="stylesheet" />
        {/*  Light Bootstrap Table core CSS    */}
        <link href="assets/css/light-bootstrap-dashboard.css" rel="stylesheet" />
        {/*  CSS for Demo Purpose, don't include it in your project     */}
        <link href="assets/css/demo.css" rel="stylesheet" />
        {/*     Fonts and icons     */}
        <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
        <link href="http://fonts.googleapis.com/css?family=Roboto:400,700,300" rel="stylesheet" type="text/css" />
        <link href="assets/css/pe-icon-7-stroke.css" rel="stylesheet" />
        <div className="wrapper">
          <HtmlSideBarComponent/>
          <div className="main-panel">
            <HtmlHeaderComponent/>
                {this.props.children}
           <HtmlFooterComponent/>
          </div>
        </div>
       
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired  
};
export default App;
