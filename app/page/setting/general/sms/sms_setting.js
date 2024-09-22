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
                                            <input class="form-check-input" type="checkbox" id="checkSMS1" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="maxAlert" class="col-sm-7 col-form-label">Special calender days/events not to send SMS:</label>
                                        <div class="col-sm-5">
                                            <input type="text" class="form-control" id="maxAlert" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="maxAlert" class="col-sm-7 col-form-label">Send happy birthday SMS to clients?</label>
                                        <div class="col-sm-5">
                                            <input class="form-check-input" type="checkbox" id="checkSMS" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="maxAlert" class="col-sm-7 col-form-label">Send policy expire SMS to clients?</label>
                                        <div class="col-sm-5">
                                            <input class="form-check-input" type="checkbox" id="checkPolicyExpire" />
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

        </>

    );
}
