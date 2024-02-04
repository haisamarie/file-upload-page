import styled from '@emotion/styled'

const HeaderBox = styled('header')`
  height: 64px;
  background-color: white;
`

export const Header = () => {
  return (
    <HeaderBox>
      <p>ログイン</p>
    </HeaderBox>
  )
}
