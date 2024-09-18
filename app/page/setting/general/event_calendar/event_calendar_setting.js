import React, { useState } from 'react'

export default function EventCalendarSetting() {

    return (
        <>
            <div style={{ marginTop: "10px" }} className="row">
                {/* event config  */}

                <div className="col-xl-8">
                    <div class="card">
                        <div class="card-body">
                            <h6 class="tc-card-header">Event Setup</h6>
                            <hr />



                        </div>
                    </div>
                </div>

            </div>
            {/* end event config */}

            {/* Event list */}
            <div style={{ marginTop: "10px" }} className="row">


                <div className="col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <h6 class="tc-card-header">Event Lists</h6>
                            <hr />

                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Event</th>
                                        <th scope="col">Last Editor</th>
                                        <th scope="col">Last Edited</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr >
                                        <th>1</th>
                                        <td>Company aniversary</td>
                                        <td>Thank customers for being loyal to us this anniversary</td>
                                        <td>Every 2 weeks on Friday for 6 times - interval: 2,
                                            freq: RRule.WEEKLY,
                                            byweekday: [RRule.FR],
                                            count: 6</td>
                                        <td>Tom</td>
                                        <td>2024-11-01</td>
                                        <td>
                                            <div class="d-flex">
                                                <button type="button" class="btn btn-primary me-2">Edit</button>
                                                <button type="button" class="btn btn-secondary">Delete</button>
                                            </div>
                                        </td>
                                    </tr>


                                    <tr >
                                        <th>1</th>
                                        <td>Company awards</td>
                                        <td>Thank customers for being loyal to us this awards</td>
                                        <td>Every 2 weeks on Friday for 6 times - interval: 2,
                                            freq: RRule.WEEKLY,
                                            byweekday: [RRule.FR],
                                            count: 6</td>
                                        <td>Tom</td>
                                        <td>2024-11-01</td>
                                        <td>
                                            <div class="d-flex">
                                                <button type="button" class="btn btn-primary me-2">Edit</button>
                                                <button type="button" class="btn btn-secondary">Delete</button>
                                            </div>
                                        </td>
                                    </tr>


                                    <tr >
                                        <th>1</th>
                                        <td>Mashujaa day</td>
                                        <td>Thank customers for being loyal to us this mashujaa</td>
                                        <td>Every 2 weeks on Friday for 6 times - interval: 2,
                                            freq: RRule.WEEKLY,
                                            byweekday: [RRule.FR],
                                            count: 6</td>
                                        <td>Tom</td>
                                        <td>2024-11-01</td>
                                        <td>
                                            <div class="d-flex">
                                                <button type="button" class="btn btn-primary me-2">Edit</button>
                                                <button type="button" class="btn btn-secondary">Delete</button>
                                            </div>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                {/* end Event list */}
            </div>
        </>


    );
}