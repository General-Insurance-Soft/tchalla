import Data_Table from "../../../../lib/components/table/data-table";
import PredefinedTable from "./utils/PredefinedDataPointTable";
import CustomDataPointTable from "./utils/CustomDatapointTable";
import EditAddPane from "./utils/EditAddDataPointPane";


export default function DataPointSetting() {
    return (
        <div style={{ marginTop: "10px" }} className="row">
            <div className="col-sm-12">
                <div className="accordion" id="dataPoint">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingdataPointOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedataPointOne" aria-expanded="true" aria-controls="collapsedataPointOne">
                                Demographic
                            </button>
                        </h2>
                        <div id="collapsedataPointOne" className="accordion-collapse collapse show" aria-labelledby="headingdataPointOne" data-bs-parent="#dataPoint">
                            <PredefinedTable/>
                            <CustomDataPointTable/>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingdataPointTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedataPointTwo" aria-expanded="false" aria-controls="collapsedataPointTwo">
                                Proposal
                            </button>
                        </h2>
                        <div id="collapsedataPointTwo" className="accordion-collapse collapse" aria-labelledby="headingdataPointTwo" data-bs-parent="#dataPoint">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingdataPointThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedataPointThree" aria-expanded="false" aria-controls="collapsedataPointThree">
                                Policy
                            </button>
                        </h2>
                        <div id="collapsedataPointThree" className="accordion-collapse collapse" aria-labelledby="headingdataPointThree" data-bs-parent="#dataPoint">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingdataPointFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedataPointFour" aria-expanded="false" aria-controls="collapsedataPointFour">
                                Claim
                            </button>
                        </h2>
                        <div id="collapsedataPointFour" className="accordion-collapse collapse" aria-labelledby="headingdataPointFour" data-bs-parent="#dataPoint">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );

}
