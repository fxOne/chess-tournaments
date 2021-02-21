import PageFrame, { PageFrameProps } from '../../PageFrame';

import ContentContainer from '../../ui/ContentContainer';
import Footer from '../../Footer';
import Hero from './Hero';
import Menu from './Menu';
import { ReactElement } from 'react';

interface Props extends PageFrameProps {
  landingPage?: boolean;
}

export default function HobbitsPageFrame({ children, contentDescription, landingPage, title }: Props): ReactElement {
  return (
    <PageFrame contentDescription={contentDescription} title={(title ? title + ' | ' : '') + 'Hobbits Invitational'}>
      <Menu fixed onDark />
      <Hero bigHeroContainer={landingPage} />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </PageFrame>
  );
}
