import React from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Nav() {
    const mobileWidthRetracted = '60px';
    const mobileWidthExpanded = '100vw';
    let isExpanded = false;
    let isMobile = true;

    function changeNav() {
        let nav = document.getElementById('nav');
        let items = document.getElementsByClassName('nav-item');
        if (isExpanded && isMobile) {
            for (let item of items) {
                item.style.visibility = 'hidden';
            }
            nav.style.width = mobileWidthRetracted;
            isExpanded = false;
        } else {
            nav.style.width = mobileWidthExpanded;
            for (let item of items) {
                item.style.visibility = 'visible';
            }
            isExpanded = true;
        }
    }

    function closeNav() {
        let nav = document.getElementById('nav');
        let items = document.getElementsByClassName('nav-item');
        if (isExpanded && isMobile) {
            for (let item of items) {
                item.style.visibility = 'hidden';
            }
            nav.style.width = mobileWidthRetracted;
            isExpanded = false;
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
            isMobile = false;
        } else {
            for (let item of items) {
                item.style.visibility = 'hidden';
            }
            nav.style.width = mobileWidthRetracted;
            isMobile = true;
        }
    }

    return (
        <nav>
            <div id="nav">
                <button className="nav-button" onClick={changeNav}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <Link className="nav-item" onClick={closeNav} to="/">
                    Home
                </Link>
                <Link
                    className="nav-item"
                    onClick={closeNav}
                    to="/serpinski-triangle"
                >
                    Serpinski Triangle
                </Link>
                <Link className="nav-item" onClick={closeNav} to="/aviation">
                    Aviation
                </Link>
            </div>
            <div id="spacer"></div>
        </nav>
    );
}

export default Nav;
