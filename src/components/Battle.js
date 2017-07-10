import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

const PlayerPreview = (props) => {
    return (
        <div>
            <div className='column'>
                <img
                    className='avatar'
                    src={props.avatar}/>
                <h2>@{props.username}</h2>
                <button
                    className='reset'
                    onClick={props.onReset.bind(null, props.id)}>
                    Reset
                </button>
            </div>
        </div>
    )
};

PlayerPreview.propTypes = {
    avatar: Proptypes.string.isRequired,
    username: Proptypes.string.isRequired,
    id: Proptypes.string.isRequired,
    onReset: Proptypes.func.isRequired
};

class PlayerInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;

        this.setState(function () {
            return {
                username: value
            }
        });
    }

    handleSubmit() {
        event.preventDefault();

        this.props.onSubmit(this.props.id, this.state.username);

    }

    render() {
        return (
            <form className='column' onSubmit={this.handleSubmit}>
                <label className='header' htmlFor='username'>
                    {this.props.label}
                </label>
                <input
                    id='username'
                    type='text'
                    value={this.state.username}
                    autoComplete='off'
                    onChange={this.handleChange}/>
                <button
                    className='button'
                    type='submit'
                    disabled={!this.state.username}>
                    Submit
                </button>
            </form>
        )
    }
}

PlayerInput.propTypes = {
    id: Proptypes.string.isRequired,
    label: Proptypes.string.isRequired,
    onSubmit: Proptypes.func.isRequired
}

class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(id, username) {
        this.setState(function () {
            const newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
            return newState;
        });

    }

    handleReset(id) {
        this.setState(function () {
            const newState = {};
            newState[id + 'Name'] = '';
            newState[id + 'Image'] = null;
            return newState;
        });
    }

    render() {
        const match = this.props.match;
        const playerOne = this.state.playerOneName;
        const playerTwo = this.state.playerTwoName;
        const playerOneImage = this.state.playerOneImage;
        const playerTwoImage = this.state.playerTwoImage;
        return (
            <div>
                <div className='row'>
                    {!playerOne &&
                    <PlayerInput id="playerOne" label='Player One' onSubmit={this.handleSubmit}/>}
                    {playerOneImage !== null &&
                    <PlayerPreview
                        avatar={this.state.playerOneImage}
                        username={this.state.playerOneName}
                        id='playerOne'
                        onReset={this.handleReset}/>}
                    {!playerTwo &&
                    <PlayerInput id="playerTwo" label='Player Two' onSubmit={this.handleSubmit}/>}
                    {playerTwoImage !== null &&
                    <PlayerPreview
                        avatar={this.state.playerTwoImage}
                        username={this.state.playerTwoName}
                        id='playerTwo'
                        onReset={this.handleReset}/>}
                </div>
                {playerOneImage && playerTwoImage &&
                <Link className='button'
                    to={{
                    pathname: match.url + '/results',
                    search: '?playerOneName=' + playerOne + '&playerTwoName=' + playerTwo
                    }}>
                    Battle!
                </Link>}
            </div>
        )
    }
}

export default Battle;