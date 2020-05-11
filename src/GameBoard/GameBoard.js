import React, { Component } from 'react';
import Player from '../Player/Player';
import {Row, Col} from 'react-bootstrap';
import './GameBoard.css';
import Setup from '../Setup/Setup';
import Help from '../Help/Help';
import i18n from '../i18n';


const VERSION = '1.2.0';

class GameBoard extends Component {

  // Set up state for gameboard
  constructor(props) {
    super(props);
      this.state = this.initialSetup();

      // Get current session info, in case of reload
      if (sessionStorage.length > 0 ) {
        let persistentState = sessionStorage.getItem('maestroState');
        let item = JSON.parse(persistentState);
        this.state = item;
      }
  }

  // Called by constructor, fills state and sets initial language
  initialSetup = () => {
    const currentLang = i18n.language;
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
    return({
      players,
      showControls: false,
      gameRunning: false,
      helpActive: true,
      lang: currentLang,
      rounds: 4
    });
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

  componentDidUpdate = () => {
    // console.log('[GameBoard.js] componentDidUpdate');

  }

  static getDerivedStateFromProps = (props,state) => {
    let persistentState = JSON.stringify(state);
    sessionStorage.setItem('maestroState', persistentState)
    return state;
  }

  startGame = () => {
    this.setState({ gameRunning: true, helpActive: false });
  }
  
  resetGame = () => {
    this.setState(this.initialSetup());
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

   checkPlayer = (e, playerNum) => {
    const players = this.state.players.map( (player, i) => {
      if (playerNum === player.number) {
        player.isChecked = !player.isChecked;
        if (player.isEliminated) player.isEliminated = false;
       }
     return player;
    })

    this.setState({players});
  }

  addToChecked = (howMany) => {
    let numRounds = this.state.rounds;
    let maxPoints = numRounds * 5;
    let addRound = 0;

    const players = this.state.players.map( (player) => {

      if ( player.isChecked && !player.isEliminated ) {
        player.score += howMany;
        // If we have gone below zero, leave it at zero.
        if (player.score < 0) player.score = 0;
        // If this player's score has exceeded the maximum points for the number of rounds on the board, add a round.
        if (player.score > maxPoints) {
          addRound = 1;
        }

      }
      return player;
    });
    this.setState({players, rounds: ((addRound !== 0) ? numRounds+addRound : numRounds)});
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

  changeLangHandler = (e) => {
    i18n.changeLanguage(e.target.value);
    this.setState({lang: e.target.value});
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
      rounds={this.state.rounds}
      />
    ))

    const numberMarkers = () => {
      let output = [];
      for ( let i = 1; i <= this.state.rounds; i++) {
        let x = i * 5;
        output.push(<span key={i} className="number-marker">{x}</span>
        )
      }
      return output;
    }

    return (
      <div className={'game-board rounds-' + this.state.rounds}>
        <Row>
          <Col xs={1}>
            <div className="title">
              <h1 className="maestro-title">MAeSTRo</h1>
            </div>
          </Col>
          <Col xs={11}>
              <div>
                  <div className="number-markers">
                    {/* <span className="number-marker">5</span>
                    <span className="number-marker">10</span>
                    <span className="number-marker">15</span>
                    <span className="number-marker">20</span>
                    <span className="number-marker">25</span> */}
                    {numberMarkers()}
                  </div>
  
                {players}
              </div>
              { !this.state.gameRunning ? 
                <Setup players={this.state.players} namePlayer={this.namePlayer} addPlayer={this.addPlayer} removePlayer={this.removePlayer} startGame={this.startGame} resetGame={this.resetGame} changeLang={this.changeLangHandler} lang={this.state.lang} />
              : null }
            { this.state.helpActive ? 
              <Help version={VERSION}/>
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