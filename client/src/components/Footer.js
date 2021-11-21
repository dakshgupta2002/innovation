import React from 'react'

export default function Footer() {


    const foot = {
        paddingTop:"30px",
        width: "100%",
        minHeight: "30vh",
        backgroundColor: "Black",
        color: "white",
        fontFamily: "Helvetica",
        left: "0px",
        right: "0px",
        marginTop: "5%"
    };
    return (
        <footer className="footer" style={foot}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h5><i className="fa fa-road"></i> Innovation</h5>
                        <div className="row">
                            <div className="col-6">
                                <ul className="list-unstyled">
                                    <li><a href="">Product</a></li>
                                    <li><a href="">Benefits</a></li>
                                    <li><a href="">Partners</a></li>
                                    <li><a href="">Team</a></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-unstyled">
                                    <li><a href="">Documentation</a></li>
                                    <li><a href="">Support</a></li>
                                    <li><a href="">Legal Terms</a></li>
                                    <li><a href="">About</a></li>
                                </ul>
                            </div>
                        </div>
                        <ul className="nav">
                            <li className="nav-item"><a href="" className="nav-link pl-0"><i className="fa fa-facebook fa-lg"></i></a></li>
                            <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-twitter fa-lg"></i></a></li>
                            <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-github fa-lg"></i></a></li>
                            <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-instagram fa-lg"></i></a></li>
                        </ul>
                        <br/>
                    </div>
                    <div className="col-md-2">
                        <h5 className="text-md-right">Contact Us</h5>
                        <hr/>
                    </div>
                    <div className="col-md-5">
                        <form>
                            <fieldset className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <textarea className="form-control" id="exampleMessage" placeholder="Message"></textarea>
                            </fieldset>
                            <fieldset className="form-group text-xs-right">
                                <button type="button" className="btn btn-secondary-outline btn-lg">Send</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}
