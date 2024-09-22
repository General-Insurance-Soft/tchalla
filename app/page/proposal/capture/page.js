import DataPointModal from "../../../lib/utils/data_point_modal";

export default function Page() {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Capture Proposal Details</h5>

                <button type="button" style={{ marginBottom: "4px" }} className="btn btn-primary mb-3" data-bs-toggle="modal"
                    data-bs-target="#paneId">Add new field</button>

                <form className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Search customer" />
                    </div>

                    <div className="col-md-6">
                        <select id="inputState" className="form-select">
                            <option defaultValue>Select insurance...</option>
                            <option>Britam</option>
                            <option>Old mutual</option>
                            <option>Jubilee</option>
                            <option>CIC</option>
                        </select>
                    </div>

                    <div className="col-md-2">
                        <label for="img">Select Scanned copies:</label>
                    </div>
                    <div className="col-md-5">
                        <input type="file" id="img" name="img" accept="image/*" className="form-control" />
                    </div>
                    <div className="col-md-5">
                        <input type="text" className="form-control" placeholder="Scanned copy name" />
                    </div>

                    <div className="text-center mb-3">
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary me-2">Save</button>
                            <button className="btn btn-secondary">Cancel</button>
                        </div>
                    </div>
                    <hr />
                </form>

                {/* Modal */}
                <DataPointModal />

            </div>
        </div>
    );
}