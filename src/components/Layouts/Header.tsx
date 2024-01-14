import styled from '@emotion/styled'

import { bgColor } from '@/utils/themeConfigs/customTheme'

const HeaderBox = styled('header')`
  height: 64px;
  background-color: ${bgColor.white};
`

export const Header = () => {
  return (
    <HeaderBox>
      <p>ログイン</p>
    </HeaderBox>
  )
}
