'use client';

import Link from 'next/link';
import { useState } from 'react';
import { signIn } from '../lib/service/auth';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';


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
                router.push('/page');
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
            <div class="container">

                <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                <div class="d-flex justify-content-center py-4">
                                    <a href="index.html" class="logo d-flex align-items-center w-auto">
                                        <img src="assets/img/logo.png" alt="" />
                                        <span class="d-none d-lg-block">GISCA</span>
                                    </a>
                                </div>

                                <div class="card mb-3">

                                    <div class="card-body">

                                        <span id='signUpError' className="small text-center text-danger">
                                            {error && Object.keys(error).map(key => (
                                                <div key={key}> * {error[key]}</div>
                                            ))}

                                        </span>

                                        <div class="pt-4 pb-2">
                                            <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                            <p class="text-center small">Enter your email & password to login</p>
                                        </div>

                                        <form class="row g-3 needs-validation" novalidate>

                                            <div class="col-12">
                                                <label for="yourUsername" class="form-label">Email</label>
                                                <div class="input-group has-validation">
                                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        class="form-control"
                                                        id="yourUsername"
                                                        required
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                    <div class="invalid-feedback">Please enter your email.</div>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <label for="yourPassword" class="form-label">Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    class="form-control"
                                                    id="password"
                                                    required
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <div class="invalid-feedback">Please enter your password!</div>
                                            </div>

                                            <div class="col-12">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                                    <label class="form-check-label" for="rememberMe">Remember me</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <button onClick={(event) => signInUser(event)} className="btn btn-primary w-100">Login</button>
                                            </div>
                                            <div class="col-12">
                                                <p class="small mb-0">Don&apos;t have an account?  <Link href="/account/register">
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