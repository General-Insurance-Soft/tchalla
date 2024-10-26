
export default function NewUserForm({userAction}) {

    return (

        <div className="modal fade" id="newUserModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="newUserModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="newUserModalLabel">
                            New User
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="row g-3">
                            <div className="col-md-4">
                                <label for="firstName"> First name:</label>

                                <input className="form-control" type="text" aria-label="First Name" ></input>
                            </div>
                            <div className="col-md-4">
                                <label for="secondName"> Second name:</label>

                                <input id="secondName" className="form-control" type="text" aria-label="Second Name"  ></input>
                            </div>
                            <div className="col-md-4">
                                <label for="email"> Email</label>

                                <input id="email" className="form-control" type="text" aria-label="First Name"  ></input>
                            </div>

                            <div className="col-md-4">
                                <label for="Passport">Password</label>
                                <input id="password1" type="password" className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <label for="Passport">Repeat Password</label>
                                <input id="password2" type="password" className="form-control" />
                            </div>

                            <div className="col-md-4">
                                <label for="Passport">Role</label>
                                <select className="form-select">
                                    <option key="0" value="0">Admin</option>
                                    <option key="1" value="1">Super Admin</option>
                                    <option key="2" value="2">Data Entry</option>
                                    <option key="1" value="1">Reports</option>
                                    <option key="1" value="1">Secretary</option>
                                </select>
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