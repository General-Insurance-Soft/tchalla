import React from 'react';
import EditAddPane from './EditAddDataPointPane';
import { useEffect, useState } from 'react';

export default function CustomDataPointTable() {

    const [dataPoint, setdataPoint] = useState();
    const [action, setAction] = useState();
    const [dataPointType, setDataPointType] = useState();
    const [optionList, setOptionList] = useState([]);

    useEffect(() => { }, [dataPoint, action, dataPointType, optionList]);

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Custom Datapoints</h5>

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
                            <tr>
                                <th scope="row">1</th>
                                <td>Status</td>
                                <td>List</td>
                                <td>Tom</td>
                                <td>2016-05-25</td>
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" data-bs-toggle="modal"
                                        data-bs-target="#editAddPane"
                                        onClick={() => {
                                            setAction("Edit");
                                            setdataPoint("Status");
                                            setDataPointType("Choice");
                                            setOptionList(["Single", "Married", "Divorced", "others"]);
                                        }}
                                    ><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Religion</td>
                                <td>List</td>
                                <td>Edward</td>
                                <td>2016-05-25</td>
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" data-bs-toggle="modal"
                                        data-bs-target="#editAddPane"
                                        onClick={() => {
                                            setAction("Edit");
                                            setdataPoint("Religion");
                                            setDataPointType("Choice");
                                            setOptionList(["Christianity", "Muslim", "Budhist", "Pagan", "Others"]);
                                        }}
                                    ><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Home Address</td>
                                <td>String/Word</td>
                                <td>Nancy</td>
                                <td>2016-05-25</td>
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" data-bs-toggle="modal"
                                        data-bs-target="#editAddPane"
                                        onClick={() => {
                                            setAction("Edit");
                                            setdataPoint("Home Address");
                                            setDataPointType("Word");
                                            setOptionList([]);
                                        }}
                                    ><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Dependants</td>
                                <td>Number</td>
                                <td>Edward</td>
                                <td>2016-05-25</td>
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" data-bs-toggle="modal"
                                        data-bs-target="#editAddPane"
                                        onClick={() => {
                                            setAction("Edit");
                                            setdataPoint("Dependants");
                                            setDataPointType("Number");
                                            setOptionList([]);
                                        }}
                                    ><i className="bi bi-pencil-square"></i></button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Race</td>
                                <td>List</td>
                                <td>Edward</td>
                                <td>2016-05-25</td>
                                <td>
                                    <button type="button" style={{ marginRight: "10px" }} className="btn btn-info" data-bs-toggle="modal"
                                        data-bs-target="#editAddPane"
                                        onClick={() => {
                                            setAction("Edit");
                                            setdataPoint("Choice");
                                            setDataPointType("Choice");
                                            setOptionList(["African", "White", "Black American", "Asian", "Others"]);
                                        }}>
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                    <button type="button" className="btn btn-danger"><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <EditAddPane dataPoint={dataPoint} action={action} dataPointType={dataPointType} optionList={optionList} />
        </>
    );
}