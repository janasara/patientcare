import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


const Testoptions = [{ value: '5', label: 'Albumin' },
{ value: '6', label: 'Calcium' },
{ value: '7', label: 'Magnisium' }
];

const LabtestEnter = ({ labtest, onChange, errors, saving, deleteEnable, allLocation, onTestChange, onSave, onDelete }) => {

    return (
        <form>


            <div className="paraheader-labtest"><p> Step 1 - Diagnostic center and test</p></div>
            <div>
                <SelectInput
                    name="dcenter"
                    label="Diagnosis Center"
                    value={labtest.dcenter}
                    defaultOption="Select DIagnosis Center"
                    options={allLocation}
                   
                    onChange={onChange} error={errors.dcenter} />
            </div>
            <div className="telement ">
                <label className="telementl"> Select Diagnosis tests </label>
                <div >
                    <Select className="telementn" id="tests" name="tests"
                        options={Testoptions} value={labtest.tests} multi={true}
                        onChange={onTestChange}
                    >
                    </Select>
                </div>
            </div>


            <div className="paraheader-labtest"><p> Step 2 - Personal Information </p></div>
            <TextInput
                name="name"
                label="Name"
                value={labtest.name}
                onChange={onChange}
                error={errors.name}

            />
            <TextInput
                name="age"
                label="Age"
                value={labtest.age}
                onChange={onChange}
                error={errors.age}

            />
            <div className="telement" onChange={onChange}>
                <label className="telementl"> Gender</label>
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={labtest.gender == "Male"}

                />  Male
                    <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={labtest.gender == "Female"}

                />  Female

                </div>

            <TextInput
                name="email"
                label="Email"
                value={labtest.email}
                onChange={onChange}
                error={errors.email}

            />
            <TextInput
                name="mobile"
                label="Mobile#"
                value={labtest.mobile}
                onChange={onChange}
                error={errors.mobile}

            />

            <TextInput
                name="address1"
                label="Address"
                value={labtest.address1}
                onChange={onChange}
                error={errors.address}

            />
            <TextInput
                name="address2"
                label=""
                value={labtest.address2}
                onChange={onChange}
                error={errors.address}

            />
            <TextInput
                name="address3"
                label=""
                value={labtest.address3}
                onChange={onChange}
                error={errors.address}

            />

            <div className=" telement">

                <input
                    name="brnLabtest"
                    id="brnLabtest"
                    type="submit"
                    disabled={saving}
                    value={saving ? 'Saving...' : 'Save'}
                    className="btn btn-primary btn-xs  bbtn"
                    onClick={onSave} />


                <input type="button"
                    value="Delete"
                    disabled={deleteEnable}
                    className="btn btn-primary btn-xs  bbtn"
                    onClick={onDelete} />
            </div>


        </form>
    );
};

LabtestEnter.propTypes = {
    labtest: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool.isRequired,
    deleteEnable: React.PropTypes.bool.isRequired,
    errors: React.PropTypes.object,
    allLocation:React.PropTypes.object.isRequired,
    onTestChange: React.PropTypes.func.isRequired
};

export default LabtestEnter;