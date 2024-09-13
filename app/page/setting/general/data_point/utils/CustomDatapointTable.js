import React from 'react';
import EditAddPane from './EditAddDataPointPane';
import { useEffect, useState } from 'react';

export default function CustomDataPointTable(tableData) {

    const [dataPoint, setdataPoint] = useState();
    const [action, setAction] = useState();
    const [dataPointType, setDataPointType] = useState();
    const [optionList, setOptionList] = useState([]);

    useEffect(() => { }, [dataPoint, action, dataPointType, optionList]);

    console.log("Data passed Table");
    console.log(tableData.tableData);
    console.log(tableData.tableData !== undefined)

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Custom Datapoints</h5>
                    <button type="button" style={{ marginBottom: "4px" }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editAddPane">Add New Data Point</button>

                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Last Editor</th>
                                <th scope="col">Last Edited</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                (tableData.tableData !== undefined)

                                &&

                                tableData.tableData.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{data.name}</td>
                                            <td>{data.type}</td>
                                            <td>{data.editor}</td>
                                            <td>{data.edited}</td>
                                            <td>
                                                <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" data-bs-toggle="modal"
                                                    data-bs-target="#editAddPane"
                                                    onClick={() => {
                                                        setAction("Edit");
                                                        setdataPoint(data.name);
                                                        setDataPointType(data.type);
                                                        setOptionList(data.options);
                                                    }}
                                                ><i className="bi bi-pencil-square"></i></button>
                                                <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <EditAddPane dataPoint={dataPoint} action={action} dataPointType={dataPointType} optionList={optionList} />
        </>
    );
}