export default function ClaimSetting() {

    return (
        <div style={{ marginTop: "10px" }} className="row">

            {/* Notofication setting */}
            <div className="col-xl-6">
                <div class="card">
                    <div class="card-body">
                        <h6 class="tc-card-header">Notifications</h6>
                        <hr />
                        <div className="row mb-3">
                            <form>
                                <div class="row mb-3">
                                    <label for="firstAlert" class="col-sm-9 col-form-label">Remind me via SMS claims longer than this number of days:</label>
                                    <div class="col-sm-3">
                                        <input type="text" class="form-control" id="firstAlert" />
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
                        <h6 class="tc-card-header">Storage</h6>
                        <hr />
                        <form>
                            <div class="row mb-3">
                                <label for="#" class="col-sm-9 col-form-label">Number of days to store attached claim files:</label>
                                <div class="col-sm-3">
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
            {/* end storage settings */}
        </div>
    );
}
