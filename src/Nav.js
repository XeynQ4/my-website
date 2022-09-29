import React from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Nav() {
    const mobileWidthRetracted = '60px';
    const mobileWidthExpanded = '80%';

    function changeNav() {
        console.log('clicked');
        let nav = document.getElementById('nav');
        let items = document.getElementsByClassName('nav-item');
        if (nav.style.width === mobileWidthExpanded) {
            for (let item of items) {
                item.style.visibility = 'hidden';
            }
            nav.style.width = mobileWidthRetracted;
        } else {
            nav.style.width = mobileWidthExpanded;
            for (let item of items) {
                item.style.visibility = 'visible';
            }
        }
    }

    const min_width = window.matchMedia('(min-width: 768px)');
    window.addEventListener('resize', check);
    function check() {
        let nav = document.getElementById('nav');
        let items = document.getElementsByClassName('nav-item');
        if (min_width.matches) {
            nav.style.width = '100vw';
            for (let item of items) {
                item.style.visibility = 'visible';
            }
        } else {
            for (let item of items) {
                item.style.visibility = 'hidden';
            }
            nav.style.width = mobileWidthRetracted;
        }
    }

    return (
        <nav id="nav">
            <button className="nav-button" onClick={changeNav}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <Link className="nav-item" to="/">
                Home
            </Link>
            <Link className="nav-item" to="/serpinski-triangle">
                Serpenski Triangle
            </Link>
            <Link className="nav-item" to="/">
                Contact
            </Link>
        </nav>
    );
}

export default Nav;
