'use client'

import withAuth from "../../../lib/service/with_auth";

const Page = () => {
    return <p>Adhoc</p>;
}


export default withAuth(Page);