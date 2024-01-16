import styled from '@emotion/styled'

import { bgColor } from '@/functions/themeConfigs/customTheme'

const HeaderBox = styled('section')`
  background-color: ${bgColor.blue};
  width: 15%;
  min-width: 260px;
`

export const Sidebar = () => {
  return (
    <HeaderBox>
      <p>ログイン</p>
    </HeaderBox>
  )
}
