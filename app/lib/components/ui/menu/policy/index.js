'use client'

import Link from 'next/link'

export default function PolicySubMenu() {
    return (
        <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-journal-text"></i><span>Policy</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <Link className="nav-link" href="/page/policy/capture">
                        <i className="bi bi-circle"></i><span>Capture</span>
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href="/page/policy/manage">
                        <i className="bi bi-circle"></i><span>Manage</span>
                    </Link>
                </li>
            </ul>
        </li>
    )
}