export default function SmsSetting() {

    return (
        <>
            <div style={{ marginTop: "10px" }} className="row">

                {/* Notofication setting */}
                <div className="col-xl-6">
                    <div class="card">
                        <div class="card-body">
                            <h6 class="tc-card-header">SMS</h6>
                            <hr />
                            <div className="row mb-3">
                                <form>
                                    <div class="row mb-3">
                                        <label for="firstAlert" class="col-sm-7 col-form-label">Specific days not to send SMS:</label>
                                        <div class="col-sm-5">
                                            <input type="text" class="form-control" id="firstAlert" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="subsequentAlert" class="col-sm-7 col-form-label">Time of day to send SMS:</label>
                                        <div class="col-sm-5">
                                            From:
                                            <input type="text" class="form-control" id="subsequentAlert" />
                                            To:
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="maxAlert" class="col-sm-7 col-form-label">Send SMS on special events?</label>
                                        <div class="col-sm-5">
                                            <input class="form-check-input" type="checkbox" id="checkSMS" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="maxAlert" class="col-sm-7 col-form-label">Special calender days/events not to send SMS:</label>
                                        <div class="col-sm-5">
                                            <input type="text" class="form-control" id="maxAlert" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="maxAlert" class="col-sm-7 col-form-label">Send happy birthdya SMS to clients?</label>
                                        <div class="col-sm-5">
                                            <input class="form-check-input" type="checkbox" id="checkSMS" />
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="maxAlert" class="col-sm-7 col-form-label">Remind me via SMS when credits are below this level?</label>
                                        <div class="col-sm-5">
                                            <input class="form-check-input" type="checkbox" id="checkSMS" />
                                        </div>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                {/* end notification setting */}


                {/* SMS Storage settings */}


                <div className="col-xl-6">
                    <div class="card">
                        <div class="card-body">
                            <h6 class="tc-card-header">Storage</h6>
                            <hr />
                            <form>
                                <div class="row mb-3">
                                    <label for="#" class="col-sm-7 col-form-label">Number of days to store sent SMS:</label>
                                    <div class="col-sm-5">
                                        <input style={{ marginBottom: "5px" }} type="text" class="form-control" id="fileStoegaeLength" />
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="checkEmail" />
                                            <label class="form-check-label" for="gridRadios3">
                                                Indefinite
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

                {/* End Storage settings*/}

            </div>

            {/* SMS Template settings */}
            <div style={{ marginTop: "10px" }} className="row">
                <div class="card">
                    <div class="card-body">
                        <h6 class="tc-card-header">SMS Template</h6>
                        <hr />

                        <div class="accordion" id="smsTemplates">


                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        SMS template for special days/events
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#smsTemplates">
                                    <div class="accordion-body">

                                        <form  class="row g-3">

                                            <div className="col-sm-2">
                                                <label for="inputName56" class="form-label">Template Name:</label>
                                                <input type="text" class="form-control" id="inputName56" />
                                            </div>
                                            <div class="col-sm-7">
                                                <label for="inputName5" class="form-label">SMS template birthdays day:</label>
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
                                                <label for="inputName5" class="form-label">SMS template for special day:</label>
                                                <textarea id="inputName5" class="form-control" name="w3review" rows="4" cols="8"></textarea>
                                            </div>
                                            <div className="col-sm-3">
                                                <label for="#" class="form-label">Placeholders:</label>
                                                <div>
                                                    [first_name], [last_name], [middle_name], [x_name],  [x_name],
                                                    [x_name], [x_name], [x_name]
                                                </div>
                                            </div>

                                            <div class="text-center">
                                                <button class="btn btn-primary">Add</button>
                                                <button type="reset" class="btn btn-secondary">Reset</button>
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
                {/* End SMS Template settings */}
            </div>
        </>

    );
}
