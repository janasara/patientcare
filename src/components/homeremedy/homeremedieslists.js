import React, { PropTypes } from 'react';
import { Link } from 'react-router';
//to={'/labtestsf/' + diagnosticcenter.id}
const HomeremediesList = ({ homeremedies }) => {//debugger;
    return (

        <div>
            {homeremedies.map(homeremedy =>

                <div className="belement" key={homeremedy.id}>
                    <Link className="belementn" >{homeremedy.title}</Link>    
                    <p className="belementn">  {homeremedy.description}</p>                
                </div>
                

            )}
        </div>

    );
};

HomeremediesList.propTypes = {
    homeremedies: PropTypes.array.isRequired
};

export default HomeremediesList;