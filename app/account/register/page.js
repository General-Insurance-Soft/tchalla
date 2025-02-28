'use client';

import Link from 'next/link';
import { useState } from 'react';
import { doSignUp } from '../../lib/service/signup';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [thirdName, setThirdName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [terms, setTerms] = useState(false);
    const [error, setError] = useState({});
    const router = useRouter();

    const signupUser = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = {
            first_name: firstName,
            second_name: secondName,
            third_name: thirdName,
            phone: phone,
            email: email,
            password: password,
        };

        try {
            let response = await doSignUp(formData);
            if (response.ok) {

                const data = await response.json(); // Assuming response.json() is a Promise

                if ('jwtToken' in data && 'jwtRefreshToken' in data) {
                    // Set the authToken cookie
                    console.log("data to store: ======>")
                    console.log(data)
                    Cookies.set('authToken', JSON.stringify(data), { expires: 7, path: '/' });
                    router.push('/page');
                }
            } else {

                const data = await response.json();
                setError(data);

            } 

            // Handle successful signup (e.g., redirect to login page)
        } catch (error) {
            console.error('Error during signup:', error);
            // Handle signup error (e.g., display error message)
        }
    };

    return (
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
                                <span id='signUpError' className="small text-center text-danger">
                                    {error && Object.keys(error).map(key => (
                                        <div key={key}> * {error[key]}</div>
                                    ))}

                                </span>

                                <div className="pt-4 pb-2">
                                    <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                                    <p className="text-center small">Enter your personal details to create account</p>
                                </div>

                                <form className="row g-3">
                                    <div className="col-12">
                                        <label htmlFor="first_name" className="form-label">First Name</label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            className="form-control"
                                            id="first_name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        />
                                        <div className="invalid-feedback">Please, enter your first name!</div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="second_name" className="form-label">Second Name</label>
                                        <input
                                            type="text"
                                            name="second_name"
                                            className="form-control"
                                            id="second_name"
                                            value={secondName}
                                            onChange={(e) => setSecondName(e.target.value)}

                                        />

                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="third_name" className="form-label">Third Name</label>
                                        <input
                                            type="text"
                                            name="third_name"
                                            className="form-control"
                                            id="third_name"
                                            value={thirdName}
                                            onChange={(e) => setThirdName(e.target.value)}
                                            required
                                        />
                                        <div className="invalid-feedback">Please, enter your third name!</div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="phone" className="form-label">Phone number</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            className="form-control"
                                            id="phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                        <div className="invalid-feedback">Please, enter your phone number!</div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                                            <input
                                                type="text"
                                                name="email"
                                                className="form-control"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            <div className="invalid-feedback">Please enter your email!</div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <div className="invalid-feedback">Please enter your password!</div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                name="terms"
                                                type="checkbox"
                                                value=""
                                                id="acceptTerms"
                                                checked={terms}
                                                onChange={(e) => setTerms(e.target.checked)}
                                                required
                                            />
                                            <label className="form-check-label" htmlFor="acceptTerms">
                                                I agree and accept the <a href="#">terms and conditions</a>
                                            </label>
                                            <div className="invalid-feedback">You must agree before submitting.</div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button onClick={(event) => signupUser(event)} className="btn btn-primary w-100">Create Account</button>
                                    </div>
                                    <div className="col-12">
                                        <p className="small mb-0">
                                            Already have an account?
                                            <Link href="/login">
                                                <span> Log in</span>
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
    );
}