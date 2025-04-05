
import { useState } from 'react';


import '@fortawesome/fontawesome-free/css/all.min.css';

import 'react-dual-listbox/lib/react-dual-listbox.css';

import DualListBox from 'react-dual-listbox';

export default function NewRoleForm({ roleAction }) {

    const [selected, setSelected] = useState([]);

    const rolesoptions = [
        {
            label: 'Reports',
            options: [
                { value: 'luna', label: 'view reports' },
                { value: 'luna2', label: 'download reports' }

            ],
        },
        {
            label: 'Proposal',
            options: [
                { value: 'phobos1', label: 'View Proposal' },
                { value: 'deimos2', label: 'Create Proposal' },
                { value: 'deimos', label: 'Edit Proposal' },
            ],
        },
        {
            label: 'Claim',
            options: [
                { value: 'io', label: 'View Claim' },
                { value: 'europa', label: 'Create Claim' },
                { value: 'ganymede', label: 'Edit Claim' },
            ],
        },
        {
            label: 'Policy',
            options: [
                { value: 'phobos', label: 'View Policy' },
                { value: 'deimos2', label: 'Create Policy' },
                { value: 'deimos4', label: 'Edit Policy' }
            ],
        },
        {
            label: 'SMS',
            options: [
                { value: 'phobos2', label: 'Send SMS' },
                { value: 'deimos6', label: 'Recharge SMS Credit' },
            ],
        },
        {
            label: 'Settings',
            options: [
                { value: 'phobos3', label: 'View Settings' },
                { value: 'deimos', label: 'View SMS Settings' },
                { value: 'deimos3', label: 'View Policy Settings' },
                { value: 'deimos5', label: 'View Proposal Settings' },
            ],
        }
    ];

    return (

        <div className="modal fade" id="newRoleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="newRoleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="newRoleModalLabel">
                            {
                                roleAction === "add" ? "Add Role" : "Edit Role"
                            }
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="row g-3">
                            <div className="col-md-4">
                                <labelhtmlFor="firstName"> Role name:</label>

                                {
                                    roleAction === "add" ?
                                        <input id="firstName" className="form-control" type="text" aria-label="First Name" key={roleAction} ></input>
                                        :
                                        <input id="firstName" className="form-control" type="text" aria-label="First Name" placeholder="Data Entry" key={roleAction}></input>
                                }

                            </div>
                            <div className="col-md-12">
                                <labelhtmlFor="secondName"> Assign Permission</label>

                                <DualListBox
                                    canFilter
                                    options={rolesoptions}
                                    selected={selected}
                                    onChange={(newValue) => setSelected(newValue)}
                                />
                            </div>


                        </form>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>

    );
}