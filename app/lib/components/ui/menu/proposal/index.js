'use client'

import Link from 'next/link'

export default function ProposalSubMenu() {
    return (
        <li className="nav-item">
              <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-menu-button-wide"></i><span>Proposal</span><i className="bi bi-chevron-down ms-auto"></i>
              </a>
              <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                  <Link className="nav-link" href="/page/proposal/capture">
                    <i className="bi bi-circle"></i><span>Capture</span>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/page/proposal/manage">
                    <i className="bi bi-circle"></i><span>Manage</span>
                  </Link>
                </li>
              </ul>
            </li>
    )
}