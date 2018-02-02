import React, { Component } from 'react'

class Aside extends Component {
    render() {
        return (
            <div>
                <div class="widget widget_contact">
                    <h4>Address and Phone</h4>
                    <p class="address">
                        Chris McCullough<br />
                        11315 13th St. SE <br />
                        Lake Stevens, WA US<br />
                        <span>(425) 344-1255</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Aside;
