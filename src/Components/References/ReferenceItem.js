'use strict';

import React, { Compontent } from 'react';

class ReferenceItem extends React.Component {

    render() {
        return (
            <blockquote>
                <p>
                    {this.props.Reference}
                </p>
                <cite>
                    {this.props.Name}<br/>
                    {this.props.Title}
                </cite>
            </blockquote>
        );
    }
}

export default ReferenceItem;
