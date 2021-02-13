import PageFrame, { PageFrameProps } from '../../PageFrame';
import Footer from '../../Footer';
import Menu from './Menu';
import { ReactElement } from 'react';

export default function HobbitsPageFrame({ children, contentDescription, title }: PageFrameProps): ReactElement {
  return (
    <PageFrame contentDescription={contentDescription} title={(title ? title + ' | ' : '') + 'Hobbits Invitational'}>
      <Menu />
      {children}
      <Footer />
    </PageFrame>
  );
}
