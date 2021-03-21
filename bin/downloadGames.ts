import { Game, Series } from '../data/Interfaces';

/* eslint-disable @typescript-eslint/no-var-requires */
import fetch from 'node-fetch';
import { matches } from '../data/hobbitsInvitational/Games';
import path from 'path';
import { players } from '../data/hobbitsInvitational/Players';
import { writeFileSync } from 'fs';

const baseUrl = 'https://lichess.org/';
const targetFolder = path.join(__dirname, '../public/pgn/hobbitsInvitationals');

function sleep(timeSec: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, timeSec * 1000);
  });
}

async function fetchGame(gameId: string): Promise<string> {
  const response = await fetch(`${baseUrl}game/export/${gameId}?evals=false`);
  return await response.text();
}

function writeFile(text: string, fileName: string): void {
  writeFileSync(path.join(targetFolder, fileName), text, { flag: 'w' });
}

function replacePgn(pgn: string, game: Game, matchId: number): string {
  const playerWhite = players[game.userIdWhite];
  const playerBlack = players[game.userIdBlack];

  let replacedPgn = pgn.replace(/\[White "([\w]+)"\]/, `[White "${playerWhite.name}"]`);
  replacedPgn = replacedPgn.replace(/\[Black "([\w]+)"\]/, `[Black "${playerBlack.name}"]`);
  replacedPgn = replacedPgn.replace(/\[Event "([\w ]+)"\]/, `[Event "Hobbits Invitational 2021"]`);
  replacedPgn = replacedPgn.replace(/\[Event "([\w]+)"\]/, 'Hobbits Invitational 2021');
  replacedPgn = replacedPgn.replace(
    /\[Site ".*"\]/,
    `[Site "https://www.chess-tournaments.org/de/tournaments/hobbitInvitational/series/${matchId}"]`,
  );
  return replacedPgn;
}

async function fetchSeries(series: Series[], id: number): Promise<string> {
  let result = '';
  let i = 1;
  for (const serie of series) {
    for (const game of serie.games) {
      try {
        const gameId = game.lichessUrl.substr(game.lichessUrl.lastIndexOf('/') + 1);
        const pgn = await fetchGame(gameId);
        result += replacePgn(pgn, game, id);
        console.log(`Match ${id}: Game`, i);
        await sleep(3);
        ++i;
      } catch (e) {
        console.error(e);
        return '';
      }
    }
  }
  return result;
}

async function init() {
  let fullPgn = '';
  for (const match of Object.values(matches)) {
    const pgn = await fetchSeries(match.series, match.id);
    writeFile(pgn, `game${match.id}.pgn`);
    fullPgn += pgn;
  }
  writeFile(fullPgn, `all.pgn`);
}

init();
