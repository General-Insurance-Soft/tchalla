import { useEffect } from "react";

export default function DataPointOptionList(optionList) {

    return (
        <div style={{ marginTop: "10px" }} className="card">
            <div className="card-body">
                <h5 className="card-title">Option List</h5>

                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            optionList.optionList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index}</th>
                                        <td>{item}</td>
                                        <td>
                                            <button type="button" style={{ marginRight: "10px" }} className="btn btn-info"><i className="bi bi-pencil-square"></i></button>
                                            <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                        </td>

                                    </tr>
                                )
                            })

                        }

                    </tbody>
                </table>

            </div>
        </div>
    )
}
