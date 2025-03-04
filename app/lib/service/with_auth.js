"use client";

import { useEffect, useState } from "react";
import { validateToken } from "./auth";

const withAuth = (WrappedComponent) => {
  const WithAuthComponent = (props) => {
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

  WithAuthComponent.displayName = `WithAuth(${getDisplayName(
    WrappedComponent
  )})`;

  return WithAuthComponent;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

export default withAuth;
