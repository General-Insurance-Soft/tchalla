export default function PolicySetting() {
    let cardHeaderStyle = {
        color: "blue",
    }

    return (
        <div style={{ marginTop: "10px" }} className="row">

            {/* Notofication setting */}
            <div className="col-xl-6">
                <div class="card">
                    <div class="card-body">
                        <h6 style={cardHeaderStyle} class="card-title/">Notifications</h6>
                        <hr />
                        <div className="row mb-3">
                            <form>
                                <div class="row mb-3">
                                    <label for="firstAlert" class="col-sm-9 col-form-label">Number Of days before sending first alert:</label>
                                    <div class="col-sm-3">
                                        <input type="text" class="form-control" id="firstAlert" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="subsequentAlert" class="col-sm-9 col-form-label">Number of days between subsequent reminders:</label>
                                    <div class="col-sm-3">
                                        <input type="text" class="form-control" id="subsequentAlert" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="maxAlert" class="col-sm-9 col-form-label">Maximum number of alerts:</label>
                                    <div class="col-sm-3">
                                        <input type="text" class="form-control" id="maxAlert" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="#" class="col-sm-9 col-form-label">Mode of alerts:</label>
                                    <div class="col-sm-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="checkSMS" />
                                            <label class="form-check-label" for="gridRadios2">
                                                SMS
                                            </label>
                                        </div>
                                        <div class="form-check disabled">
                                            <input class="form-check-input" type="checkbox" id="checkEmail" />
                                            <label class="form-check-label" for="gridRadios3">
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
                <div class="card">
                    <div class="card-body">
                        <h6 style={cardHeaderStyle} class="card-title/">Storage</h6>
                        <hr />
                        <form>
                            <div class="row mb-3">
                                <label for="#" class="col-sm-9 col-form-label">Number of days to store policy files:</label>
                                <div class="col-sm-3">
                                    <input style={{marginBottom: "5px"}} type="text" class="form-control" id="fileStoegaeLength" />
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
            {/* end storage settings */}
        </div>
    );
}
