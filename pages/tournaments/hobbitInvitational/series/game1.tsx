import HobbitsPageFrame from '../../../../components/Tournaments/hobbitInvitational/HobbitsPageFrame';
import { ReactElement } from 'react';

export default function Game1(): ReactElement {
  return (
    <HobbitsPageFrame title={'Game 1'}>
      A vs B
      <br />
      Date
      <br />
      Link to video (embedded?)
      <br />
      Result
      <br />
      Series: (on result click open lichess in new tab)
      <table>
        <tr>
          <td>Player A</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>&frac12;</td>
          <td>2&frac12;</td>
        </tr>
        <tr>
          <td>Player B</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>&frac12;</td>
          <td>1&frac12;</td>
        </tr>
      </table>
    </HobbitsPageFrame>
  );
}
