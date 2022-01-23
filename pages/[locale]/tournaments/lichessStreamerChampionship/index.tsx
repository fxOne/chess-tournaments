import { Trans, useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import styled from 'styled-components';
import LichessStreamerChampionshipPageFrame from '../../../../components/PageFrames/LichessStreamerChampionshipPageFrame';
import Button from '../../../../components/ui/Button';
import Center from '../../../../components/ui/Center';
import FormRow from '../../../../components/ui/FormRow';
import { getStaticPaths, makeStaticProps } from '../../../../lib/getStatic';
import { routing } from '../../../../routing';

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 10rem;
  font-size: 1.1rem;

  @media screen and (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const Divider = styled.div`
  height: 1px;
  grid-column: 1 / -1;
  background-color: #ddd;
`;

const Header = styled.h2`
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

export default function Home(): ReactElement {
  const { t } = useTranslation(['common']);
  return (
    <LichessStreamerChampionshipPageFrame
      landingPage
      showButton
      contentDescription={t('lichessStreamerChampionship:index.contentDescription')}
    >
      <h1>{t('lichessStreamerChampionship:tournamentName')}</h1>
      <p>
        {t('lichessStreamerChampionship:index.introduction1')}{' '}
        <a href={'https://www.twitch.tv/chesshobbits99'} target="_blank" rel="noreferrer">
          ChessHobbits99
        </a>
        .
      </p>
      <p>{t('lichessStreamerChampionship:index.introduction2')}</p>
      <Header>{t('announcement')}</Header>
      <FormGrid>
        <FormRow
          title={t('venue')}
          description={
            <Trans i18nKey="lichessStreamerChampionship:index.venue">
              <a href={'https://www.twitch.tv/chesshobbits99'} target="_blank" rel="noreferrer"></a>
              <a href={'https://lichess.org/'} target="_blank" rel="noreferrer"></a>
            </Trans>
          }
        />

        <Divider />

        <FormRow
          title={t('commentators')}
          description={
            <Trans i18nKey="lichessStreamerChampionship:index.commentators">
              <a href={'https://www.twitch.tv/chesshobbits99'} target="_blank" rel="noreferrer"></a>
            </Trans>
          }
        />

        <Divider />

        <FormRow title={t('date')} description={t('lichessStreamerChampionship:index.date')} />

        <Divider />

        <FormRow
          title={t('dispensingSystem')}
          description={
            <>
              {t('lichessStreamerChampionship:index.dispensingSystem1')}
              <ul>
                <li>{t('lichessStreamerChampionship:index.dispensingSystem2')}</li>
                <li>{t('lichessStreamerChampionship:index.dispensingSystem3')}</li>
                <li>{t('lichessStreamerChampionship:index.dispensingSystem4')}</li>
              </ul>
              {t('lichessStreamerChampionship:index.dispensingSystem5')}
            </>
          }
        />
      </FormGrid>

      <br />
      <br />
      <br />

      <Center>
        <Button text={t('gotoPairings')} target={routing.de.tournaments.lichessStreamerChampionship.pairings} />
      </Center>
    </LichessStreamerChampionshipPageFrame>
  );
}
