'use client'

import Link from 'next/link'

export default function CRMSubMenu() {
    return (
        <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-bar-chart"></i><span>CRM</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <Link className="nav-link" href="/page/crm/contact">
                        <i className="bi bi-circle"></i><span>Contanct Management</span>
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href="/page/crm/sales">
                        <i className="bi bi-circle"></i><span>Sales Management</span>
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href="/page/crm/customer">
                        <i className="bi bi-circle"></i><span>Customer Service</span>
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href="/page/crm/sms">
                        <i className="bi bi-circle"></i><span>SMS</span>
                    </Link>
                </li>
            </ul>
        </li>
    )
}