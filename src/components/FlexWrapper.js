import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  ${(props) => props.justify && `justify-content: ${props.justify}`};
  ${(props) => props.mb && `margin-bottom: ${props.mb}px;`}
  ${(props) => props.px && `padding: 0 ${props.px}px;`}
`;
