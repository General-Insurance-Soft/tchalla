'use client';   

import withAuth from "../../lib/service/with_auth";


const Page = () => {
    return (
        <>
            <div className="pagetitle">
                <h1>Profile</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="index.html">Profile</a></li>
                    </ol>
                </nav>
            </div>

            {/* body */}


            {/* <h5 className="card-title">Capture policy Details</h5> */}

            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-end">

                        <div className="d-flex flex-column align-items-center text-center p-4">
                            {/* <img className="img-profile rounded-circle" src="{{ asset('images/undraw_profile.svg') }}" /> */}
                            <span><i style={{ "color": "#00c9e8", fontSize: '6rem' }} className="bi bi-person-circle"></i></span>
                            <span className="font-weight-bold">Duncan</span>
                            <span className="text-black-50">duncan@gmail.com</span>
                            <span> </span>
                        </div>
                    </div>
                    <div className="col-md-5 border-end">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">My Profile</h4>
                            </div>

                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">Name <span style={{ "color": "red" }}>*</span></label>
                                    <input required type="text" className="form-control" /></div>
                                <div className="col-md-6"><label className="labels">Last Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-3">

                                <div className="col-md-12"><label className="labels">Email <span style={{ "color": "red" }}>*</span></label>
                                    <input required type="email" className="form-control" />
                                </div>

                                <div className="col-md-12" style={{ "marginTop": "5px" }}><label className="labels">Password</label>
                                    <input className="form-control" />
                                    <input type="checkBox" /> Show password
                                </div>

                            </div>

                            <div className="mt-5 text-center">
                                <button className="btn btn-primary profile-button" type="button">Update Profile</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 p-3 py-5">
                        <div className="row">
                            <div className="col-sm-6">
                                <span style={{ "color": "#085c1f" }} ><i className="bi bi-star"></i> <i className="bi bi-star"></i> Role</span>
                            </div>
                            <div className="col-sm-6">
                                Super Admin
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-12">
                            </div>

                            <div className="col-sm-6">

                            </div>
                        </div>
                    </div>

                </div>

                {/* alert modal */}
                <div className="modal fade" id="updateUserModal" tabIndex="-1" role="dialog" aria-labelledby="updateUserModalTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Notice!</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>

    );
}

export default withAuth(Page);