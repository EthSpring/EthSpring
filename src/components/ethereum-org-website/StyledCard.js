// Copied from
// https://github.com/ethereum/ethereum-org-website/blob/dev/src/components/SharedStyledComponents.js
import styled from 'styled-components';
import Card from './Card';

const StyledCard = styled(Card)`
  margin: 1rem;
  padding: 1.5rem;
  flex: 1 0 30%;
  min-width: 280px;
  max-width: 31%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    max-width: 46%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    max-width: 100%;
  }
`

export default StyledCard;