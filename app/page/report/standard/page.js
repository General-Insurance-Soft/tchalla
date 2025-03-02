'use client'

import withAuth from "../../../lib/service/with_auth";

const Page = () => {
    return <p>Standard</p>;
}

export default withAuth(Page);