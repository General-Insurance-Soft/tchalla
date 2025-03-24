import React, { useEffect, useState } from "react";

import { fetchAdministrativeAreas } from "../../../lib/service/model";

export default function CustomerForm({ action, setShowEditForm, isUserPage }) {

    let [administrativeAreas, setAdministrativeAreas] = useState([]);

    useEffect(() => {


        const fetchAdministrativeAreasData = async () => {
            let res = await fetchAdministrativeAreas();
            if ('error' in res) {
                return;
            }
            setAdministrativeAreas(res);
        };

        fetchAdministrativeAreasData();


    }, []);


    return (
        <>
            {
                isUserPage ?
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            
                        </div>

                        <div>
                            <button class="btn btn-primary me-2" onClick={() => setShowEditForm(false)}>{action === 'edit' ? 'Update' : 'Save'}</button>
                            <button class="btn btn-secondary" onClick={() => setShowEditForm(false)}>Cancel</button>
                        </div>
                    </div> : ''
            }


            <form className="row g-3">
                <div className="col-md-4">

                    {action === "add" ?
                        <input type="text" className="form-control" placeholder="First Name" />
                        :
                        <input type="text" className="form-control" placeholder="Tom" />
                    }

                </div>
                <div className="col-md-4">

                    {action === "add" ?
                        <input type="text" className="form-control" placeholder="Second Name" />
                        :
                        <input type="text" className="form-control" placeholder="Lopy" />
                    }

                </div>
                <div className="col-md-4">

                    {action === "add" ?
                        <input type="text" className="form-control" placeholder="Third Name" />
                        :
                        <input type="text" className="form-control" placeholder="Lee" />
                    }

                </div>
                <div className="col-md-4">
                    {action === "add" ?
                        <input key={1} type="text" className="form-control" placeholder="Phone Number" />
                        :
                        <input key={2} type="text" className="form-control" placeholder="07200200200" />
                    }
                </div>
                <div className="col-md-4">

                    {action === "add" ?
                        <input type="email" className="form-control" placeholder="Email" />
                        :
                        <input type="email" className="form-control" placeholder="email@gmail.com" />
                    }
                </div>
                <div className="col-md-4">
                    <select id="inputState" className="form-select">
                        {action === "add" ? [<option key={1} defaultValue>Gender...</option>, <option key={2}>Male</option>] : <option>Male</option>}
                        <option>Female</option>
                    </select>
                </div>
                <div className="col-md-4">

                    {action === "add" ?
                        <input type="text" className="form-control" placeholder="Address" />
                        :
                        <input type="text" className="form-control" placeholder="First avenue shababa" />
                    }

                </div>
                <div className="col-md-4">
                    <select id="inputState" className="form-select">
                        {action === "add" ? [<option key={1} defaultValue>Country...</option>] : <option>Kenya</option>}
                        {administrativeAreas.map((area, index) => {
                            if (area.level === 1) {
                                return <option key={index}>{area.name}</option>;
                            }
                        }
                        )}
                    </select>
                </div>
                <div className="col-md-4">
                    <select id="inputState" className="form-select">

                        {action === "add" ? [<option key={1} defaultValue>County...</option>] : <option>Nakuru</option>}

                        {administrativeAreas.map((area, index) => {
                            if (area.level === 2) {
                                return <option key={index}>{area.name}</option>;
                            }
                        }
                        )}
                    </select>
                </div>
                <div className="col-md-4">
                    <label for="customer-group">Select customer group:</label>
                    <select id="customer-group" className="form-select">

                        {action === "add" ? [<option key={1} defaultValue>None...</option>, <option key={2} >Group 1</option>] : <option>Group 1</option>}
                        <option>Group 2</option>
                        <option>Group 3</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label for="img">Select passport/ID image:</label>
                    <input type="file" id="img" name="img" accept="image/*" className="form-control" />
                </div>

                <div className="col-md-4">
                    <label for="img2">Select KRA pin:</label>
                    <input type="file" id="img2" name="img" accept="image/*" className="form-control" />
                </div>

            </form>
        </>
    );
}
