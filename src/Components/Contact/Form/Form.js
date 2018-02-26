import React, { Component } from 'react'
import Loader from '../../../Images/loader.gif'

class Form extends Component {

    render() {
        return (
            <div>
                <form action="" method="post" id="contactForm" name="contactForm">
                    <fieldset>
                        <div>
                            <label for="contactName">Name <span class="required">*</span></label>
                            <input type="text" size="35" id="contactName" name="contactName" />
                        </div>

                        <div>
                            <label for="contactEmail">Email <span class="required">*</span></label>
                            <input type="text" size="35" id="contactEmail" name="contactEmail" />
                        </div>

                        <div>
                            <label for="contactSubject">Subject</label>
                            <input type="text" size="35" id="contactSubject" name="contactSubject" />
                        </div>

                        <div>
                            <label for="contactMessage">Message <span class="required">*</span></label>
                            <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                        </div>

                        <div>
                            <button class="submit">Submit</button>
                            <span id="image-loader">
                                <img alt="" src={Loader} />
                            </span>
                        </div>
                    </fieldset>
                </form>

                <div id="message-warning">Error boy</div>

                <div id="message-success">
                    <i class="fa fa-check"></i>Your message was sent, thank you!<br />
                </div>
            </div>
        );
    }
}

export default Form;
