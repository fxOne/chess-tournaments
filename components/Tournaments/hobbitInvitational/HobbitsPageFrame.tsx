import PageFrame, { PageFrameProps } from '../../PageFrame';
import Footer from '../../Footer';
import Menu from './Menu';
import { ReactElement } from 'react';

interface Props extends PageFrameProps {
  withHeroArea?: boolean;
}

export default function HobbitsPageFrame({ children, contentDescription, title, withHeroArea }: Props): ReactElement {
  return (
    <PageFrame contentDescription={contentDescription} title={(title ? title + ' | ' : '') + 'Hobbits Invitational'}>
      <Menu fixed={withHeroArea} onDark={withHeroArea} />
      {children}
      <Footer />
    </PageFrame>
  );
}
