
export default function DeleteRole() {

    return (

        <div className="modal fade" id="deleteRoleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deleteRoleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" >
                            Delete Role
                        </h1>

                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete Admin role?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary">Yes</button>
                    </div>
                </div>
            </div>
        </div>

    );
}