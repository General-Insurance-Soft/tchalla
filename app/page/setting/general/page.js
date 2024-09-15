'use client'

import DataPointSetting from "./data_point/DataPointSetting";
import PolicySetting from "./policy/policy_setting";
import ClaimSetting from "./claim/claim_setting";
import ProposalSetting from "./proposal/proposal_setting";
import SmsSetting from "./sms/sms_setting";

export default function GeneralSetting() {
    return (
        <>
            <div className="pagetitle">
                <h1>Settings</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">Setting</li>
                        <li className="breadcrumb-item active">general</li>
                    </ol>
                </nav>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">General System Settings</h5>

                            <ul className="nav nav-tabs nav-tabs-bordered d-flex" id="borderedTabJustified" role="tablist">
                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-data" type="button" role="tab" aria-controls="data" aria-selected="true">Data points</button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-proposal" type="button" role="tab" aria-controls="proposal" aria-selected="false">Proposal</button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-policy" type="button" role="tab" aria-controls="policy" aria-selected="false">Policy</button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-claim" type="button" role="tab" aria-controls="claim" aria-selected="false">Claim</button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-sms" type="button" role="tab" aria-controls="sma" aria-selected="false">SMS</button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contancts </button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-event" type="button" role="tab" aria-controls="event" aria-selected="false">Events & Calendar</button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-report" type="button" role="tab" aria-controls="report" aria-selected="false">Reports</button>
                                </li>
                            </ul>
                            <div className="tab-content pt-2" id="borderedTabJustifiedContent">
                                <div className="tab-pane fade show active" id="bordered-justified-data" role="tabpanel" aria-labelledby="data-tab">
                                    <DataPointSetting />
                                </div>
                                <div className="tab-pane fade" id="bordered-justified-proposal" role="tabpanel" aria-labelledby="proposal-tab">
                                    <ProposalSetting /> 
                                </div>
                                <div className="tab-pane fade" id="bordered-justified-policy" role="tabpanel" aria-labelledby="policy-tab">
                                    <PolicySetting />
                                </div>
                                <div className="tab-pane fade" id="bordered-justified-claim" role="tabpanel" aria-labelledby="claim-tab">
                                    <ClaimSetting />
                                </div>
                                <div className="tab-pane fade" id="bordered-justified-sms" role="tabpanel" aria-labelledby="sms-tab">
                                    <SmsSetting/>
                                </div>
                                <div className="tab-pane fade" id="bordered-justified-contact" role="tabpanel" aria-labelledby="contact-tab">
                                    Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
                                </div>
                                <div className="tab-pane fade" id="bordered-justified-event" role="tabpanel" aria-labelledby="event-tab">
                                    Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
                                </div>
                                <div className="tab-pane fade" id="bordered-justified-report" role="tabpanel" aria-labelledby="report-tab">
                                    Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}