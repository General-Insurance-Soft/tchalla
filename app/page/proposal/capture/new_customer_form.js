
export default function NewCustomerForm({ action }) {
    return (

        <form className="row g-3 mb-3">
            <div className="col-md-4">
                <label for="firstName">Enter first name:</label>
                {action === "add" ?
                    <input id="firstName" type="text" className="form-control" />
                    :
                    <input id="firstName" type="text" className="form-control" placeholder="Tom" />
                }

            </div>
            <div className="col-md-4">
                <label for="phone">Enter second name:</label>
                {action === "add" ?
                    <input id="secondName" type="text" className="form-control"  />
                    :
                    <input id="secondName" type="text" className="form-control" placeholder="Lopy" />
                }

            </div>
            <div className="col-md-4">
                <label for="thirdName">Enter third Name:</label>
                {action === "add" ?
                    <input for="thirdName" type="text" className="form-control"  />
                    :
                    <input for="thirdName" type="text" className="form-control" placeholder="Lee" />
                }

            </div>
            <div className="col-md-4">
                <label for="phone">Enter phone number:</label>
                {action === "add" ?
                    <input id="phone" key={1} type="text" className="form-control"  />
                    :
                    <input id="phone" key={2} type="text" className="form-control" placeholder="07200200200" />
                }
            </div>
            <div className="col-md-4">
                <label for="email">Enter email:</label>
                {action === "add" ?
                    <input id="email" type="email" className="form-control" />
                    :
                    <input id="email" type="email" className="form-control" placeholder="email@gmail.com" />
                }
            </div>
            <div className="col-md-4">
                <label for="Gender">Select Gender:</label>
                <select id="Gender" className="form-select">
                    {action === "add" ? [<option key={1} defaultValue>Gender...</option>, <option key={2}>Male</option>] : <option>Male</option>}
                    <option>Female</option>
                </select>
            </div>
            <div className="col-md-4">
                <label for="Address">Enter Address:</label>
                {action === "add" ?
                    <input id="Address" type="text" className="form-control" />
                    :
                    <input id="Address" type="text" className="form-control" placeholder="First avenue shababa" />
                }

            </div>
            <div className="col-md-4">
                <label for="Passport">Enter Id/Passport:</label>
                {action === "add" ?
                    <input id="Passport" type="text" className="form-control" />
                    :
                    <input id="Passport" type="text" className="form-control" placeholder="28904783" />
                }

            </div>

            <div className="col-md-4">
                <label for="Country">Select County:</label>
                <select id="Country" className="form-select">
                    {action === "add" ? [<option key={1} defaultValue>Country...</option>, <option key={2}>Kenya</option>] : <option>Kenya</option>}
                    <option>Uganda</option>
                    <option>Zambia</option>
                    <option>Rwanda</option>
                </select>
            </div>
            <div className="col-md-4">
                <label for="County">Select County:</label>
                <select id="County" className="form-select">

                    {action === "add" ? [<option key={1} defaultValue>County...</option>, <option key={2} >Nakuru</option>] : <option>Nakuru</option>}

                    <option>Kericho</option>
                    <option>Mombasa</option>
                    <option>Nairobi</option>
                </select>
            </div>
            <div className="col-md-4">
                <label for="customer-group">Select customer group:</label>
                <select id="customer-group" className="form-select">

                    {action === "add" ? [<option key={1} defaultValue>None...</option>, <option key={2} >Default</option>] : <option>Default</option>}
                    <option>Group 1</option>
                    <option>Group 2</option>
                    <option>Group 3</option>
                </select>
            </div>


        </form>
    );
}