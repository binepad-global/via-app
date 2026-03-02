import {faDiscord, faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
// import {VIALogo} from '../icons/via';
import {BinepadLogo} from '../icons/binepad';
import {CategoryMenuTooltip} from '../inputs/tooltip';
import {CategoryIconContainer} from '../panes/grid';

const ExternalLinkContainer = styled.span`
  position: absolute;
  right: 1em;
  display: flex;
  gap: 1em;
`;

export const ExternalLinks = () => (
  <ExternalLinkContainer>
    <a href="https://binepad.com/" target="_blank">
      <CategoryIconContainer>
        <BinepadLogo height="25px" fill="currentColor" />
        <CategoryMenuTooltip>Binepad</CategoryMenuTooltip>
      </CategoryIconContainer>
    </a>
    <a href="https://discord.gg/jFvmVVUuuB" target="_blank">
      <CategoryIconContainer>
        <FontAwesomeIcon size={'xl'} icon={faDiscord} />
        <CategoryMenuTooltip>Discord</CategoryMenuTooltip>
      </CategoryIconContainer>
    </a>
    <a href="https://github.com/binepad-global/via-app" target="_blank">
      <CategoryIconContainer>
        <FontAwesomeIcon size={'xl'} icon={faGithub} />
        <CategoryMenuTooltip>Github</CategoryMenuTooltip>
      </CategoryIconContainer>
    </a>
  </ExternalLinkContainer>
);
