import domtoimage from 'dom-to-image';
import { Download } from 'lucide-react';
import { ReactElement, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { Bracket, Matches, Players } from '../../data/Interfaces';
import { calculateBracketPositions, calculateLines, calculateSvgSize } from './Calculations';
import Line from './Line';
import Match from './Match';

interface TournemantBracketProps {
  brackets: Bracket[][];
  matches: Matches;
  players: Players;
  getLinkUrl(id: number): string;
  downloadFileName: string;
}
const OuterWrapper = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  font-size: 16px;
`;
const DownloadButton = styled.div`
  position: absolute;
  bottom: 30px;
  right: 10px;
  cursor: pointer;
`;

export default function TournamentBracket({
  brackets,
  matches,
  players,
  getLinkUrl,
  downloadFileName,
}: TournemantBracketProps): ReactElement {
  const { bracketPositions, height, lines, width } = useMemo(() => {
    const bracketPositions = calculateBracketPositions(brackets, matches, players);
    const { width, height } = calculateSvgSize(bracketPositions);
    const lines = calculateLines(bracketPositions);
    return { bracketPositions, height, lines, width };
  }, [brackets, matches, players]);

  const ref = useRef<SVGSVGElement>(null);

  return (
    <OuterWrapper>
      <Wrapper>
        <svg width={width} height={height} ref={ref} xmlns="http://www.w3.org/2000/svg">
          <g>
            {[...bracketPositions.values()].map(({ match, player1, player2, x, y }) => {
              return (
                <Match
                  key={match.id}
                  match={match}
                  player1={player1}
                  player2={player2}
                  y={y}
                  x={x}
                  getLinkUrl={getLinkUrl}
                />
              );
            })}
          </g>
          <g>
            {lines.map((line, i) => (
              <Line key={i} {...line} />
            ))}
          </g>
        </svg>
        <DownloadButton
          onClick={async () => {
            if (ref.current) {
              const png = await domtoimage.toPng(ref.current);
              const link = document.createElement('a');
              link.href = png;
              link.download = downloadFileName;
              link.click();
            }
          }}
        >
          <Download />
        </DownloadButton>
      </Wrapper>
    </OuterWrapper>
  );
}
