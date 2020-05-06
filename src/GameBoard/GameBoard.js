import React, { Component } from 'react';
import Player from '../Player/Player';
import {Row, Col} from 'react-bootstrap';
import './GameBoard.css';
import Setup from '../Setup/Setup';
import Help from '../Help/Help';

class GameBoard extends Component {

  // Set up state for gameboard
  constructor(props) {
    super(props);

    const players = [];
    for ( let i = 1; i < 13; i++) {
      players.push({
        name: '',
        number: i,
        score: 0,
        isEliminated: false,
        isChecked: false
      })
    }

      // const players = [{
      //     name: '',
      //     number: 1,
      //     score: 0,
      //     isEliminated: false,
      //     isChecked: false
      //   }]

      this.state = {
        players,
        showControls: false,
        gameRunning: false,
        helpActive: true
      }

// I don't think these binds are necessary after switching to arrow functions, but leaving them in for a few versions just in case.
    // this.scoreChange = this.scoreChange.bind(this);
    //this.checkPlayer = this.checkPlayer.bind(this);
    //this.addToChecked = this.addToChecked.bind(this);
    //this.uncheckAll = this.uncheckAll.bind(this);
    //this.eliminateChecked = this.eliminateChecked.bind(this);
    // this.namePlayer = this.namePlayer.bind(this);
    // this.addPlayer = this.addPlayer.bind(this);
    // this.removePlayer = this.removePlayer.bind(this);
    // // this.toggleControls = this.toggleControls.bind(this);
    // // this.handleKeyPress = this.handleKeyPress.bind(this);
    // this.startGame = this.startGame.bind(this);
  }

  handleKeyPress = (event) => {
    if (event.key === "?") {
      // ? pressed -- help system
      this.setState({helpActive: !this.state.helpActive})
    }
    else if(event.keyCode === 39 || event.key === "+") {
      // RIGHT arrow key -- add one point to checked players
      this.addToChecked(1);
    } 
    else if (event.keyCode === 37 || event.key === "-") {
      // LEFT arrow key -- subtract one point from checked players
      this.addToChecked(-1);
    } 
    else if (event.keyCode === 49) {
      // Number key 1 pressed -- add one point and then uncheck everyone
      this.addToChecked(1);
      this.uncheckAll();
    }
    else if (event.keyCode === 50) {
      // Number key 2 pressed -- add one point and then uncheck everyone
      this.addToChecked(2);
      this.uncheckAll();
    }
    else if (event.keyCode === 51) {
      // Number key 3 pressed -- add one point and then uncheck everyone
      this.addToChecked(3);
      this.uncheckAll();
    }
    else if (event.keyCode === 52) {
      // Number key 4 pressed -- add one point and then uncheck everyone
      this.addToChecked(4);
      this.uncheckAll();
    }
    else if (event.keyCode === 53) {
      // Number key 5 pressed -- add one point and then uncheck everyone
      this.addToChecked(5);
      this.uncheckAll();
    }
    else if (event.keyCode === 69) {
      // E key pressed -- eliminate selected players. Also, nice.
      this.eliminateChecked();
      this.uncheckAll();
    }
    else if (event.key === 's') {
      // S key pressed -- enter setup mode again
      this.setState({gameRunning: false});
      this.uncheckAll();
    }
    else if (event.key === 'u') {
      // U key pressed -- uncheck everyone
      this.uncheckAll();
    }

  }
  componentDidMount = () => {
    document.addEventListener("keyup", this.handleKeyPress, false);
  }

  startGame = () => {
    this.setState({ gameRunning: true, helpActive: false });
  }

  addPlayer = () => {
    let newPlayerArray = [].concat(this.state.players);
    const nextPlayer = this.state.players.length + 1;
    const newPlayer = {
      name: '',
      number: nextPlayer,
      score: 0,
      isEliminated: false,
      isChecked: false
    }
    newPlayerArray.push(newPlayer);
    this.setState({ players: newPlayerArray });
  }

  removePlayer = () => {
    if (this.state.players.length > 1) {
      let newPlayerArray = [].concat(this.state.players);
      newPlayerArray.splice(-1,1);
      this.setState({players: newPlayerArray})
    }
  }

  namePlayer = (e, playerNum) => {
    const newName = e.target.value;
    const players = this.state.players.map( (player, i) => {
      if (playerNum === player.number) player.name = newName;
      return player;
    })
    this.setState({players});

  }

  // scoreChange(e,playerNum) {
  //   const newScore = e.target.value;
  //   if ( newScore > 25 ) return;
  //   const players = this.state.players.map( (player, i) => {
  //     if (playerNum === player.number) player.score = newScore;
  //     return player;
  //   })
  //   this.setState({players});
  // }

  checkPlayer = (e, playerNum) => {
    const players = this.state.players.map( (player, i) => {
      if (playerNum === player.number) player.isChecked = !player.isChecked;
      if (player.isEliminated) player.isEliminated = false;
      return player;
    })

    this.setState({players});
  }

  addToChecked = (howMany) => {
    const players = this.state.players.map( (player) => {
      //const originalScore = player.score;
      if ( player.isChecked && !player.isEliminated ) {
        player.score += howMany;
        // but if we have made score below zero or above 25, cap it at those
        if (player.score > 25 ) player.score = 25;
        else if (player.score < 0) player.score = 0;
      }
      return player;
    });
    this.setState({players});
  }

  eliminateChecked = () => {
    const players = this.state.players.map( (player, i) => {
      if ( player.isChecked ) player.isEliminated += true;
      return player;
    })
    this.setState({players});
  }

  uncheckAll = () => {
    const players = this.state.players.map( (player, i) => {
      player.isChecked = false;
      return player;
    })
    this.setState({players});
  }

  render() {
    const players = this.state.players.map((player) => (
      <Player
      key={player.number}
      number={player.number}
      name={player.name}
      score={player.score}
      // updateScore={this.scoreChange}
      checkPlayer={this.checkPlayer}
      isChecked={player.isChecked}
      isEliminated={player.isEliminated}
      namePlayer={this.namePlayer}
      />
    ))


    return (
      <div className="game-board">
        <Row>
          <Col xs={1}>
            <div className="title">
              <h1 className="maestro-title">MAeSTRo</h1>
            </div>
          </Col>
          <Col xs={11}>
              <div>
                  <div className="number-markers">
                    <span className="number-marker">5</span>
                    <span className="number-marker">10</span>
                    <span className="number-marker">15</span>
                    <span className="number-marker">20</span>
                    <span className="number-marker">25</span>
                  </div>
  
                {players}
              </div>
              { !this.state.gameRunning ? 
                <Setup players={this.state.players} namePlayer={this.namePlayer} addPlayer={this.addPlayer} removePlayer={this.removePlayer} startGame={this.startGame} />
              : null }
            { this.state.helpActive ? 
              <Help/>
              :
              null
            }

          </Col>
        </Row>
      </div>
    )
  }
}

export default GameBoard;