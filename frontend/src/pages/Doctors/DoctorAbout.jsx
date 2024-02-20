import React from 'react';
import {formatdate} from "../../utils/formatDate.js";

function DoctorAbout(props) {
    return (
        <>
            <div className="aboutdoc">
                <h3>About of <span className="spanspc">Muhbir Rahman</span></h3>
                <p>The field of surgery continues to evolve with advancements in technology, <br/>
                    techniques, and research, enabling surgeons to provide safer, more <br/>
                    precise,
                    and less invasive treatments. As such, surgeons are <br/>
                    lifelong
                    learners, continuously updating their skills and knowledge to<br/>
                    stay abreast of the latest developments in their field.</p>
            </div>
            <div className="edu">
                <h3>Education</h3>
                <div className="two-edu">
                    <div className="edu1">
                        <div>
                            <span className="spanspc">{formatdate('03-19-2012')} - {formatdate('03-23-2016')}</span>
                            <p>PHD in Surgeon</p>
                        </div>
                        <div>
                            <p>New Apollo Hospital, New York</p>
                        </div>
                    </div>

                    <div className="edu2">
                        <div>
                            <span className="spanspc">{formatdate('03-12-2008')} - {formatdate('03-28-2012')}</span>
                            <p>PHD in Surgeon</p>
                        </div>
                        <div>
                            <p>New Apollo Hospital, New York</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="exp">
                <h3>Experience</h3>
                <div className="exp-two">
                    <div>
                        <span>{formatdate('03-12-2008')} - {formatdate('03-28-2012')}</span>
                        <p>Sr. Surgeon</p>
                        <p>New Apollo Hospital, New York</p>

                    </div>

                    <div>
                        <span>{formatdate('03-12-2008')} - {formatdate('03-28-2012')}</span>
                        <p>Sr. Surgeon</p>
                        <p>New Apollo Hospital, New York</p>

                    </div>
                </div>
            </div>
        </>
    );
}

export default DoctorAbout;
