import { ReactElement } from 'react';

interface LineProps {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export default function Line({ x1, x2, y1, y2 }: LineProps): ReactElement {
  const midX = (x2 - x1) * 0.5 + x1;
  return <polyline points={`${x1},${y1} ${midX},${y1} ${midX},${y2} ${x2},${y2}`} stroke={'black'} fill={'none'} />;
}
