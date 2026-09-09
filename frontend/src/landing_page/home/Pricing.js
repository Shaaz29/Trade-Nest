import React from 'react';

function Pricing () {
    return (  
        <div className="container mb-5">
            <div className="row">
                    <div className="col-4">
                        <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                        <p> We pioneered the concept of discount broking and price transparency in India.
                            Flat fees and no hidden charges.</p>
                            <a href="" style={{textDecoration:"none"}}>See Pricing<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className="col-8">
                        <div className="row text-center">
                            <div className="col p-3">
                            <div className="d-flex align-items-center">
                            <h1 className="mb-0 display-3" style={{color: "#ffb000"}}>
                             <span style={{fontSize: "24px", verticalAlign: "top"}}>₹</span>0</h1>
                            <p className="mb-0 ms-3 text-muted">
                              Free account<br />
                              opening</p>
                        </div>
                    </div>
                            
                            <div className="col p-3">
                                <div className="d-flex align-items-center">
                                    <h1 className="mb-0 display-3" style={{color: "#ffb000"}}>
                                    <span style={{fontSize: "24px", verticalAlign: "top"}}>₹</span>0</h1>
                                    <p className="mb-0 ms-3 text-muted">
                                        Free equity delivery and<br />
                                        direct mutual funds
                                    </p>
                                </div>
                            </div>

                           <div className="col p-3">
                            <div className="d-flex align-items-center">
                                <h1 className="mb-0 display-3" style={{color: "#ffb000"}}>
                                 <span style={{fontSize: "24px", verticalAlign: "top"}}>₹</span>20</h1>
                                <p className="mb-0 ms-3 text-muted">
                                    Intraday and<br />
                                    F&O
                                </p>
                            </div>
                           </div>
                            </div>
                    </div>
            </div>
        </div>
    );
}
export default Pricing;