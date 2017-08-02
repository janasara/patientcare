import React from 'react';

 
class HomeRemedy extends React.Component {

    

  render(){
  return (
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  
                  
                  <div className="col-md-4">
                    <div className="card">
                      <div className="header">
                        <h4 className="title">Home Remedy</h4>
                        <p className="category">Loren ipsumLoren ipsumLoren ipsumLoren ipsum</p>
                      </div>
                      <div className="content">
                        <p><img src="assets/img/Homeremedies.jpg" width={263} height={191} /></p>
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

export default HomeRemedy;
