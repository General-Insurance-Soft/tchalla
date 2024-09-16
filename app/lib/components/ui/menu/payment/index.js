'use client'

import Link from 'next/link'

export default function PaymentSubMenu() {
  return (
    <li className="nav-item">
      <a className="nav-link collapsed" data-bs-target="#payments-nav" data-bs-toggle="collapse" href="#">
      <i className="bi bi-wallet2"></i><span>Pyaments</span><i className="bi bi-chevron-down ms-auto"></i>
      </a>
      <ul id="payments-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
        <li>
          <Link className="nav-link" href="/page/payment/manage">
            <i className="bi bi-circle"></i><span>Manage</span>
          </Link>
        </li>
      </ul>
    </li>
  )
}