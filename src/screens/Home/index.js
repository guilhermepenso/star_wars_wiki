import React from 'react'
import { ScreenScrollContainer, HomeList, Hero } from '~/components'

const FAKE_DATA_CHARACTERS = [
  {
    id: 0,
    image_url:
      'https://s3-alpha-sig.figma.com/img/db70/e6a2/22a05eca5f16406e5f74ecaab09f6151?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M8rd8~yHSnS96hOg4lmzevSXSszSLBBtopAkSUzlK9NVvHvFC6ffQblKmTIaOX5sJuVGWep-RAaVMuKtPbN4nISL8swxZYGrVZc~9VZjhh2ES0meLGt62-T~RhY3uhUBU2P2RgWy3LrgyQQ-7Or8f-yE2UK0aUCue~5GCbKubOzAdmeb0f4iJRUUAXY8WAroSI3wSRm2XVb4RRk2FYPbOy5kx2jlA2PqWiA82qYyy2ie2~pT2BJnxTHfCueq1ocBrMbhUagpNQjKkmIxT6iETS~R9qHB7h5zXKuLBvycf8oWIPMx30uPdpo6TNmzSx8~MAgc0AVHBdFAUz2l01jNmQ__',
      title: 'Darth Vader',
      type: 'Personagem',
      subtitle: 'Anakin Skywalker',
      description: 'Originalmente um escravo em Tatooine, Anakin Skywalker era um Jedi profetizado para trazer equilíbrio à Força. Ele é atraído para o Lado Negro da Força pelo Chanceler Sheev Palpatine/Darth Sidious e se torna um Lorde Sith, assumindo o título de Darth Vader. Após uma batalha de sabre de luz com seu ex-mentor Obi-Wan Kenobi em Mustafar, na qual ele fica gravemente ferido, Vader é transformado em um ciborgue. Ele então serve ao Império Galáctico por mais de duas décadas como seu principal executor. Vader se redime salvando seu filho, Luke Skywalker, e matando Palpatine, sacrificando sua própria vida no processo. Ele também é o marido secreto de Padmé Amidala, o pai biológico da princesa Leia, e o avô de Kylo Ren (Ben Solo). Na continuidade não canônica de Star Wars, ele também é avô de Ben Skywalker, seu epônimo Anakin Solo, Jaina Solo e Darth Caedus (Jacen Solo), e bisavô de Allana Solo.',
  },
  {
    id: 1,
    image_url:
      'https://s3-alpha-sig.figma.com/img/c19b/db6c/3081fcdfb400dc41d0f9f73157f3a01d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U84xI3OaR68JeveUf8oImJqAE1m0exfA2iCbbpNMZm6xJbI7A91MPWf~XZ6Lvz0Barlk-lJQNoaZhAumcFXdpDz5btHVq8U8-PL8Do6dZj1BmP~gjHImjdm~lNtxnsKTc5x4GX2g151U5FDc0XpLgYmOVKLXhyeiI7QMEkKzcKGs1q0ilUE99~-C2qx5veEsMl~8Kb8oMJ8y87c0wPJ9B-rcGftuvDantgBBOwGMHsUpQXTmcK2vnJTwt9eGEw~rvhAO4bxoT31~9cyjve1NkLl49BCsh1UMg9ZVT5XMtCQxqAkgUV9q8huLT0M1nE5DgFfqw-4r99qw1TrG~QEw-w__',
      title: 'Han Solo',
      type: 'Personagem',
      subtitle: 'Mercenário',
      description: 'Han Solo é um mercenário, nativo do planeta Corellia, mas residente em Tatooine. É proprietário da nave espacial Millennium Falcon, antigo cargueiro corelliano, modificado por Solo, descrita por ele como "a nave mais veloz da galáxia" e tem como co-piloto o wookiee Chewbacca. Precisando de dinheiro urgentemente para pagar o credor Jabba the Hutt, Han aceita transportar Luke Skywalker e Obi-Wan Kenobi para o planeta Alderaan.',
  },
  {
    id: 2,
    image_url:
      'https://s3-alpha-sig.figma.com/img/8cd3/bcda/2c4d9bfbd0d1c2074236744863054e57?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyDT0sfM9eWXW~kRwjXFDLPhxk4d06XBtCVGK9CxeA3UtpkG2fkajTyVeNUW7boSp2citAJaAUbzqOX3G50jAkA7Jup5uNfcuOawoKD6PedmMNRypQ512Nvmz2XOrlc6VauX0SrywD6AApQ1vR~oJImZH0hDaUJM00oLPVbOQOF2qmmU0r6YCzNeXC1fl-qYYyqmYxt-b5BFO60~yeQrjk-ciLzpOLixWQk6Py0MjOd~xIyAaNW2F2LOEhkefEnoVbxa5GOyVsOVvqc4vXFbdqkuA4UvLtFIraOJb1KuxDfMzOx3U6hc7IC~jKawR0fvymCxl6g3NITUPWzz8RAVgw__',
      title: 'Leia Organa',
      type: 'Personagem',
      subtitle: 'Leia Amidala Skywalker',
      description: 'Leia Organa (nascida Leia Amidala Skywalker) era uma Humana sensível à Força que serviu como Princesa de Alderaan, membro do Senado Imperial, General da Aliança pela Restauração da República e da Nova República, e a general fundadora da Resistência. Apesar de tudo, ela se tornou fundamental na derrota do Império Galáctico na Guerra Civil Galáctica e liderou a guerra contra a Primeira Ordem. Ela nasceu dezenove anos antes da Batalha de Yavin como filha do Cavaleiro Jedi Anakin Skywalker e da Senadora Padmé Amidala. Depois que sua mãe morreu e seu pai caiu para o lado sombrio da Força para se tornar Darth Vader, Leia foi adotada pela Casa dos Organa. Ela tomou o lugar de seu pai adotivo, Bail Organa, no Senado e ajudou a liderar a batalha contra o Império.',
  },
  {
    id: 3,
    image_url:
      'https://s3-alpha-sig.figma.com/img/215f/cbd6/158eedf6ba4d3ad09398f3857c073dc5?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ju2WrLdO~UQqg0xTpKqLJpt3QDFKaOwSqw4OGi5zFsZXo2IV0JDXfHUTkbY7L1awdWk3W4FuHaUYVWYEaQQ2jNPFwOyXxpKAzQkTGjWPLksN-~dA6v4Y-vGL319r-855q5iZBQqsYVS5cw-1ocQzp2haYifr2EjkO3IZoMIiswdQEMLDeC4TFj60kJAfqOXn1Ay8S712urcClwIm9yo9xa6xLqd67w-96kKRVBy-UokINvMgshF0myV8Gq44HNn~K5xCJPSX4bdoMkjOZaVk2MXXPZkNmu66OIxdvog5wl9wi5hpk3J8ePWpfi3JPJXJyGcIlxL3DXvQC32TsfFRuA__',
      title: 'Luke Skywalker',
      type: 'Personagem',
      subtitle: 'Mestre Jedi',
      description: 'Luke Skywalker, um homem humano sensível à Força, foi um lendário Mestre Jedi que lutou na Guerra Civil Galáctica durante o reinado do Império Galáctico. Junto com seus companheiros, a princesa Leia Organa e o general Han Solo, Skywalker serviu como um revolucionário ao lado da Aliança para Restauração da República–uma organização comprometida com a queda do Império Galáctico e a restauração da democracia. Após a guerra, Skywalker se tornou uma lenda viva e foi lembrado como um dos maiores Jedi da história galáctica.',
  },
]

const FAKE_DATA_MOVIES = [
  {
    id: 0,
    image_url:
      'https://s3-alpha-sig.figma.com/img/492c/54b3/3c4d0037f0f063e412959b3ebfaf8a46?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dn2y7cV6JWcTfY9goHIyxoSkSe33isC-hnTzDbFp-1pOQVp4yetOwlvf6n9S0uzY91bhyZFer0OIsLc0JL4OoL2CPPyTS6U3dqtOtJhsC~u679uVeOyd8qAz7yFTdN6FBWrxMW8ulzwNr5kFSrzETnmaun0MUjfJIgvzYk8kHPJXJ4PJoJ2RJrfn1NZ57ZspQTOHhcZ-WOiAMj3IHXJhCZZ9WciyEwD7irOoFfZ7Lfs4KOE05M9K-YgckkOKkJLRb58QP5Vt~591OsVQOPjF-FNBJJ~ALm-3ZiJgmqRmLuCNGKTn8NJDo1zQwzKO5fjKDZw4Yc7n1WBwrMCOeLromw__',
  },
  {
    id: 1,
    image_url:
      'https://s3-alpha-sig.figma.com/img/e641/bac1/3251fbc354b808f30c4276e509471aaf?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n8dcO8IGVotkdOKJc1NgBWGrDMX1QmpSjjcnCxYMYJbBK-Z~fq3h-P3G-BJ2nPaZ4yNrCtmasvyrbfzGCNHQqGb1SnUuM6nLQGOpKp~FL1RxelJzJ12I02sMxOFYvxtJyq3Zin9J4QHKJYu-OFQrBgNUIEW~auSwXADxLfyBvn05k~RK-46X-TB7OOU3xI5OsslBHXdLeavjX8asqO2nECNhNqzsxfFsj19UKvGGW6ULveNffnhkxb4pw7afLHTJVoLOD2m3fK8s~4Od8VJw9ulS~lK6ur3PgNUH-RTtStpsc8mRzo5lW~WvCm4f1WjL7DJsyNGWEccyxNDv3a3G8w__',
  },
  {
    id: 2,
    image_url:
      'https://s3-alpha-sig.figma.com/img/0902/25ef/93807e3e51ae991b2b44329c7b032a82?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ejuDuKZlZNFAAZlgEXIh~JNZoRTdVGDBl5SbxqR8HUVamSC943i28xhCSKg5MIPKlUKboodFTlj16gENR~OqGGBNq5-Fis6ihIk-pQyAODx3V9li1B3yvcK0hUspxRTT96AFhS4kT-FYQckd4OBYBAPUtIxXBAA-Dk-uRvadWC0Qp9eONEZVLc6QOt4l5IuCOSD2wwx3oAf3lUbQCUviCh1oOfF8BaY6c3cXs-WWOvDIJ9aBPI2s0SlpGktzPHlshlAP6ALT7SK5TEJFXQ0TuCpozoSTnhRmIaM1~0HPvqOdradeMzoqBPDCVlx0fn01fVqik0jr3z3sT3PDQRYcJQ__',
  },
  {
    id: 3,
    image_url:
      'https://s3-alpha-sig.figma.com/img/f44b/43d5/572bffb0dfa5a7790e316e4b004bc736?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HRlJr-IQGsBVZ-mUyDE4wPs6DuCRkoTXEKK0VdAq6rUKeiZZQePy0gX8JmWgjKlt2aqsrdg3p0NrS2S~wwzlCPdUmpFH2YyK~hzpI5vLs4CV96zKvSfQRChKobhFVMwX3BQr~55IIIB-EN23lbAVGLxCd5uqAHGH8ecHkxxXdQ-9Qec80~loz1tpEtF1qjNhVWQK090g-iohS3BdmQvCqkrIcaY37f5kq2zfah~bSnEZnjOzOyjui901K6GqOdofBgRGwmeWjfh5yISQysjuWkU7KHFTo9nQsskhF4xYLjFiBmmFQwEDu~Ciil9GcDivn6r6EswHxxaDkh9QtyS9-A__',
  },
]

export const Home = () => {
  return (
    <ScreenScrollContainer>
      <Hero item={{
        title: 'Episódio I',
        subtitle: 'A Ameaça Fantasma',
        type: 'Filme',
        image_url: 'https://s3-alpha-sig.figma.com/img/63ad/549e/710e307adf3dae8f5c62fa912a60110f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KsWEsomAMev2luXehGlkm0fGpLPNWnZgKBpzrBOjepfDi-M2QruzWWtJAKv3nqJTgXSj7qL4APJIrT9zbP2c5fY9XBPjhJB40-r819oXOgHe9rABLES3DnQtNplxanzVYkqIIrVNsgTY7rorxsyKOGxFWjjnE~i-XDj47dp5ssnZNpnkrtIwxj3RGrVkk5etVGUOihQjBh~ezmK3bPeT4oHPvk4s0pzxAVMoIf1fSZD2d-dDi0TvWNZ27l5pWEtbPleqiuyieL5Eq2G~7WTvm3v5Qa7sx4vQTzoZzYGnNcqU71i0grMbdoDJ-Uni4XWlK0Baet2PF-~t22AmBq9axA__',
      }} />
      <HomeList title="Filmes" data={FAKE_DATA_MOVIES} />
      <HomeList title="Personagens" data={FAKE_DATA_CHARACTERS} />
    </ScreenScrollContainer>
  )
}
