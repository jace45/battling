import React from 'react';

class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        };
        this.handleSumbit = this.handleSumbit.bind(this);
    }

    handleSumbit(id, username) {
        this.setState( function () {
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
                {!playerOne && <PlayerInput />}
                {!playerTwo && <PlayerInput />}
            </div>
        )
    }
}

export default Battle;