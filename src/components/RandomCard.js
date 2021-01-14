import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getRandomCard } from '../redux/reducers';

class IsLoading extends Component {
    render() {
        return (
            <div>
                <p>Loading!</p>
            </div>
        )
    }
}

class RandomCard extends Component {

    async componentDidMount() {
        await this.fetchRandomCard();
    }

    async fetchRandomCard(e) {
        await this.props.getRandomCard();
    }

    render() {
        return (

            this.props.randomCard.image_uris != undefined ? (
            <div>
                <button onClick={(e) => this.fetchRandomCard()}>Random Card</button>
                <p>{this.props.randomCard.name}</p>
                <img src={this.props.randomCard.image_uris.large} width="200px"/>
            </div>
            )
            :
            <IsLoading/>
        )
    }
}

const mapStateToProps = state => {
    return {
        randomCard: state.randomCard
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getRandomCard: () => dispatch(getRandomCard())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomCard);