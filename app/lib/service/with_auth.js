'use client';

import { useEffect, useState } from "react";
import { validateToken } from "./auth";

const withAuth = (WrappedComponent) => {
    return (props) => {
        const [loadPage, setLoadPage] = useState(false);

        useEffect(() => {
            const checkAuth = async () => {
                const isValid = await validateToken();
                setLoadPage(isValid);
            };

            checkAuth();

        }, []);

        if (!loadPage) {
            return (
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            );
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
