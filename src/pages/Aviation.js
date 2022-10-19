import React from 'react';
import './aviation.css';
import b737ngQrh from '../files/b737ng-qrh.pdf';
import b737ngChecklist from '../files/b737ng-checklist.pdf';

function Aviation() {
    return (
        <div className="aviation">
            <div className="aircraft">
                <h2>Boeing 737NG</h2>
                <ul>
                    <li>
                        <a href={b737ngChecklist}>Checklist</a>
                    </li>
                    <li>
                        <a href={b737ngQrh}>QRH</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Aviation;
