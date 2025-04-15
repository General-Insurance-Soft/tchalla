export default function ClaimSetting() {

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
                                    <label htmlFor="firstAlert" className="col-sm-9 col-form-label">Remind me via SMS claims longer than this number of days:</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" id="firstAlert" />
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
                                <label htmlFor="#" className="col-sm-9 col-form-label">Number of days to store attached claim files:</label>
                                <div className="col-sm-3">
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
            {/* end storage settings */}
        </div>
    );
}
