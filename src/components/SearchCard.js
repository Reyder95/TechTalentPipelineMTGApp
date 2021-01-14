import React, { Component } from 'react';

import MtgCard from './MtgCard';

import { connect } from 'react-redux';
import { getSearchedCards } from '../redux/reducers'

class IsLoading extends Component {
    render() {
        return (
            <div>
                <p>Loading!</p>
            </div>
        )
    }
}

class SearchCard extends Component {

    state = {
        searchString: '',
        isLoading: true
    }

    handleChange(e) {
        this.setState({
            searchString: e.target.value
        })
    }

    async fetchResults() {

        await this.props.getSearchedCards(this.state.searchString)
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.handleChange(e)} type="text" placeholder="Search for MTG Card"/>
                <button onClick={() => this.fetchResults()}>Submit</button>
                
                <MtgCard
                id="1"
                name="mtgcard"
                image="https://c1.scryfall.com/file/scryfall-cards/large/front/9/a/9a4f5b00-ac50-485f-a38a-b9f409307d5c.jpg?1562032865"
                />

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cardList: state.cardList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSearchedCards: (searchString) => dispatch(getSearchedCards(searchString))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCard);