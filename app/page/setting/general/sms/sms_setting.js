export default function SmsSetting() {

    return (
        <>
            <div style={{ marginTop: "10px" }} className="row">

                {/* Notofication setting */}
                <div className="col-xl-6">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="tc-card-header">SMS</h6>
                            <hr />
                            <div className="row mb-3">
                                <form>
                                    <div className="row mb-3">
                                        <label htmlFor="firstAlert" className="col-sm-7 col-form-label">Specific days not to send SMS:</label>
                                        <div className="col-sm-5">
                                            <input type="text" className="form-control" id="firstAlert" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="subsequentAlert" className="col-sm-7 col-form-label">Time of day to send SMS:</label>
                                        <div className="col-sm-5">
                                            From:
                                            <input type="text" className="form-control" id="subsequentAlert" />
                                            To:
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="maxAlert" className="col-sm-7 col-form-label">Send SMS on special events?</label>
                                        <div className="col-sm-5">
                                            <input className="form-check-input" type="checkbox" id="checkSMS1" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="maxAlert" className="col-sm-7 col-form-label">Special calender days/events not to send SMS:</label>
                                        <div className="col-sm-5">
                                            <input type="text" className="form-control" id="maxAlert" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="maxAlert" className="col-sm-7 col-form-label">Send happy birthday SMS to clients?</label>
                                        <div className="col-sm-5">
                                            <input className="form-check-input" type="checkbox" id="checkSMS" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="maxAlert" className="col-sm-7 col-form-label">Send policy expire SMS to clients?</label>
                                        <div className="col-sm-5">
                                            <input className="form-check-input" type="checkbox" id="checkPolicyExpire" />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label htmlFor="maxAlert" className="col-sm-7 col-form-label">Remind me via SMS when credits are below this level?</label>
                                        <div className="col-sm-5">
                                            <input className="form-check-input" type="checkbox" id="checkSMS" />
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
                    <div className="card">
                        <div className="card-body">
                            <h6 className="tc-card-header">Storage</h6>
                            <hr />
                            <form>
                                <div className="row mb-3">
                                    <label htmlFor="#" className="col-sm-7 col-form-label">Number of days to store sent SMS:</label>
                                    <div className="col-sm-5">
                                        <input style={{ marginBottom: "5px" }} type="text" className="form-control" id="fileStoegaeLength" />
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="checkEmail" />
                                            <label className="form-check-label" htmlFor="gridRadios3">
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
