export default function Page() {
    return (
        <>

            <div className="pagetitle">
                <h1>CRM</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="index.html">Payment</a></li>
                        <li className="breadcrumb-item active">Manage</li>
                    </ol>
                </nav>
            </div>

            <div className="card">
                <div className="card-body">

                    <ul className="nav nav-tabs nav-tabs-bordered d-flex" id="borderedTabJustified" role="tablist">
                        <li className="nav-item flex-fill" role="presentation">
                            <button className="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-payment" type="button" role="tab" aria-controls="payment" aria-selected="true">Transactions</button>
                        </li>
                        <li className="nav-item flex-fill" role="presentation">
                            <button className="nav-link w-100" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-schedule" type="button" role="tab" aria-controls="payment2" aria-selected="false">payment2</button>
                        </li>

                    </ul>

                    <div className="tab-content pt-2" id="borderedTabJustifiedContent">

                        <div className="tab-pane fade show active" id="bordered-justified-payment" role="tabpanel" aria-labelledby="payment-tab">
                            {/* payment list */}

                            <div className="card">
                                <div className="card-body">
                                    {/* <h5 className="card-title">Capture policy Details</h5> */}


                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="bordered-justified-payment2" role="tabpanel" aria-labelledby="payment-tab">
                            <div className="card">
                                <div className="card-body">
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>

    );
}