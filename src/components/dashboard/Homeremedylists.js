import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const HomeremedyList = ({ homeremedies }) => {
    
 return (

        <div>
            {homeremedies.map(homeremedy =>

 
 
                <div className="belement div100per" key={homeremedy.id}>
               <div className="div50per dashboard-fontclr"><b>{homeremedy.title}</b></div>


                  

                </div>

            )}
        </div>

    );
};

HomeremedyList.propTypes = {
    homeremedies: PropTypes.array.isRequired
};

export default HomeremedyList;