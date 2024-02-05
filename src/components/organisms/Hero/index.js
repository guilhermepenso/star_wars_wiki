import React from 'react'
import { HeroContainer, HeroImageBackground, HeroGradient, ButtonsView } from './styles'
import { Text, Logo } from '~/components/atoms'
import { Tag, IconButton, PlayButton } from '~/components/molecules'
import { colors } from '~/styles/colors'

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: 'https://s3-alpha-sig.figma.com/img/63ad/549e/710e307adf3dae8f5c62fa912a60110f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OlMnMQgBlRaugA2TkgZ-x4YLos4zXNzAxQ81tNY~FCc~7w6WEP0vrbs0eefhtTNum0mDGAjTIUX8UAjD~qk1xX57~Mtdd1~x4dtFdC5wXMLpoZfv8ZrZXd590siB-9pNFhSDuAYJFwnQlMdb8DChF15yenRlCshDkVvttq679St3Q7i1R9UULTNxcbGVco0GzaBOh1EglZVvdegcV2EsXynMrmKqOBSDrCkbp5AT1yVftD~ER085mc70dyC8OSCCmB72gnqaTpRIgqiljFF3s5V8RFtXV3zatS7hGQlxK-~SGxi5tbQjdEniYLTGjxtbOs3kGxTdA7wOQjBE7b04Og__',
        }}
      >
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          <Logo size="small" />
          <Tag mt={200}>Filme</Tag>
          <Text fontFamily="bold" size={28} mt={8}>
            Episódio I
          </Text>
          <Text size={18}>A Ameaça Fantasma</Text>
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
