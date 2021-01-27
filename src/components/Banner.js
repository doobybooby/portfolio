import React from 'react'
import { Link } from 'gatsby'


const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Doobin Lee</h1>
            </header>
            <div className="content">
                <p>Scroll to find out what I'm capable of<br />
                </p>
                <ul className="actions">
                    <li><Link to="/generic" className="button next scrolly">Resume</Link></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
