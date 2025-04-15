'use client';

import Link from 'next/link';
import { useState } from 'react';
import { signIn, fetchUserData } from '../lib/service/auth';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

export default function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});
    const router = useRouter();

    const signInUser = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = {
            email: email,
            password: password,
        };

        try {
            let response = await signIn(formData);
            const data = await response;
            if ('jwtToken' in data && 'jwtRefreshToken' in data) {
                // Set the authToken cookie
                Cookies.set('authToken', JSON.stringify(data), { expires: 7, path: '/' });

                const decodedToken = jwtDecode(data?.jwtToken?.token);

                // if( typeof window != 'undefined' ){
                //     window.localStorage.setItem('userData', JSON.stringify({
                //         email: decodedToken['email'],
                //         userId: decodedToken['user-id'],
                //         orgId: decodedToken['organization-id'],
                //         roles: decodedToken['authorities'] || [],
                //     }));
                // }

                if(decodedToken['user-id']){
                    fetchUserData(decodedToken['user-id'], data?.jwtToken?.token).then((userData) => {
                        if (userData) {
                            window.localStorage.setItem('userData', JSON.stringify({
                                // ...JSON.parse(window.localStorage.getItem('userData')),
                                ...userData
                            }));
                        }
                    }
                    ).catch((error) => {
                        console.error('Error fetching user data:', error);
                    }).finally(() => {
                        router.push('/page');
                    });
                } else {
                    router.push('/page');
                }

            } else {

                if ('messageString' in data) {
                    setError({
                        'error': data['messageString']
                    });
                } else if ('message' in data) {
                    setError({
                        'error': data['message']
                    });
                }
                else {
                    console.log(data);
                    //setError(data);
                }

            }

            // Handle successful signup (e.g., redirect to login page)
        } catch (error) {
            console.error('Error during signin:', error);
            // setError(error);
            // Handle signup error (e.g., display error message)
        }
    };


    return (

        <main>
            <div className="container">

                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                <div className="d-flex justify-content-center py-4">
                                    <a href="index.html" className="logo d-flex align-items-center w-auto">
                                        <img src="assets/img/logo.png" alt="" />
                                        <span className="d-none d-lg-block">GISCA</span>
                                    </a>
                                </div>

                                <div className="card mb-3">

                                    <div className="card-body">

                                        <span id='signUpError' className="small text-center text-danger p-2">
                                            {error && Object.keys(error).map(key => (
                                                <div key={key}> * {error[key]}</div>
                                            ))}

                                        </span>

                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                            <p className="text-center small">Enter your email & password to login</p>
                                        </div>

                                        <form className="row g-3 needs-validation" noValidate>

                                            <div className="col-12">
                                                <label htmlFor="yourUsername" className="form-label">Email</label>
                                                <div className="input-group has-validation">
                                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        className="form-control"
                                                        id="yourUsername"
                                                        required
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                    <div className="invalid-feedback">Please enter your email.</div>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="yourPassword" className="form-label">Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    id="password"
                                                    required
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <div className="invalid-feedback">Please enter your password!</div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button onClick={(event) => signInUser(event)} className="btn btn-primary w-100">Login</button>
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">Don&apos;t have an account?  <Link href="/account/register">
                                                    <span> Create an account</span>
                                                </Link>
                                                </p>
                                            </div>
                                        </form>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </main>


    );
}