import React, { PropTypes } from 'react';
import { Link } from 'react-router';
//to={'/labtestsf/' + diagnosticcenter.id}
const DiagnosticList = ({ diagnosticcenters }) => {
    return (

        <div>
            {diagnosticcenters.map(diagnosticcenter =>

                <div className="belement" key={diagnosticcenter.id}>
                    <Link className="belementn" >{diagnosticcenter.code}  -  {diagnosticcenter.name}</Link>

                </div>

            )}
        </div>

    );
};

DiagnosticList.propTypes = {
    diagnosticcenters: PropTypes.array.isRequired
};

export default DiagnosticList;