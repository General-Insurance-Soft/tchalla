'use client'

import Link from 'next/link'

export default function ClaimSubMenu() {
    return (
        <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-layout-text-window-reverse"></i><span>Claim</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <Link className="nav-link" href="/page/claim/capture">
                        <i className="bi bi-circle"></i><span>Capture</span>
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href="/page/claim/manage">
                        <i className="bi bi-circle"></i><span>Manage</span>
                    </Link>
                </li>
            </ul>
        </li>
    )
}