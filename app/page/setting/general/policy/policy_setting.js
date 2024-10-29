export default function PolicySetting() {


    return (
        <div style={{ marginTop: "10px" }} className="row">

            {/* Notofication setting */}
            <div className="col-xl-6">
                <div className="card">
                    <div className="card-body">
                        <h6 className="tc-card-header">Notifications</h6>
                        <hr />
                        <div className="row mb-3">
                            <form>

                                <div className="row mb-3">
                                    <label for="#" className="col-sm-9 col-form-label">Send policy expiry reminders? </label>
                                    <div className="col-sm-3">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="firstAlert" className="col-sm-9 col-form-label">Number Of days before sending first alert:</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" id="firstAlert" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="subsequentAlert" className="col-sm-9 col-form-label">Number of days between subsequent reminders:</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" id="subsequentAlert" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="maxAlert" className="col-sm-9 col-form-label">Maximum number of alerts:</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" id="maxAlert" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="#" className="col-sm-9 col-form-label">Mode of alerts:</label>
                                    <div className="col-sm-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="checkSMS" />
                                            <label className="form-check-label" for="gridRadios2">
                                                SMS
                                            </label>
                                        </div>
                                        <div className="form-check disabled">
                                            <input className="form-check-input" type="checkbox" id="checkEmail" />
                                            <label className="form-check-label" for="gridRadios3">
                                                Email
                                            </label>
                                        </div>

                                    </div>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
            {/* end notification setting */}

            {/* Storage settings */}

            <div className="col-xl-6">
                <div className="card">
                    <div className="card-body">
                        <h6 className="tc-card-header">Storage</h6>
                        <hr />
                        <form>
                            <div className="row mb-3">
                                <label for="#" className="col-sm-9 col-form-label">Number of days to store attached policy files:</label>
                                <div className="col-sm-3">
                                    <input style={{ marginBottom: "5px" }} type="text" className="form-control" id="fileStoegaeLength" />
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="checkEmail" />
                                        <label className="form-check-label" for="gridRadios3">
                                            Indefinite
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* end storage settings */}
        </div>
    );
}
