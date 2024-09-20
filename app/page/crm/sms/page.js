export default function Page() {
    return (
        <>
            <div className="pagetitle">
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">crm</li>
                        <li className="breadcrumb-item active">sms</li>
                    </ol>
                </nav>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">


                            <ul className="nav nav-tabs nav-tabs-bordered d-flex" id="borderedTabJustified" role="tablist">
                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-bulk" type="button" role="tab" aria-controls="bulk" aria-selected="true">Bulk SMS</button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-schedule" type="button" role="tab" aria-controls="schedule" aria-selected="false">Schedule SMS</button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100" id="triggers-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-triggers" type="button" role="tab" aria-controls="triggers" aria-selected="false">SMS triggers</button>
                                </li>

                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100" id="sms-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-sms" type="button" role="tab" aria-controls="sma" aria-selected="false">SMS Templates</button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-balance" type="button" role="tab" aria-controls="balance" aria-selected="false">SMS balance </button>
                                </li>


                            </ul>
                            <div className="tab-content pt-2" id="borderedTabJustifiedContent">
                                <div className="tab-pane fade show active" id="bordered-justified-bulk" role="tabpanel" aria-labelledby="bulk-tab">

                                </div>
                                <div className="tab-pane fade" id="bordered-justified-schedule" role="tabpanel" aria-labelledby="schedule-tab">

                                </div>
                                <div className="tab-pane fade" id="bordered-justified-triggers" role="tabpanel" aria-labelledby="triggers-tab">

                                </div>

                                <div className="tab-pane fade" id="bordered-justified-sms" role="tabpanel" aria-labelledby="sms-tab">
                                    <div class="card">
                                        <div class="card-body">
                                            <h6 class="tc-card-header">SMS Template</h6>
                                            <hr />

                                            <div class="accordion" id="smsTemplates">


                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            SMS template for events
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#smsTemplates">
                                                        <div class="accordion-body">

                                                            <form class="row g-3">

                                                                <div className="col-sm-6">
                                                                    <label for="inputName56" class="form-label">Template Name:</label>
                                                                    <input type="text" class="form-control" id="inputName56" />
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <label for="inputState" class="form-label">Select Event:</label>
                                                                    <select id="inputState" className="form-select">
                                                                        {/* <option defaultValue>Gender...</option> */}
                                                                        <option>Company anniversary</option>
                                                                        <option>Company Awards</option>
                                                                        <option>Mashujaa day</option>
                                                                        <option>Christmas</option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <label for="inputName5" class="form-label">SMS template birthdays day:</label>
                                                                    <textarea id="inputName5" class="form-control" name="w3review" rows="4" cols="8"></textarea>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <label for="#" class="form-label">Placeholders:</label>
                                                                    <div>
                                                                        [first_name], [last_name], [middle_name], [x_name],  [x_name],
                                                                        [x_name], [x_name], [x_name]
                                                                    </div>
                                                                </div>
                                                                <div class="text-center mb-3">
                                                                    <div class="d-flex justify-content-center">
                                                                        <button class="btn btn-primary me-2">Add</button>
                                                                        <button type="reset" class="btn btn-secondary">Reset</button>
                                                                    </div>
                                                                </div>

                                                            </form>
                                                            <div className="row mb-3">
                                                                <div className="col-sm-12">
                                                                    <table className="table table-striped table-bordered">
                                                                        <thead>
                                                                            <tr>
                                                                                <th scope="col">#</th>
                                                                                <th scope="col">Name</th>
                                                                                <th scope="col">Template Name</th>
                                                                                <th scope="col">Event Name</th>
                                                                                <th scope="col">Last Editor</th>
                                                                                <th scope="col">Last Edited</th>
                                                                                <th scope="col">Action</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>

                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            SMS template for client birthdays
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#smsTemplates">
                                                        <div class="accordion-body">

                                                            <form action="#" class="row g-3 mb-3">

                                                                <div className="col-sm-2">
                                                                    <label for="inputName56" class="form-label">Template Name:</label>
                                                                    <input type="text" class="form-control" id="inputName56" />
                                                                </div>
                                                                <div class="col-sm-7">
                                                                    <label for="inputName5" class="form-label">SMS template for event:</label>
                                                                    <textarea id="inputName5" class="form-control" name="w3review" rows="4" cols="8"></textarea>
                                                                </div>
                                                                <div className="col-sm-3">
                                                                    <label for="#" class="form-label">Placeholders:</label>
                                                                    <div>
                                                                        [first_name], [last_name], [middle_name], [x_name],  [x_name],
                                                                        [x_name], [x_name], [x_name]
                                                                    </div>
                                                                </div>

                                                                <div class="text-center mb-3">
                                                                    <div class="d-flex justify-content-center">
                                                                        <button class="btn btn-primary me-2">Add</button>
                                                                        <button type="reset" class="btn btn-secondary">Reset</button>
                                                                    </div>
                                                                </div>

                                                            </form>
                                                            <div className="row mb-3">
                                                                <div className="col-sm-12">
                                                                    <table className="table table-striped table-bordered">
                                                                        <thead>
                                                                            <tr>
                                                                                <th scope="col">#</th>
                                                                                <th scope="col">Name</th>
                                                                                <th scope="col">Template</th>
                                                                                <th scope="col">Last Editor</th>
                                                                                <th scope="col">Last Edited</th>
                                                                                <th scope="col">Action</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>

                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="bordered-justified-balance" role="tabpanel" aria-labelledby="balance-tab">

                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}