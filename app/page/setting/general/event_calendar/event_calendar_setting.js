import React, { useState } from 'react'

export default function EventCalendarSetting() {

    return (
        <>
            <div style={{ marginTop: "10px" }} className="row">
                {/* event config  */}

                <div className="col-xl-6">
                    <div class="card">
                        <div class="card-body">
                            <h6 class="tc-card-header">Event Setup</h6>
                            <hr />

                            <form>
                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-2 col-form-label">Name</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputEmail" class="col-sm-2 col-form-label">Description</label>
                                    <div class="col-sm-10">
                                        <textarea class="form-control" rows="3"></textarea>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputDate" class="col-sm-2 col-form-label">Start date:</label>
                                    <div class="col-sm-4">
                                        <input type="date" class="form-control" />
                                    </div>

                                    <label for="inputDate" class="col-sm-2 col-form-label">Time:</label>
                                    <div class="col-sm-4">
                                        <input type="time" class="form-control" />
                                    </div>

                                </div>

                                <div class="row mb-3">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Reeat</label>
                                    <div class="col-sm-10">
                                        <div className="row">
                                            <div class="col-sm-3 form-check">
                                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" />
                                                <label class="form-check-label" for="gridRadios1">
                                                    Yearly
                                                </label>
                                            </div>
                                            <div class="col-sm-3 form-check">
                                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" />
                                                <label class="form-check-label" for="gridRadios2">
                                                    Montly
                                                </label>
                                            </div>
                                            <div class="col-sm-3 form-check">
                                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" />
                                                <label class="form-check-label" for="gridRadios3">
                                                    weekly
                                                </label>
                                            </div><div class="col-sm-3 form-check">
                                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios4" />
                                                <label class="form-check-label" for="gridRadios4">
                                                    Daily
                                                </label>
                                            </div>
                                        </div>

                                        {/* ------ */}
                                        <div className="row">
                                            <div class="col-sm-3 form-check">
                                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios5" />
                                                <label class="form-check-label" for="gridRadios5">
                                                    Houhly
                                                </label>
                                            </div>
                                            <div class="col-sm-3 form-check">
                                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios6" />
                                                <label class="form-check-label" for="gridRadios6">
                                                    Minutely
                                                </label>
                                            </div>
                                            <div class="col-sm-3 form-check">
                                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios7" />
                                                <label class="form-check-label" for="gridRadios7">
                                                    Secondly
                                                </label>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputNumber" class="col-sm-2 col-form-label">Number</label>
                                    <div class="col-sm-10">
                                        <input type="number" class="form-control" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputNumber" class="col-sm-2 col-form-label">File Upload</label>
                                    <div class="col-sm-10">
                                        <input class="form-control" type="file" id="formFile" />
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputTime" class="col-sm-2 col-form-label">Time</label>
                                    <div class="col-sm-10">
                                        <input type="time" class="form-control" />
                                    </div>
                                </div>
                            </form>

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