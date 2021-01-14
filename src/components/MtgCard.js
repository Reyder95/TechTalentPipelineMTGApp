import React, { Component } from 'react';

class MtgCard extends Component {
    render() {
        return (
            <div>
                <p>{this.props.id}</p>
                <p>{this.props.name}</p>
                <img src={this.props.image} width="150px"/>
            </div>
        )
    }
}

export default MtgCard;