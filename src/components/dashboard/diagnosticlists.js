import React, { PropTypes } from 'react';
import { Link } from 'react-router';
//labtestsfto={'/labtestsf/' + diagnosticcenter.id}to={'/diagnostics/' + diagnosticcenter.code}

const DiagnosticList = ({ diagnosticcenters }) => {
    
 return (

        <div>
            {diagnosticcenters.map(diagnosticcenter =>

 
 
                <div className="belement " key={diagnosticcenter.code}>
               <div className=" belementn dashboard-fontclr"><b>{diagnosticcenter.name}</b></div>

               <div className="floatright">
                            <Link  className="belementn" to={"labtestdf/"+diagnosticcenter.code}>Booktest</Link>
                   </div>
                

                </div>

            )}
        </div>

    );
};

DiagnosticList.propTypes = {
    diagnosticcenters: PropTypes.array.isRequired
};

export default DiagnosticList;