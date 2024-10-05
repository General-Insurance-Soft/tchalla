import Data_Table from '../../../lib/components/table/data-table';
import BulkSmsTblContent from './bulk-sms-tbl-content';

export default function Page() {
    return (
        <>
            <div className="pagetitle">
                <h1>CRM</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="index.html">CRM</a></li>
                        <li className="breadcrumb-item active">SMS</li>
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
                                    <button className="nav-link w-100" id="sms-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-sms" type="button" role="tab" aria-controls="sma" aria-selected="false">SMS Templates</button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-balance" type="button" role="tab" aria-controls="balance" aria-selected="false">SMS balance </button>
                                </li>


                            </ul>
                            <div className="tab-content pt-2" id="borderedTabJustifiedContent">
                                <div className="tab-pane fade show active" id="bordered-justified-bulk" role="tabpanel" aria-labelledby="bulk-tab">
                                    {/* bulk sms */}


                                    <div className="card">
                                        <div className="card-body">
                                            {/* <h5 className="card-title">Capture policy Details</h5> */}

                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>

                                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bulkSMSModal">
                                                        New Bulk SMS
                                                    </button>
                                                </div>
                                                <div>
                                                    {/* <button className="btn btn-primary me-2">Save</button> */}
                                                    {/* <button className="btn btn-secondary">Cancel</button> */}
                                                </div>
                                            </div>
                                            <hr />
                                            <h5 className="card-title">Recent bulk SMS</h5>
                                            <Data_Table table_content={BulkSmsTblContent} />
                                        </div>
                                    </div>

                                </div>

                                {/* schedule sms */}
                                <div className="tab-pane fade" id="bordered-justified-schedule" role="tabpanel" aria-labelledby="schedule-tab">


                                    {/*  New schedule */}

                                    <ul className="nav nav-underline " id="borderedTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="schedule-tab" data-bs-toggle="tab" data-bs-target="#bordered-schedule" type="button" role="tab" aria-controls="schedule" aria-selected="true">New Schedule</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="schedule_list-tab" data-bs-toggle="tab" data-bs-target="#bordered-schedule_list" type="button" role="tab" aria-controls="schedule_list" aria-selected="false">Schedule List</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content pt-2" id="borderedTabContent">
                                        <div className="tab-pane fade show active" id="bordered-schedule" role="tabpanel" aria-labelledby="schedule-tab">


                                            <div className="col-xl-8">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h6 className="tc-card-header">Create scheduled SMS</h6>
                                                        <hr />

                                                        <form>
                                                            <div className="row mb-3">
                                                                <label htmlFor="inputText" className="col-sm-2 col-form-label">Schdule Name</label>
                                                                <div className="col-sm-10">
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="row mb-3">
                                                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Description</label>
                                                                <div className="col-sm-10">
                                                                    <textarea className="form-control" rows="3"></textarea>
                                                                </div>
                                                            </div>

                                                            <div className="row mb-3">
                                                                <label htmlFor="inputDate" className="col-sm-2 col-form-label">Start date:</label>
                                                                <div className="col-sm-4">
                                                                    <input type="date" className="form-control" />
                                                                </div>

                                                                <label htmlFor="inputTime" className="col-sm-2 col-form-label">Time:</label>
                                                                <div className="col-sm-4">
                                                                    <input type="time" className="form-control" />
                                                                </div>
                                                            </div>

                                                            <div className="row mb-3">
                                                                <label htmlFor="" className="col-sm-2 col-form-label">End date:</label>
                                                                <div className="col-sm-4">
                                                                    <input type="date" className="form-control" />
                                                                </div>

                                                                <label htmlFor="inputTime" className="col-sm-2 col-form-label">Time:</label>
                                                                <div className="col-sm-4">
                                                                    <input type="time" className="form-control" />
                                                                </div>
                                                            </div>

                                                            <div className="row mb-3">

                                                                <label htmlFor="" className="col-sm-2 col-form-label">No End:</label>
                                                                <div className="col-sm-4">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                </div>
                                                            </div>

                                                            <div className="row mb-3">
                                                                <div className="col-sm-6">
                                                                    <label for="inputName5" className="form-label">SMS template for event:</label>
                                                                    <textarea id="inputName5" className="form-control" name="w3review" rows="4" cols="8"></textarea>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <label for="#" className="form-label">Placeholders:</label>
                                                                    <div>
                                                                        [first_name], [last_name], [middle_name], [x_name],  [x_name],
                                                                        [x_name], [x_name], [x_name]
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className='col-sm-6'>
                                                                    <div class="d-flex align-items-center">
                                                                        <label for="inputName5" class="form-label me-2">Contact group:</label>
                                                                        <select id="inputState" class="form-select">
                                                                            <option value="1">Car Third party group</option>
                                                                            <option value="2">Life insurance group</option>
                                                                            <option value="3">Health insutance group</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className='col-sm-6'>
                                                                    or: <button className="btn btn-primary">choose contact(s)</button>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className="text-center mb-3">
                                                                <div className="d-flex justify-content-center">
                                                                    <button className="btn btn-primary me-2">Add</button>
                                                                    <button className="btn btn-secondary">Reset</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end new schedule */}


                                        </div>
                                        <div className="tab-pane fade" id="bordered-schedule_list" role="tabpanel" aria-labelledby="schedule_list-tab">
                                            Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. Accusantium distinctio omnis et atque fugiat. Itaque doloremque aliquid sint quasi quia distinctio similique. Voluptate nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta.
                                        </div>
                                    </div>


                                </div>
                                {/* end schedule SMS */}


                                <div className="tab-pane fade" id="bordered-justified-sms" role="tabpanel" aria-labelledby="sms-tab">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6 className="tc-card-header">SMS Template</h6>
                                            <hr />

                                            <div className="accordion" id="smsTemplates">


                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <h5>SMS template for events</h5>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#smsTemplates">
                                                        <div className="accordion-body">

                                                            <form className="row g-3">

                                                                <div className="col-sm-6">
                                                                    <label for="inputName56" className="form-label">Template Name:</label>
                                                                    <input type="text" className="form-control" id="inputName56" />
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <label for="inputState" className="form-label">Select Event:</label>
                                                                    <select id="inputState" className="form-select">
                                                                        {/* <option defaultValue>Gender...</option> */}
                                                                        <option>Company anniversary</option>
                                                                        <option>Company Awards</option>
                                                                        <option>Mashujaa day</option>
                                                                        <option>Christmas</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <label for="inputName5" className="form-label">SMS template for event:</label>
                                                                    <textarea id="inputName5" className="form-control" name="w3review" rows="4" cols="8"></textarea>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <label for="#" className="form-label">Placeholders:</label>
                                                                    <div>
                                                                        [first_name], [last_name], [middle_name], [x_name],  [x_name],
                                                                        [x_name], [x_name], [x_name]
                                                                    </div>
                                                                </div>
                                                                <div className="text-center mb-3">
                                                                    <div className="d-flex justify-content-center">
                                                                        <button className="btn btn-primary me-2">Add</button>
                                                                        <button type="reset" className="btn btn-secondary">Reset</button>
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
                                                                                <th scope="col">Enable Sending SMS</th>
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

                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            <h5>SMS template for client birthdays</h5>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#smsTemplates">
                                                        <div className="accordion-body">

                                                            <form action="#" className="row g-3 mb-3">

                                                                <div className="col-sm-8">
                                                                    <label for="inputName5" className="form-label">SMS template birthdays day:</label>
                                                                    <textarea id="inputName5" className="form-control" name="w3review" rows="4" cols="8">
                                                                        Dear [first_name] [last_name], we wish you a happy birthday. May you have a great day and a wonderful year ahead.
                                                                    </textarea>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <label for="#" className="form-label">Placeholders:</label>
                                                                    <div>
                                                                        [first_name], [last_name], [middle_name], [x_name],  [x_name],
                                                                        [x_name], [x_name], [x_name] [policy_expiry_date]
                                                                    </div>
                                                                </div>

                                                                <div className="text-center mb-3">
                                                                    <div className="d-flex justify-content-center">
                                                                        <button className="btn btn-primary me-2">Update</button>
                                                                    </div>
                                                                </div>

                                                            </form>


                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            <h5>SMS template for policy renewal</h5>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#smsTemplates">
                                                        <div className="accordion-body">

                                                            <form action="#" className="row g-3 mb-3">


                                                                <div className="col-sm-8">
                                                                    <label for="inputName5" className="form-label">SMS template birthdays day:</label>
                                                                    <textarea id="inputName5" className="form-control" name="w3review" rows="4" cols="8">
                                                                        Dear [first_name], we wish to remind you that your policy is due for renewal on [policy_expiry_date]. Kindly visit our offices for more information.
                                                                    </textarea>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <label for="#" className="form-label">Placeholders:</label>
                                                                    <div>
                                                                        [first_name], [last_name], [middle_name], [x_name],  [x_name],
                                                                        [x_name], [x_name], [x_name] [policy_expiry_date]
                                                                    </div>
                                                                </div>

                                                                <div className="text-center mb-3">
                                                                    <div className="d-flex justify-content-center">
                                                                        <button className="btn btn-primary me-2">Update</button>

                                                                    </div>
                                                                </div>

                                                            </form>

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

            {/* bulk sms modal */}

            <div class="modal fade" id="bulkSMSModal" tabindex="-1" aria-labelledby="bulkSMSModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="bulkSMSModalLabel">New Bulk SMS</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <form>
                                <div className="row mb-3">
                                    <div className="col-sm-6">
                                        <label for="inputName5" className="form-label">SMS template:</label>
                                        <textarea id="inputName5" className="form-control" name="w3review" rows="4" cols="8"></textarea>
                                    </div>
                                    <div className="col-sm-6">
                                        <label for="#" className="form-label">Placeholders:</label>
                                        <div>
                                            [first_name], [last_name], [middle_name], [x_name],  [x_name],
                                            [x_name], [x_name], [x_name]
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='col-sm-6'>
                                        <div class="d-flex align-items-center">
                                            <label for="inputName5" class="form-label me-2">Contact group:</label>
                                            <select id="inputState" class="form-select">
                                                <option value="1">Car Third party group</option>
                                                <option value="2">Life insurance group</option>
                                                <option value="3">Health insutance group</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <span>or: </span> <button className="btn btn-info">choose contact(s)</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* end bulk sms modal */}
        </>
    );
}