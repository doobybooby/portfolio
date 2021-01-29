import React from 'react'
import { Link } from 'gatsby'


const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Doobin Lee</h1>
            </header>
            <div className="content">
                <p>Click to view my projects, scroll down to learn about the programs I've used<br />
                </p>
                <ul className="actions">
                    <li><Link to="/landing" className="button next scrolly">Projects</Link></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
