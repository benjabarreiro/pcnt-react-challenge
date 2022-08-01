import styled from 'styled-components';

export const Title = styled.h2`
  ${(props) => `
font-size: ${props.fontSize}px;
line-height: ${props.lineHeight}px;
`}
  ${(props) => props.mb && `margin-bottom: ${props.mb}px;`}
  ${(props) => props.mr && `margin-right: ${props.mr}px;`}
`;
