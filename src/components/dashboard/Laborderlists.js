import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const Laborderlists = ({ labtests }) => {
    
 return (

        <div>
            {labtests.map(labtest =>

 
 
                <div className="belement " key={labtest.id}>
               <div className=" belementn dashboard-fontclr"><b>{labtest.dcenter}     {labtest.name}</b></div>

               <div className="floatright">
                            <Link  className="belementn" to={"/labtestsf/"+labtest.id}>{labtest.id}</Link>
                   </div>
                

                </div>

            )}
        </div>

    );
};





Laborderlists.propTypes = {
    labtests: PropTypes.array.isRequired
    
};

export default Laborderlists;