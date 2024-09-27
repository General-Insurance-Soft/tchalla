'use client'

import { DataTable } from "simple-datatables";
import "./dt-style.css";
import { useEffect, useState } from "react";

export default function Data_Table({ table_content, tableId }) {

    let tableEl = tableId || "tableEl";

    useEffect(() => {
        let tbl = new DataTable(`#${tableEl}`);
    }, []);

    return (
        <>
            {
                table_content ?

                    <></>
                    :

                    <table key="key1" id='tableEl' className="table table-borderless datatable">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"><a href="#">#2457</a></th>
                                <td>Brandon Jacob</td>
                                <td><a href="#" className="text-primary">Vehicle - Comprehensive</a></td>
                                <td>$64</td>
                                <td><span className="badge bg-success">Completed</span></td>
                            </tr>
                            <tr>
                                <th scope="row"><a href="#">#2147</a></th>
                                <td>Bridie Kessler</td>
                                <td><a href="#" className="text-primary">Fire/burglary</a></td>
                                <td>$47</td>
                                <td><span className="badge bg-warning">Inclomplete</span></td>
                            </tr>
                            <tr>
                                <th scope="row"><a href="#">#2049</a></th>
                                <td>Ashleigh Langosh</td>
                                <td><a href="#" className="text-primary">Vehicle - Third Party</a></td>
                                <td>$147</td>
                                <td><span className="badge bg-success">Approved</span></td>
                            </tr>
                            <tr>
                                <th scope="row"><a href="#">#2644</a></th>
                                <td>Angus Grady</td>
                                <td><a href="#" className="text-primar">Life Insurance</a></td>
                                <td>$67</td>
                                <td><span className="badge bg-danger">Cancelled</span></td>
                            </tr>
                            <tr>
                                <th scope="row"><a href="#">#2644</a></th>
                                <td>Raheem Lehner</td>
                                <td><a href="#" className="text-primary">House Insurance</a></td>
                                <td>$165</td>
                                <td><span className="badge bg-success">Completed</span></td>
                            </tr>
                        </tbody>
                    </table>
            }
        </>
    );
}