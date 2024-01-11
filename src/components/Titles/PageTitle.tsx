import styled from '@emotion/styled'

import { fontSize, fontWeight, textColor } from '@/utils/themeConfigs/customTheme'
const BasePageTitle = styled('h1')`
  font-size: ${fontSize.xxxx};
  font-weight: ${fontWeight.bold};
  letter-spacing: 0.25em;
  position: relative;
  text-align: center;
  line-height: 1.4;
  padding: 0.25em 1em;
  display: inline-block;

  &:before,
  &:after {
    content: '';
    width: 20px;
    height: 30px;
    position: absolute;
    display: inline-block;
  }

  &:before {
    border-left: solid 2px ${textColor.white};
    border-top: solid 2px ${textColor.white};
    top: 0;
    left: 0;
  }

  &:after {
    border-right: solid 2px ${textColor.white};
    border-bottom: solid 2px ${textColor.white};
    bottom: 0;
    right: 0;
  }
`

interface PageTitleProps {
  title: string
}
export const PageTitle = ({ title }: PageTitleProps) => {
  return <BasePageTitle>{title}</BasePageTitle>
}
