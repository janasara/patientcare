import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LabtestList = ({ labtests }) => {
    return (

        <div>
            {labtests.map(labtest =>

                <div className="belement" key={labtest.id}>
                   <Link className="belementn" to={'/labtestsf/' + labtest.id}>{labtest.id} - {labtest.name}</Link>

                </div>

            )}
        </div>

    );
};

LabtestList.propTypes = {
    labtests: PropTypes.array.isRequired
};

export default LabtestList;