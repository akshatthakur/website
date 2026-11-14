import styled from 'vue-styled-components'

export const Linked = styled.a`
&::after {
  width: 0%;
  content: "";
  height: 2px;
  background: #3B70A2;
  position: absolute;
  left: 0;
  bottom: -3px;
  transition: width 0.3s;
}

&:hover::after {
  width: 100%;
}
`

export const Subtitle = styled.h2`
  font-size: 16px;
  margin: 0px 0px 10px 0px;
  line-height: 1.45;
  letter-spacing: 0.3px;
  font-weight: 400;
  font-style: italic;
`

export const Paragraph = styled.p`
  font-size: 18px;
  margin: 0px 0px 20px 0px;
  line-height: 1.6;
  letter-spacing: 0.1px;
  font-weight: 300;
  margin-bottom: 0;
`
export const Heading = styled.h2`
  font-size: 18px;
  margin-bottom: 4px;
  letter-spacing: 1px;
  font-weight: 400;
`
