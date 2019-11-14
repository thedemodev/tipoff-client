import React, { Component } from 'react';
import config from '../config.json';
import bounce from '../assets/bounce.gif';
export class GameList extends Component {
  state = {
    games: [],
  };

  async componentDidMount() {
    const res = await fetch(`${config.API}/schedule/today`);
    const games = await res.json();
    this.setState({ games });
  }

  render() {
    const { games } = this.state;

    if (games === undefined || games.length === 0) {
      return <img src={bounce}></img>;
    } else {
      return (
        <div>
          <h1>Games Today:</h1>

          {games.map(game => {
            const matchUp = `${game.v.tc} ${game.v.tn} @ ${game.h.tc} ${game.h.tn}  `;
            const time = game.etm.match(/\d\d:\d\d/)[0];
            return (
              <div key={game.gid}>
                <h2>{matchUp}</h2>
                <h3> {time} </h3>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default GameList;
