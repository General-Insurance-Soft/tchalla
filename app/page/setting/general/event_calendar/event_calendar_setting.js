import React, { useState } from 'react'

export default function EventCalendarSetting() {

    return (
        <>
            <div style={{ marginTop: "10px" }} className="row">
                {/* event config  */}
                <div className="col-xl-6">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="tc-card-header">Event Setup</h6>
                            <hr />

                            <form>
                                <div className="row mb-3">
                                    <label htmlFor="inputText" className="col-sm-2 col-form-label">Name</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Description</label>
                                    <div className="col-sm-10">
                                        <textarea className="form-control" rows="3"></textarea>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="inputDate" className="col-sm-2 col-form-label">Start date:</label>
                                    <div className="col-sm-4">
                                        <input type="date" className="form-control" />
                                    </div>

                                    <label htmlFor="inputTime" className="col-sm-2 col-form-label">Time:</label>
                                    <div className="col-sm-4">
                                        <input type="time" className="form-control" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="" className="col-sm-2 col-form-label">End date:</label>
                                    <div className="col-sm-4">
                                        <input type="date" className="form-control" />
                                    </div>

                                    <label htmlFor="inputTime" className="col-sm-2 col-form-label">Time:</label>
                                    <div className="col-sm-4">
                                        <input type="time" className="form-control" />
                                    </div>
                                </div>

                                <div className="row mb-3">


                                    <label htmlFor="" className="col-sm-2 col-form-label">No End:</label>
                                    <div className="col-sm-4">
                                        <input className="form-check-input" type="checkbox" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label className="col-sm-2 col-form-label">Repeat:</label>
                                    <div className="col-sm-10">
                                        <div className="row">
                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" />
                                                <label className="form-check-label" htmlFor="gridRadios1">
                                                    Yearly
                                                </label>
                                            </div>
                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" />
                                                <label className="form-check-label" htmlFor="gridRadios2">
                                                    Monthly
                                                </label>
                                            </div>
                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" />
                                                <label className="form-check-label" htmlFor="gridRadios3">
                                                    Weekly
                                                </label>
                                            </div>
                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios4" />
                                                <label className="form-check-label" htmlFor="gridRadios4">
                                                    Daily
                                                </label>
                                            </div>
                                        </div>

                                        {/* Additional Options */}
                                        <div className="row">
                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios5" />
                                                <label className="form-check-label" htmlFor="gridRadios5">
                                                    Hourly
                                                </label>
                                            </div>
                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios6" />
                                                <label className="form-check-label" htmlFor="gridRadios6">
                                                    Minutely
                                                </label>
                                            </div>
                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios7" />
                                                <label className="form-check-label" htmlFor="gridRadios7">
                                                    Secondly
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Interval:</label>
                                    <div className="col-sm-10">
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputCount" className="col-sm-2 col-form-label">Count:</label>
                                    <div className="col-sm-10">
                                        <input type="number" className="form-control" />
                                    </div>
                                </div>

                                {/* Week Days */}
                                <div className="row mb-3">
                                    <label className="col-sm-2 col-form-label">Months:</label>
                                    <div className="col-sm-10">
                                        <div className="row">
                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                                <label className="form-check-label" htmlFor="gridCheck1">Jan</label>
                                            </div>
                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck2" />
                                                <label className="form-check-label" htmlFor="gridCheck2">Feb</label>
                                            </div>
                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck3" />
                                                <label className="form-check-label" htmlFor="gridCheck3">March</label>
                                            </div>
                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck4" />
                                                <label className="form-check-label" htmlFor="gridCheck4">Apr</label>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck5" />
                                                <label className="form-check-label" htmlFor="gridCheck5">May</label>
                                            </div>
                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck6" />
                                                <label className="form-check-label" htmlFor="gridCheck6">June</label>
                                            </div>
                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck7" />
                                                <label className="form-check-label" htmlFor="gridCheck7">July</label>
                                            </div>
                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck8" />
                                                <label className="form-check-label" htmlFor="gridCheck8">August</label>
                                            </div>


                                        </div>

                                        <div className="row">

                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck9" />
                                                <label className="form-check-label" htmlFor="gridCheck9">September</label>
                                            </div>
                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck10" />
                                                <label className="form-check-label" htmlFor="gridCheck10">October</label>
                                            </div>
                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck11" />
                                                <label className="form-check-label" htmlFor="gridCheck11">November</label>
                                            </div>
                                            <div className="col-sm-3 form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck12" />
                                                <label className="form-check-label" htmlFor="gridCheck12">December</label>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <hr />
                                <div class="text-center mb-3">
                                    <div class="d-flex justify-content-center">
                                        <button class="btn btn-primary me-2">Add</button>
                                        <button class="btn btn-secondary">Reset</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Event List */}
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="tc-card-header">Event Lists</h6>
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
                                    <tr>
                                        <th>1</th>
                                        <td>Company anniversary</td>
                                        <td>Thank customers for being loyal to us this anniversary</td>
                                        <td>Every 2 weeks on Friday for 6 times - interval: 2, freq: RRule.WEEKLY, byweekday: [RRule.FR], count: 6</td>
                                        <td>Tom</td>
                                        <td>2024-11-01</td>
                                        <td>
                                            <div className="d-flex">
                                                <button type="button" className="btn btn-primary me-2">Edit</button>
                                                <button type="button" className="btn btn-secondary">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                    <tr>
                                        <th>1</th>
                                        <td>Company Awards</td>
                                        <td>Thank customers for being loyal to us this awards day</td>
                                        <td>Every 2 weeks on Friday for 6 times - interval: 2, freq: RRule.WEEKLY, byweekday: [RRule.FR], count: 6</td>
                                        <td>Audrey</td>
                                        <td>2024-11-01</td>
                                        <td>
                                            <div className="d-flex">
                                                <button type="button" className="btn btn-primary me-2">Edit</button>
                                                <button type="button" className="btn btn-secondary">Delete</button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>1</th>
                                        <td>Mashujaa day</td>
                                        <td>Thank customers for being loyal to this mashujaa day</td>
                                        <td>Every 2 weeks on Friday for 6 times - interval: 2, freq: RRule.WEEKLY, byweekday: [RRule.FR], count: 6</td>
                                        <td>Agnes</td>
                                        <td>2024-11-01</td>
                                        <td>
                                            <div className="d-flex">
                                                <button type="button" className="btn btn-primary me-2">Edit</button>
                                                <button type="button" className="btn btn-secondary">Delete</button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>1</th>
                                        <td>Christmas</td>
                                        <td>Thank customers for being loyal to Christmas</td>
                                        <td>Every 2 weeks on Friday for 6 times - interval: 2, freq: RRule.WEEKLY, byweekday: [RRule.FR], count: 6</td>
                                        <td>Kim</td>
                                        <td>2024-11-01</td>
                                        <td>
                                            <div className="d-flex">
                                                <button type="button" className="btn btn-primary me-2">Edit</button>
                                                <button type="button" className="btn btn-secondary">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
