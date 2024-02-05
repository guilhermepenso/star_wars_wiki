import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Text } from '~/components/atoms'
import { PlayButtonContainer } from './styles'
import { theme } from '~/styles/theme'

export const PlayButton = ({ onPress }) => {
  return (
    <PlayButtonContainer onPress={onPress}>
      <Ionicons
        name="play"
        size={theme.metrics.px(20)}
        color={theme.colors.black}
      />
      <Text fontFamily="bold" size={15} color="black">
        Assistir
      </Text>
    </PlayButtonContainer>
  )
}
