import React from 'react';
import './aviation.css';
import b737ngQrh from '../files/b737ng-qrh.pdf';
import b737ngChecklist from '../files/b737ng-checklist.pdf';
import { useState } from 'react';

const [simbriefTextbox, setSimbriefTextbox] = useState('');

async function redirectFlightPlan() {
    try {
        let simbriefId = document.getElementById('simbrief-id-box').value;
        let baseURL = 'https://www.simbrief.com/ofp/flightplans/';
        let flightPlanRaw = await fetch(
            'https://www.simbrief.com/api/xml.fetcher.php?userid=' + simbriefId
        );

        flightPlanRaw = await flightPlanRaw.text();
        let flightPlanXML = new window.DOMParser().parseFromString(
            flightPlanRaw,
            'text/xml'
        );

        let flightPlanAddress = flightPlanXML.documentElement
            .getElementsByTagName('files')[0]
            .getElementsByTagName('pdf')[0]
            .getElementsByTagName('link')[0].innerHTML;

        let flightPlanURL = baseURL + flightPlanAddress;
        window.location.href = flightPlanURL;
    } catch (error) {
        return;
    }
}

function Aviation() {
    return (
        <div className="aviation">
            <div className="card flight-plan">
                <h2 className="card-title">Flight Plan</h2>
                <div className="class-text-container">
                    <div className="card-text">
                        <p>
                            SimBrief ID:{' '}
                            <input
                                value={simbriefTextbox}
                                onChange={(e) =>
                                    setSimbriefTextbox(e.target.value)
                                }
                                type="text"
                                name="simbrief-id"
                                id="simbrief-id-box"
                                className="card-input-box"
                            />
                        </p>
                    </div>
                    <button
                        className="card-button"
                        id="simbrief-button"
                        onClick={redirectFlightPlan}
                    >
                        Get Flight Plan
                    </button>
                </div>
            </div>
            <div className="checklists">
                <div className="card">
                    <h2 className="card-title">Boeing 737NG</h2>
                    <div className="card-text-container">
                        <div className="card-text">
                            <a href={b737ngChecklist}>Checklist</a>
                        </div>
                        <div className="card-text">
                            <a href={b737ngQrh}>QRH</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aviation;
