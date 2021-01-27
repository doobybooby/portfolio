import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Resume</h1>
                        <p>Being born into a military family has allowed me to thrive in many different environments and be resilient</p>
                        <p>throughout personal hardships. Computer science can be challenging to some due to the rapidly evolving industry.</p>
                        <p>During my spare time, I took up the challenge to learn additional languages, such as Python and C++. It was initially </p>
                        <p>challenging, but I continued to persevere and seek like-minded individuals to help me pursue my passion. I strive to</p>
                        <p>become an expert in the realm of cybersecurity to eliminate threats to our country. I want to further my education</p>
                        <p>and become an expert.</p>

                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic