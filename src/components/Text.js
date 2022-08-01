import styled from 'styled-components';

export const Text = styled.p`
  ${(props) => `
font-size: ${props.fontSize}px;
line-height: ${props.lineHeight}px;
font-weight: ${props.fontWeight};
color: ${props.color ? props.color : '#000000'};
`}
  ${(props) => props.colorHover && `&:hover { color: ${props.colorHover} }`}
  ${(props) => props.underlined && 'text-decoration: underline;'}
    ${(props) => props.mb && `margin-bottom: ${props.mb}px;`}
    ${(props) => props.mr && `margin-right: ${props.mr}px;`}
    ${(props) => props.ml && `margin-left: ${props.ml}px;`};
`;
