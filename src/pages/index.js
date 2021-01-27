import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Gatsby Starter - Forty"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>React</h3>
                                <a href = "https://reactjs.org/">React Documentation</a>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Github</h3>
                                <a href = "https://docs.github.com/en/github">Github Documentation</a>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>HTML & CSS </h3>
                                <a href = "https://developer.mozilla.org/en-US/docs/Web/HTML">HTML Documentation</a>
                                <br/>
                                <a href = "https://developer.mozilla.org/en-US/docs/Web/CSS">CSS Documentation</a>

                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Java Script</h3>
                                <a href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript">JS Documentation</a>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>C++</h3>
                                <a href = "https://www.cplusplus.com/doc/">C++ Documentation</a>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Django & Python</h3>
                                <a href = "https://docs.python.org/3/">Python Documentation</a>
                                <br/>
                                <a href = "https://docs.djangoproject.com/en/3.1/">Django Documentation</a>
                            </header>
                            {/* <Link to="/landing" className="link primary"></Link> */}
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Projects</h2>
                            </header>
                            <p>Click to see all the master piece touched by Doobin and his team. </p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex