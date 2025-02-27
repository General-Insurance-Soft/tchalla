import BarChart from '../lib/components/chart/bar_chart/bar-chart';
import LineChart from '../lib/components/chart/line_chart/line-chart';
import PieChart from '../lib/components/chart/pie_chart/pie-chart';
import Data_Table from '../lib/components/table/data-table';

export default function Page() {
  return (

    <>
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Page Title --> */}

      <section className="section dashboard">
        <div className="row">

          {/* <!-- Left side columns --> */}
          <div className="col-lg-8">
            <div className="row">

              {/* <!-- Sales Card --> */}
              <div className="col-xxl-4 col-md-6">
                <div className="card info-card sales-card">

                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a className="dropdown-item" href="#">Today</a></li>
                      <li><a className="dropdown-item" href="#">This Month</a></li>
                      <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">New Policy <span>| Quartely</span></h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-cart"></i>
                      </div>
                      <div className="ps-3">
                        <h6>145</h6>
                        <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              {/* <!-- End Sales Card --> */}

              {/* <!-- Revenue Card --> */}
              <div className="col-xxl-4 col-md-6">
                <div className="card info-card revenue-card">

                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a className="dropdown-item" href="#">Today</a></li>
                      <li><a className="dropdown-item" href="#">This Month</a></li>
                      <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">SMS Sent <span>| This Month</span></h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-currency-dollar"></i>
                      </div>
                      <div className="ps-3">
                        <h6>3,264</h6>
                        <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              {/* <!-- End Revenue Card --> */}

              {/* <!-- Customers Card --> */}
              <div className="col-xxl-4 col-xl-12">

                <div className="card info-card customers-card">

                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a className="dropdown-item" href="#">Today</a></li>
                      <li><a className="dropdown-item" href="#">This Month</a></li>
                      <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">Customers <span>| This Year</span></h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-people"></i>
                      </div>
                      <div className="ps-3">
                        <h6>1244</h6>
                        <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>

                      </div>
                    </div>

                  </div>
                </div>

              </div>
              {/* <!-- End Customers Card --> */}

              {/* <!-- Reports --> */}
              <div className="col-12">
                <div className="card">

                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a className="dropdown-item" href="#">Today</a></li>
                      <li><a className="dropdown-item" href="#">This Month</a></li>
                      <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">Reports <span>/Today</span></h5>
                    {/* <!-- Line Chart --> */}
                    <div id="reportsChart"></div>
                    <LineChart />
                  </div>

                </div>
              </div>
              {/* <!-- End Reports --> */}

              {/* <!-- Recent Sales --> */}
              <div className="col-12">
                <div className="card recent-sales overflow-auto">

                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a className="dropdown-item" href="#">Today</a></li>
                      <li><a className="dropdown-item" href="#">This Month</a></li>
                      <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">Recent Sales <span>| Today</span></h5>

                    <Data_Table />

                  </div>

                </div>
              </div>
              {/* <!-- End Recent Sales --> */}

              {/* <!-- Top Selling --> */}
              <div className="col-12">
                <div className="card top-selling overflow-auto">

                  <div className="filter">
                    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li className="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>

                      <li><a className="dropdown-item" href="#">Today</a></li>
                      <li><a className="dropdown-item" href="#">This Month</a></li>
                      <li><a className="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>

                  <div className="card-body pb-0">
                    <h5 className="card-title">Top Selling <span>| Today</span></h5>

                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Preview</th>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Sold</th>
                          <th scope="col">Revenue</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row"><a href="#"><i style={{fontSize: "30px"}} className="bi bi-car-front-fill"></i></a></th>
                          <td><a href="#" className="text-primary fw-bold">Vehicle - Comprehensive</a></td>
                          <td>1600</td>
                          <td className="fw-bold">100</td>
                          <td>160,000</td>
                        </tr>
                        <tr>
                          <th scope="row"><a href="#"><i style={{fontSize: "30px"}} className="bi bi-house-add"></i></a></th>
                          <td><a href="#" className="text-primary fw-bold">House Insurance</a></td>
                          <td>1400</td>
                          <td className="fw-bold">100</td>
                          <td>140,000</td>
                        </tr>
                        <tr>
                          <th scope="row"><a href="#"><i style={{fontSize: "30px"}} className="bi bi-person-arms-up"></i></a></th>
                          <td><a href="#" className="text-primary fw-bold">Life insurance</a></td>
                          <td>767</td>
                          <td className="fw-bold">100</td>
                          <td>76,700</td>
                        </tr>
                        <tr>
                          <th scope="row"><a href="#"><i style={{fontSize: "30px"}} className="bi bi-car-front"></i></a></th>
                          <td><a href="#" className="text-primary fw-bold">Vehicle - Third party</a></td>
                          <td>200</td>
                          <td className="fw-bold">200</td>
                          <td>40,000</td>
                        </tr>
                        <tr>
                          <th scope="row"><a href="#"><i style={{fontSize: "30px"}} className="bi bi-fire"></i></a></th>
                          <td><a href="#" className="text-primary fw-bold">Fire/burglary</a></td>
                          <td>300</td>
                          <td className="fw-bold">140</td>
                          <td>32,000</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>

                </div>
              </div>
              {/* <!-- End Top Selling --> */}

            </div>
          </div>
          {/* <!-- End Left side columns --> */}

          {/* <!-- Right side columns --> */}
          <div className="col-lg-4">

            {/* <!-- Recent Activity --> */}
            <div className="card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li><a className="dropdown-item" href="#">Today</a></li>
                  <li><a className="dropdown-item" href="#">This Month</a></li>
                  <li><a className="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>

              <div className="card-body">
                <h5 className="card-title">Recent Activity <span>| Timeline</span></h5>

                <div className="activity">

                  <div className="activity-item d-flex">
                    <div className="activite-label">32 min</div>
                    <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                    <div className="activity-content">
                      New Claim from  <a href="#" className="fw-bold text-dark">Tom - Ziwani</a> Ksh 32,000
                    </div>
                  </div>
                  {/* <!-- End activity item--> */}

                  <div className="activity-item d-flex">
                    <div className="activite-label">56 min</div>
                    <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                    <div className="activity-content">
                      10,000 sms completed sending
                    </div>
                  </div>
                  {/* <!-- End activity item--> */}

                  <div className="activity-item d-flex">
                    <div className="activite-label">2 hrs</div>
                    <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                    <div className="activity-content">
                      New Proposal captured
                    </div>
                  </div>
                  {/* <!-- End activity item--> */}

                  <div className="activity-item d-flex">
                    <div className="activite-label">1 day</div>
                    <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                    <div className="activity-content">
                      New policy for <a href="#" className="fw-bold text-dark">Dennis - Rongai</a> Captured
                    </div>
                  </div>
                  {/* <!-- End activity item--> */}

                  <div className="activity-item d-flex">
                    <div className="activite-label">2 days</div>
                    <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                    <div className="activity-content">
                      Updted database with new customer
                    </div>
                  </div>
                  {/* <!-- End activity item--> */}

                  <div className="activity-item d-flex">
                    <div className="activite-label">4 weeks</div>
                    <i className='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                    <div className="activity-content">
                      Updated SMS credits
                    </div>
                  </div>
                  {/* <!-- End activity item--> */}

                </div>

              </div>
            </div>
            {/* <!-- End Recent Activity --> */}

            {/* <!-- Customer Distribution --> */}
            <div className="card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li><a className="dropdown-item" href="#">Today</a></li>
                  <li><a className="dropdown-item" href="#">This Month</a></li>
                  <li><a className="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>

              <div className="card-body pb-0">
                <h5 className="card-title">Customer Distribution <span>| This Month</span></h5>

                <div id="budgetChart" style={{ minHeight: "400px" }} className="echart">

                  <PieChart />

                </div>

              </div>
            </div>
            {/* <!-- End BCustomer Distribution --> */}

            {/* <!-- Customer years --> */}
            <div className="card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li><a className="dropdown-item" href="#">Past 3 yr</a></li>
                  <li><a className="dropdown-item" href="#">Past 1 yrs</a></li>
                  <li><a className="dropdown-item" href="#">Past 6 Mnths</a></li>
                </ul>
              </div>

              <div className="card-body pb-0">
                <h5 className="card-title">Customers Over Time <span>| Past 5 yrs</span></h5>

                <BarChart/>

              </div>
            </div>
            {/* <!-- End Website Traffic --> */}

          </div>
          {/* <!-- End Right side columns --> */}

        </div>
      </section>
    </>
  );
}