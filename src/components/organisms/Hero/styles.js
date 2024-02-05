import styled from 'styled-components'
import { LinearGradient } from 'expo-linear-gradient'

export const HeroContainer = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${({ theme }) => theme.metrics.px(500)}px;
`

export const HeroImageBackground = styled.ImageBackground`
    width: 100%;
    height: 100%;
`
export const HeroGradient = styled(LinearGradient)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
    padding-top: ${({ theme }) => theme.metrics.px(56)}px;
`
export const ButtonsView = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: ${({ theme }) => theme.metrics.px(18)}px;
    width: 100%;
    align-items: baseline;
    justify-content: space-between;


`