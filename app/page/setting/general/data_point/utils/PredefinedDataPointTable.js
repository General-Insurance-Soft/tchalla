export default function PredefinedTable({tableData}) {
    console.log("predefined data passed Table");
    console.log(tableData);
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Predefined Datapoints</h5>

                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Last Editor</th>
                            <th scope="col">Last Edited</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (tableData !== undefined)
                            &&
                            tableData.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{data.name}</td>
                                        <td>{data.type}</td>
                                        <td>{data.editor}</td>
                                        <td>{data.edited}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
}