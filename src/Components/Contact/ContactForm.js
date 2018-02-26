import React, { Component } from 'react'
import Form from './Form/Form'
import Aside from './Aside/Aside'

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div class="row section-head">
                    <div class="two columns header-col">
                        <h1><span>Get In Touch.</span></h1>
                    </div>

                    <div class="ten columns">
                        <p class="lead">Fill out the following form to contact me directly.</p>
                    </div>
                </div>

                <div class="row">
                    <div class="eight columns">
                        <Form />
                    </div>

                    <aside class="four columns footer-widgets">
                        <Aside />
                    </aside>
                </div>
            </section>
        );
    }
}

export default Contact;
