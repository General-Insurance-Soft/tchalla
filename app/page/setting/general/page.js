'use client'

import PolicySetting from "./policy/policy_setting";
import ClaimSetting from "./claim/claim_setting";
import ProposalSetting from "./proposal/proposal_setting";
import SmsSetting from "./sms/sms_setting";
import PaymentSetting from "./payment/payment_setting";
import EventCalendarSetting from "./event_calendar/event_calendar_setting";
import withAuth from "../../../lib/service/with_auth";

const Page = () => {
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
                                    <button className="nav-link w-100" id="proposal-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-proposal" type="button" role="tab" aria-controls="proposal" aria-selected="false">Proposal</button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100" id="policy-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-policy" type="button" role="tab" aria-controls="policy" aria-selected="false">Policy</button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100" id="claim-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-claim" type="button" role="tab" aria-controls="claim" aria-selected="false">Claim</button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100" id="sms-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-sms" type="button" role="tab" aria-controls="sma" aria-selected="false">SMS</button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-payment" type="button" role="tab" aria-controls="payment" aria-selected="false">Payments </button>
                                </li>
                                <li className="nav-item flex-fill" role="presentation">
                                    <button className="nav-link w-100" id="events-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-event" type="button" role="tab" aria-controls="event" aria-selected="false">Events & Calendar</button>
                                </li>
                
                            </ul>
                            <div className="tab-content pt-2" id="borderedTabJustifiedContent">
                                
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
                                    <SmsSetting />
                                </div>
                                <div className="tab-pane fade" id="bordered-justified-payment" role="tabpanel" aria-labelledby="payment-tab">
                                    <PaymentSetting />
                                </div>
                                <div className="tab-pane fade" id="bordered-justified-event" role="tabpanel" aria-labelledby="event-tab">
                                    <EventCalendarSetting/>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default withAuth(Page);