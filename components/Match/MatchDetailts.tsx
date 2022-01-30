import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { Match } from '../../data/Interfaces';
import DateTime from '../DateTime';
import Flex from '../ui/Flex';

interface Props {
  match: Match;
}

const Icon = styled.div`
  margin-right: 0.5rem;
  color: #aaa;
  display: flex;
  line-height: 1.5rem;
`;

const Divider = styled.div`
  width: 1px;
  height: 1.2rem;
  background-color: #ccc;
  margin: 0 1rem;
`;

const ytIcon = (
  <svg height="1.3rem" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M29.5222 3.66461C29.1848 2.39435 28.1908 1.39393 26.9288 1.05442C24.6413 0.4375 15.4684 0.4375 15.4684 0.4375C15.4684 0.4375 6.29569 0.4375 4.00809 1.05442C2.74604 1.39398 1.75207 2.39435 1.41471 3.66461C0.801758 5.96704 0.801758 10.7708 0.801758 10.7708C0.801758 10.7708 0.801758 15.5746 1.41471 17.8771C1.75207 19.1473 2.74604 20.1061 4.00809 20.4456C6.29569 21.0625 15.4684 21.0625 15.4684 21.0625C15.4684 21.0625 24.6412 21.0625 26.9288 20.4456C28.1908 20.1061 29.1848 19.1473 29.5222 17.8771C30.1351 15.5746 30.1351 10.7708 30.1351 10.7708C30.1351 10.7708 30.1351 5.96704 29.5222 3.66461V3.66461ZM12.4684 15.1323V6.40935L20.1351 10.7709L12.4684 15.1323V15.1323Z"
      fill="currentColor"
    />
  </svg>
);

const twitchIcon = (
  <svg height="1.3rem" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.92 6.0627H19.6565V12.4904H21.92V6.0627ZM15.6991 6.03516H13.4356V12.4658H15.6991V6.03516ZM6.07979 0L0.424316 5.35664V24.6434H7.21123V30L12.8673 24.6434H17.3937L27.5755 15V0H6.07979ZM25.3126 13.9307L20.788 18.215H16.2622L12.3013 21.965V18.215H7.21123V2.14336H25.3126V13.9307Z"
      fill="currentColor"
    />
  </svg>
);

export default function MatchDetails({ match }: Props): ReactElement {
  const { t } = useTranslation(['common']);
  return (
    <Flex alignItems={'center'} justifyContent={'center'}>
      <Flex alignItems={'center'}>
        <Icon>
          <svg height="1.2rem" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.4375 3.75H20.625V0.703125C20.625 0.316406 20.3086 0 19.9219 0H17.5781C17.1914 0 16.875 0.316406 16.875 0.703125V3.75H9.375V0.703125C9.375 0.316406 9.05859 0 8.67188 0H6.32812C5.94141 0 5.625 0.316406 5.625 0.703125V3.75H2.8125C1.25977 3.75 0 5.00977 0 6.5625V27.1875C0 28.7402 1.25977 30 2.8125 30H23.4375C24.9902 30 26.25 28.7402 26.25 27.1875V6.5625C26.25 5.00977 24.9902 3.75 23.4375 3.75ZM23.0859 27.1875H3.16406C2.9707 27.1875 2.8125 27.0293 2.8125 26.8359V9.375H23.4375V26.8359C23.4375 27.0293 23.2793 27.1875 23.0859 27.1875Z"
              fill="currentColor"
            />
          </svg>
        </Icon>
        <div>
          <DateTime dateTime={match.date} />
        </div>
      </Flex>

      {match.videoUrl && (
        <>
          <Divider />
          <Flex alignItems={'center'}>
            <Icon>
              {match.videoUrl.includes('youtube') && <>{ytIcon}</>}
              {match.videoUrl.includes('twitch') && <>{twitchIcon}</>}
            </Icon>
            <a href={match.videoUrl} target="_blank" rel="noreferrer">
              {t('gameAnnotation')}
            </a>
          </Flex>
        </>
      )}
    </Flex>
  );
}
