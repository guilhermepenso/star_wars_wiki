import styled from 'styled-components'

export const CardContainer = styled.TouchableOpacity`
  width: ${({ theme }) => theme.metrics.px(85)}px;
  height: ${({ theme }) => theme.metrics.px(125)}px;
  border-radius: ${({ theme }) => theme.metrics.px(6)}px;
  overflow: hidden;
  margin-right: ${({ theme }) => theme.metrics.px(12)}px;
`
export const CardImage = styled.ImageBackground`
    width: 100%;
    height: 100%;
`