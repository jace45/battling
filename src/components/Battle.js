import React from 'react';
import Proptypes from 'prop-types';


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
    }

    handleSubmit(id, username) {
        this.setState(function () {
            const newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
            return newState;
        });

    }

    render() {
        const playerOne = this.state.playerOneName;
        const playerTwo = this.state.playerTwoName;
        return (
            <div>
                <div className='row'>
                    {!playerOne &&
                    <PlayerInput id="playerOne" label='Player One' onSubmit={this.handleSubmit}/>}
                    {!playerTwo &&
                    <PlayerInput id="playerTwo" label='Player Two' onSubmit={this.handleSubmit}/>}
                </div>
            </div>
        )
    }
}

export default Battle;