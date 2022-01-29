import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { existsSync, writeFileSync } from 'fs';
import fetch from 'node-fetch';
import path from 'path';
import { Game, LichessGameResult } from '../data/Interfaces';
import { Player } from '../data/Interfaces.d';
import { matches } from '../data/lichessStreamerChampionship/Games';
import { players } from '../data/lichessStreamerChampionship/Players';

dayjs.extend(customParseFormat);

const tournamentName = 'lichessStreamerChampionship';
//const tournamentName = 'hobbitsInvitational';

const baseUrl = 'https://lichess.org/api/';
const targetFolder = path.join(__dirname, `../data/${tournamentName}/games`);

function getFileName(gameId: number): string {
  const fileName = `Game${gameId}.ts`;
  return path.join(targetFolder, fileName);
}

function writeFile(text: string, gameId: number): void {
  writeFileSync(
    getFileName(gameId),
    `
import { Series } from '../../Interfaces';

export const game${gameId}: Series[] = ${text}`,
    { flag: 'w' },
  );
}

function convertResultsToObject(s: string): LichessGameResult[] {
  const rows = s.split('\n');
  const result: LichessGameResult[] = [];
  for (const row of rows) {
    if (row) {
      try {
        result.push(JSON.parse(row));
      } catch (e) {
        console.log(row, e);
      }
    }
  }
  return result;
}

async function fetchGameResults(p1: Player, p2: Player, date: dayjs.Dayjs): Promise<LichessGameResult[]> {
  const since = date.unix() * 1000;
  const until = date.add(1, 'd').unix() * 1000;
  const response = await fetch(
    `${baseUrl}games/user/${p1.lichessName}?moves=false&vs=${p2.lichessName}&since=${since}&until=${until}`,
    {
      headers: {
        Accept: 'application/x-ndjson',
      },
    },
  );
  if (response.status !== 200) {
    throw new Error(`ErrorResponse ${response.status} '${await response.text()}'`);
  }
  const text = await response.text();
  return convertResultsToObject(text);
}

function getGameResult(game: LichessGameResult): 0 | 1 | 0.5 {
  if (game.status === 'draw' || game.status === 'stalemate') {
    return 0.5;
  }
  return game.winner === 'white' ? 1 : 0;
}

function createSeries(gameResults: LichessGameResult[], p1: Player, p2: Player): string {
  gameResults.reverse();
  const timeSeries = new Map<string, Game[]>();

  for (const gameResult of gameResults) {
    const userIdWhite =
      gameResult.players.white.user.name.toLowerCase() === p1.lichessName?.toLowerCase() ? p1.id : p2.id;
    const userIdBlack =
      gameResult.players.black.user.name.toLowerCase() === p2.lichessName?.toLowerCase() ? p2.id : p1.id;
    const game: Game = {
      lichessUrl: `https://lichess.org/${gameResult.id}`,
      result: getGameResult(gameResult),
      // eslint-disable-next-line sort-keys-shorthand/sort-keys-shorthand
      userIdBlack,
      userIdWhite,
    };
    const ident = `${gameResult.clock.initial / 60}+${gameResult.clock.increment}`;
    const games = timeSeries.get(ident) || [];
    games.push(game);
    timeSeries.set(ident, games);
  }
  let result = `[\n`;
  for (const [ident, games] of timeSeries.entries()) {
    result += `  //#region ${ident}\n`;
    result += `  {\n`;
    result += `    games: `;
    result += JSON.stringify(games, null, 2)
      .split(`\n`)
      .map((l, i) => (i === 0 ? l : '    ' + l))
      .join(`\n`);
    result += `\n`;
    result += `  },\n`;
    result += `  //#endregion\n`;
  }
  result += `];\n`;

  return result;
}

async function importGame(gameId: number, date: dayjs.Dayjs, p1: Player, p2: Player): Promise<void> {
  const gameResults = await fetchGameResults(p1, p2, date);
  if (gameResults.length === 0) {
    throw new Error(`match ${gameId} has no games`);
  }
  try {
    const series = createSeries(gameResults, p1, p2);
    writeFile(series, gameId);
    console.log(`match ${gameId} imported`);
  } catch (e) {
    console.log(`Error on import match ${gameId}`, gameResults, e);
  }
}

async function init(): Promise<void> {
  for (const match of Object.values(matches)) {
    if (match.date && match.date !== 'unbekannt' && match.player1 && match.player2) {
      if (!existsSync(getFileName(match.id))) {
        const date = dayjs(match.date, match.date.includes(':') ? 'DD.MM.YYYY HH:mm' : 'DD.MM.YYYY');
        //only import games before today
        if (date.isBefore(dayjs().add(1, 'd'))) {
          const p1 = players[match.player1];
          const p2 = players[match.player2];
          if (p1?.lichessName && p2?.lichessName) {
            await importGame(match.id, date, p1, p2);
          } else {
            console.log(`match ${match.id} skipped because of missing lichess names`, { p1, p2 });
          }
        } else {
          console.log(`match ${match.id} will start in the future ${match.date}`);
        }
      }
    } else {
      console.log(`match ${match.id} skipped`);
    }
  }
}

init();
