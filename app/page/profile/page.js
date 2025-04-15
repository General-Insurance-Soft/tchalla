'use client';

import { useEffect, useState } from "react";
import withAuth from "../../lib/service/with_auth";
import { fetchUserData, doProfileUpdate } from "../../lib/service/auth";
import Link from "next/link";
import { type } from "os";


const Page = () => {

    const [userData, setUserData] = useState({});
    const [editUserData, setEditUserData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
    });
    const [error, setError] = useState({});
    const [message, setMessage] = useState([]);

    useEffect(() => {
        fetchUserData().then((data) => {
            if (data) {
                setUserData(data);
                setEditUserData({
                    first_name: data.first_name,
                    second_name: data.second_name,
                    third_name: data.third_name,
                    email: data.email,
                    phone: data.phone,
                    password: '',
                })
            }
            setMessage([]);
        }).catch((error) => {
            setMessage([...message, { type: 'error', text: "Failed to fetch user data" }]);
            console.error('Error fetching user data:', error);
        });
    }, []);

    const updateProfile = async () => {
        setMessage([]);
        let updateData = {
            user: userData.id,
            first_name: editUserData.first_name,
            second_name: editUserData.second_name,
            third_name: editUserData.third_name,
            email: editUserData.email,
            phone: editUserData.phone,
            password: editUserData.password
        }

        let response = await doProfileUpdate(updateData, userData.id);
        if(response.error){
            setMessage([...message, { type: 'error', text: response.error || "Failed to update profile" }]);
            return;
        }
        if (response) {
            setUserData(response);
            setEditUserData({
                first_name: response.first_name,
                second_name: response.second_name,
                third_name: response.third_name,
                email: response.email,
                phone: response.phone,
                password: '',
            });
            setMessage([...message, { type: 'success', text: "Profile updated successfully" }]);
        }
    }


    return (
        <>
            <div className="pagetitle">
                <h1>Profile</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link href="/page/profile">Profile</Link></li>
                    </ol>
                </nav>
            </div>


            {/* body */}

            {/* <h5 className="card-title">Capture policy Details</h5> */}

            {userData ? <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-12">
                        {/* Messages */}
                        {message.length > 0 && message.map((msg, index) => (
                            <div key={index} className={`alert alert-${msg.type || warning}`} role="alert">
                                {msg.text}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 border-end">
                        <div className="d-flex flex-column align-items-center text-center p-4">
                            {/* <img className="img-profile rounded-circle" src="{{ asset('images/undraw_profile.svg') }}" /> */}
                            <span><i style={{ "color": "#00c9e8", fontSize: '6rem' }} className="bi bi-person-circle"></i></span>
                            <span className="font-weight-bold">{userData?.first_name + " " + userData?.second_name+ " " + userData?.third_name}</span>
                            <span className="text-black-50">{userData?.email}</span>
                            <span> </span>
                        </div>
                    </div>
                    <div className="col-md-7 border-end">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">My Profile</h4>
                            </div>

                            <div className="row mt-2">
                                <div className="col-md-4"><label className="labels">Name <span style={{ "color": "red" }}>*</span></label>
                                    <input required type="text" className="form-control" defaultValue={editUserData?.first_name} onChange={(e) => setEditUserData({ ...editUserData, first_name: e.target.value })} />
                                </div>
                                <div className="col-md-4"><label className="labels">Second Name</label>
                                    <input type="text" className="form-control" defaultValue={editUserData?.second_name} onChange={(e) => setEditUserData({ ...editUserData, second_name: e.target.value })} />
                                </div>
                                <div className="col-md-4"><label className="labels">Third Name</label>
                                    <input type="text" className="form-control" defaultValue={editUserData?.third_name} onChange={(e) => setEditUserData({ ...editUserData, third_name: e.target.value })} />
                                </div>
                            </div>
                            <div className="row mt-3">

                                <div className="col-md-12"><label className="labels">Email <span style={{ "color": "red" }}>*</span></label>
                                    <input required type="email" className="form-control" defaultValue={editUserData?.email} onChange={(e) => setEditUserData({ ...editUserData, email: e.target.value })} />
                                </div>

                                <div className="col-md-12" style={{ "marginTop": "5px" }}><label className="labels">Password</label>
                                    <input id="passfield" className="form-control" type="password" defaultValue={editUserData?.password} onChange={(e) => setEditUserData({ ...editUserData, password: e.target.value })} />
                                    <input type="checkBox" onChange={(e) => {
                                        if (e.target.checked) {
                                            document.getElementById('passfield').setAttribute('type', 'text');
                                        } else {
                                            document.getElementById('passfield').setAttribute('type', 'password');
                                        }
                                    }} /> Show password
                                </div>

                            </div>

                            <div className="mt-5 text-center">
                                <button className="btn btn-primary profile-button" type="button" onClick={e=>updateProfile()}>Update Profile</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 p-3 py-5">
                        {/* <pre style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>
                            {JSON.stringify(userData, null, 2)}
                        </pre> */}
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

            </div> : <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
            <div className="col-md-12">
                <div className="alert alert-danger" role="alert">
                    <strong>Oops!</strong> Something went wrong while fetching your profile data. Please try again later.
                </div>
            </div>
        </div>
    </div>
}


        </>

    );
}

export default withAuth(Page);