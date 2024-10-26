import Image from 'next/image';

export default function PaymentDetails() {

    return (

        <div className="modal fade" id="paymentDetailsModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="paymentDetailsModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" >
                            Payment details
                        </h1>

                    </div>
                    <div className="modal-body">
                        <Image
                            src="/img/receipt_template.jpg"
                            // layout="responsive"
                            width={100}  // Aspect ratio width
                            height={500}  // Aspect ratio height
                            className="card-img-top"
                            alt="receipt template"
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary">Print</button>
                    </div>
                </div>
            </div>
        </div>

    );
}