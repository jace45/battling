import React from 'react';

class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        }
    }
    render() {
        return (
            <div>
                Battle!
            </div>
        )
    }
}

export default Battle;