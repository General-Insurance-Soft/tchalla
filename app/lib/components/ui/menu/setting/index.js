'use client'

import Link from 'next/link'

export default function SettingSubMenu() {
    return (
        <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#settings-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-gear"></i><span>System Setting</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="settings-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <Link className="nav-link" href="/page/setting/general">
                        <i className="bi bi-circle"></i><span>General</span>
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href="/page/claim/capture">
                        <i className="bi bi-circle"></i><span>Roles</span>
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href="/page/claim/manage">
                        <i className="bi bi-circle"></i><span>Users</span>
                    </Link>
                </li>
            </ul>
        </li>
    )
}