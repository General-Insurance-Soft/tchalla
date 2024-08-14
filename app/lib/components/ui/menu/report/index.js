'use client'

import Link from 'next/link'

export default function ReportSubMenu() {
    return (
        <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#ReportSubMenu-nav" data-bs-toggle="collapse" href="#">
            <i class="bi bi-file-earmark-bar-graph"></i><span>Reports</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="ReportSubMenu-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <Link className="nav-link" href="/page/setting/general">
                        <i className="bi bi-circle"></i><span>Standard</span>
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href="/page/claim/capture">
                        <i className="bi bi-circle"></i><span>Ad hoc</span>
                    </Link>
                </li>
            </ul>
        </li>
    );
}