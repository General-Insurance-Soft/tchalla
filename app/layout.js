
import Link from 'next/link'

import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./lib/boostrapj";
import "bootstrap-icons/font/bootstrap-icons.min.css";
//import  "simple-datatables/dist/style.css"
import "./globals.css";
import Image from 'next/image';
import ClaimSubMenu from "./lib/components/ui/menu/claim/index";
import CRMSubMenu from "./lib/components/ui/menu/crm/index";
import PolicySubMenu from "./lib/components/ui/menu/policy/index";
import ProposalSubMenu from "./lib/components/ui/menu/proposal/index";
import SettingSubMenu from "./lib/components/ui/menu/setting/index";
import ReportSubMenu from "./lib/components/ui/menu/report/index";


export const metadata = {
  title: "Gisca Insure: Insurance Agent Platform",
  description: "Gisca Insure: Insurance Agent Platform",
};

export default function RootLayout({ children }) {
  return (

    // <!DOCTYPE html>
    <html lang="en">

      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>GISCA Insure- Insurance Agent Platform</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        {/*  <!-- Favicons -->  */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

        {/*  <!-- Google Fonts -->  */}
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

        {/*  <!-- Vendor CSS Files -->  */}

        {/* <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" /> */}
        {/* <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet" /> */}
        {/* <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet" /> */}
        {/* <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link href="assets/vendor/simple-datatables/style.css" rel="stylesheet" /> */}

        {/*  <!-- Template Main CSS File -->  */}
        {/* <link href="assets/css/style.css" rel="stylesheet" /> */}

      </head>


      {/*  <!-- ======= Header ======= -->  */}

      <body>

        <header id="header" className="header fixed-top d-flex align-items-center">

          <div className="d-flex align-items-center justify-content-between">

            <Link className="logo d-flex align-items-center" href="/">
              <img src="assets/img/logo.png" alt="" />
              <span className="d-none d-lg-block">GISCA</span>
            </Link>
            <i className="bi bi-list toggle-sidebar-btn" ></i>
          </div>
          {/*  <!-- End Logo -->  */}

          <div className="search-bar">
            <form className="search-form d-flex align-items-center" method="POST" action="#">
              <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
              <button type="submit" title="Search"><i className="bi bi-search"></i></button>
            </form>
          </div>
          {/*  <!-- End Search Bar -->  */}

          <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">

              <li className="nav-item d-block d-lg-none">
                <a className="nav-link nav-icon search-bar-toggle " href="#">
                  <i className="bi bi-search"></i>
                </a>
              </li>
              {/*  <!-- End Search Icon-->  */}

              <li className="nav-item dropdown">

                <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-bell"></i>
                  <span className="badge bg-primary badge-number">4</span>
                </a>
                {/*  <!-- End Notification Icon -->  */}

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                  <li className="dropdown-header">
                    You have 4 new notifications
                    <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning"></i>
                    <div>
                      <h4>System maintanance</h4>
                      <p>There will be a system update on 25th</p>
                      <p>30 min. ago</p>
                    </div>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className="notification-item">
                    <i className="bi bi-x-circle text-danger"></i>
                    <div>
                      <h4>Storage</h4>
                      <p>20 GB used for stored files</p>
                      <p>1 hr. ago</p>
                    </div>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className="notification-item">
                    <i className="bi bi-check-circle text-success"></i>
                    <div>
                      <h4>Upcoming Holiday</h4>
                      <p>Upcoming national holiday, engage your customers</p>
                      <p>2 hrs. ago</p>
                    </div>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className="notification-item">
                    <i className="bi bi-info-circle text-primary"></i>
                    <div>
                      <h4>SMS credits</h4>
                      <p>Running low of SMS credits</p>
                      <p>4 hrs. ago</p>
                    </div>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="dropdown-footer">
                    <a href="#">Show all notifications</a>
                  </li>

                </ul>
                {/*  <!-- End Notification Dropdown Items -->  */}

              </li>
              {/*  <!-- End Notification Nav -->  */}

              <li className="nav-item dropdown">

                <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-chat-left-text"></i>
                  <span className="badge bg-success badge-number">3</span>
                </a>
                {/*  <!-- End Messages Icon -->  */}

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                  <li className="dropdown-header">
                    You have 3 new messages
                    <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className="message-item">
                    <a href="#">
                      <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle" />
                      <div>
                        <h4>Maria Hudson</h4>
                        <p>Please send me quotation on Fire/burglary policy</p>
                        <p>4 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className="message-item">
                    <a href="#">
                      <img src="assets/img/messages-2.jpg" alt="" className="rounded-circle" />
                      <div>
                        <h4>Anna Nelson</h4>
                        <p>Please provide me with claim form</p>
                        <p>6 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className="message-item">
                    <a href="#">
                      <img src="assets/img/messages-3.jpg" alt="" className="rounded-circle" />
                      <div>
                        <h4>David Muldon</h4>
                        <p>How much balance do i owe you</p>
                        <p>8 hrs. ago</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li className="dropdown-footer">
                    <a href="#">Show all messages</a>
                  </li>

                </ul>
                {/*  <!-- End Messages Dropdown Items -->  */}

              </li>
              {/*  <!-- End Messages Nav -->  */}

              <li className="nav-item dropdown pe-3">

                <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                  <Image
                    src="/img/profile-img.jpg"
                    layout="responsive"
                    width={16}  // Aspect ratio width
                    height={9}  // Aspect ratio height
                    className="rounded-circle"
                    alt="Profile"
                  />
                  <span className="d-none d-md-block dropdown-toggle ps-2">D. Ndiithi</span>
                </a>
                {/*  <!-- End Profile Iamge Icon --> */}

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                  <li className="dropdown-header">
                    <h6>Duncan Ndiithi</h6>
                    <span>Insurance Agent</span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link className="dropdown-item d-flex align-items-center" href="/page/profile">
                      <i className="bi bi-person"></i>
                      <span>My Profile</span>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link className="dropdown-item d-flex align-items-center" href="/page/faq">
                      <i className="bi bi-question-circle"></i>
                      <span>Need Help?</span>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <i className="bi bi-box-arrow-right"></i>
                      <span>Sign Out</span>
                    </a>
                  </li>

                </ul>
                {/* <!-- End Profile Dropdown Items --> */}
              </li>
              {/* <!-- End Profile Nav --> */}

            </ul>
          </nav>
          {/* <!-- End Icons Navigation --> */}

        </header>
        {/* <!-- End Header --> */}

        {/* <!-- ======= Sidebar ======= --> */}
        <aside id="sidebar" className="sidebar">

          <ul className="sidebar-nav" id="sidebar-nav">

            <li className="nav-item">
              <Link className="nav-link" href="/">
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            {/* <!-- End Dashboard Nav --> */}

            <ProposalSubMenu/>

            {/* <!-- End Components Nav --> */}

            <PolicySubMenu/>

            {/* <!-- End Forms Nav --> */}

            <ClaimSubMenu/>

            {/* <!-- End Tables Nav --> */}

            <CRMSubMenu/>

            {/* <!-- End Charts Nav --> */}

            <ReportSubMenu/>

            <SettingSubMenu/>

            <li className="nav-heading">Advance</li>

            <li className="nav-item">
              <Link className="nav-link collapsed" href="/page/profile">
                <i className="bi bi-person"></i>
                <span>Profile</span>
              </Link>
            </li>
            {/* <!-- End Profile Page Nav --> */}

            <li className="nav-item">
              <Link className="nav-link collapsed" href="/page/faq">
                <i className="bi bi-question-circle"></i>
                <span>F.A.Q</span>
              </Link>
            </li>
            {/* <!-- End F.A.Q Page Nav --> */}

          </ul>

        </aside>
        {/* <!-- End Sidebar--> */}

        <main id="main" className="main">

          {children}
          <BootstrapClient />

        </main>
        {/* <!-- End #main --> */}

        {/* <!-- ======= Footer ======= --> */}
        <footer id="footer" className="footer">
          <div className="copyright">
            &copy; Copyright <strong><span>GISCA</span></strong>. All Rights Reserved
          </div>
        </footer>
        {/* <!-- End Footer --> */}

        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

        {/* <!-- Vendor JS Files --> */}
        {/* <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/chart.js/chart.umd.js"></script>
        <script src="assets/vendor/echarts/echarts.min.js"></script>
        <script src="assets/vendor/quill/quill.js"></script>
        <script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
        <script src="assets/vendor/tinymce/tinymce.min.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script> */}

        {/* <!-- Template Main JS File --> */}
        {/* <script src="assets/js/main.js"></script> */}

      </body>

    </html>

  );
}
