import { PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';
import Link from '../Link';

interface Tab {
  name: string;
  link: string;
  isActive: boolean;
}

interface TabContentProps {
  tabs: Tab[];
}

const Header = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 0.5em;
  justify-content: center;
`;

interface TabProps {
  isActive: boolean;
}

const Tab = styled.div<TabProps>`
  margin: 0 0.5em;
  padding: 2px 0.5em;
  color: black;
  border-bottom: ${({ isActive }) => (isActive ? '3px solid #ead9bb' : '0')};

  a {
    color: black;
    text-decoration: none;
  }
`;

export default function TabContent({ children, tabs }: PropsWithChildren<TabContentProps>): ReactElement {
  return (
    <div>
      <Header>
        {tabs.map(({ link, name, isActive }) => (
          <Tab key={link} isActive={isActive}>
            {!isActive && <Link href={link}>{name}</Link>}
            {isActive && name}
          </Tab>
        ))}
      </Header>
      {children}
    </div>
  );
}
