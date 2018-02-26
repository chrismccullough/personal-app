import React from 'react';
import Form from './Form/Form';
import Aside from './Aside/Aside';

const contact = () => (
    <section id="contact">
        <div className="row section-head">
            <div className="two columns header-col">
                <h1><span>Get In Touch.</span></h1>
            </div>

            <div className="ten columns">
                <p className="lead">Fill out the following form to contact me directly.</p>
            </div>
        </div>

        <div className="row">
            <div className="eight columns">
                <Form />
            </div>

            <aside className="four columns footer-widgets">
                <Aside />
            </aside>
        </div>
    </section>
);

export default contact;
