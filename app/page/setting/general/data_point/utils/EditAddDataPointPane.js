import React from 'react';
import { useEffect, useState } from 'react';
import DataPointOptionList from './DataPointOptionList';

export default function EditAddPane({ action, dataPoint, dataPointType, optionList }) {

    const [dataPointType_, setDataPointType_] = useState(dataPointType);

    useEffect(() => {
        setDataPointType_(dataPointType);
    }, [dataPointType]);

    console.log("Rerendering EditAddPane " + dataPointType_ + " done" + "other value " + dataPointType);

    let dataTypeNames = [
        "String/Word",
        "Multiple select",
        "Number",
        "List",
        "Date",
        "Choice"
    ];

    let dataTypeOptions = dataTypeNames.map((item, index) => {
        return (
            (dataPointType_ == item) ?
                <option key={index} value={item} selected>{item}</option> :
                <option key={index} value={item}>{item}</option>
        )
    });

    return (
        <div className="modal fade" id="editAddPane" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title"> {action} {dataPoint}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <form className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" defaultValue={dataPoint} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputState" className="form-label">Type</label>
                                <select on id="inputState" className="form-select"
                                    onChange={(e) => {
                                        setDataPointType_([e.target.value]);

                                    }}
                                >
                                    {dataTypeOptions}
                                </select>
                            </div>
                        </form>

                        {dataPointType_ == "List" && <DataPointOptionList optionList={optionList} />}
                        {dataPointType_ == "Choice" && <DataPointOptionList optionList={optionList} />}
                        {dataPointType_ == "Multiple select" && <DataPointOptionList optionList={optionList} />}

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    );

}