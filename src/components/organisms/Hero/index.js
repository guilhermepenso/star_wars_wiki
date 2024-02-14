import React from 'react'
import { HeroContainer, HeroImageBackground, HeroGradient, ButtonsView } from './styles'
import { Text, Logo } from '~/components/atoms'
import { Tag, IconButton, PlayButton } from '~/components/molecules'
import { colors } from '~/styles/colors'

export const Hero = ({ item, withoutLogo }) => {
  const { image_url, title, subtitle, type } = item;
  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: image_url,
        }}
      >
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          {!withoutLogo && <Logo size="small"/>}
          <Tag mt={withoutLogo ? 224 : 200}>{type}</Tag>
          <Text fontFamily="bold" size={28} mt={8}>
            {title}
          </Text>
          <Text size={18}>{subtitle}</Text>
          <ButtonsView>
            <IconButton label={"Favoritos"} iconName={"add-circle-outline"}/>
            <PlayButton />
            <IconButton label={"Saiba mais"} iconName={"information-circle-outline"}/>
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}
