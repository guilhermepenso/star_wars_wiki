import React from 'react'
import { ScreenScrollContainer, HomeList, Hero } from '~/components'

const FAKE_DATA_CHARACTERS = [
  {
    id: 0,
    image_url:
      'https://s3-alpha-sig.figma.com/img/db70/e6a2/22a05eca5f16406e5f74ecaab09f6151?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MKJT58k0xqTnlOJK6OVw0BbhXx6QniekV3LknRxADs-eTd5rAtSpsQA5jHAtX0vwmRUYb24oMi-gO4szHsZRM1awbSmjvA3AAg7TUGIu~2QjqGUl9GGv2~gEUN4B5YCmxEiL562IUDY780nKycWfMqYGGooalytS41OHrgYGFmvyLqhaPg4Mk0owKM3vDkR2RkfcrDRvf4f2kSEyRGtaTHljaH0KFuE8vBrRa2-LWPgYQQcbjW8~o9I4wRfES0ExNO7h~O7jUunQoFfgWplQSBDCrpAgWlcc3v7NmpevnpFTkVbEgXB3dXKKa-oxyC5rt7LmKdbRUgBg1ruNrtt1wg__',
      title: 'Darth Vader',
      type: 'Personagem',
      subtitle: 'Anakin Skywalker',
      description: 'Originalmente um escravo em Tatooine, Anakin Skywalker era um Jedi profetizado para trazer equilíbrio à Força. Ele é atraído para o Lado Negro da Força pelo Chanceler Sheev Palpatine/Darth Sidious e se torna um Lorde Sith, assumindo o título de Darth Vader. Após uma batalha de sabre de luz com seu ex-mentor Obi-Wan Kenobi em Mustafar, na qual ele fica gravemente ferido, Vader é transformado em um ciborgue. Ele então serve ao Império Galáctico por mais de duas décadas como seu principal executor. Vader se redime salvando seu filho, Luke Skywalker, e matando Palpatine, sacrificando sua própria vida no processo. Ele também é o marido secreto de Padmé Amidala, o pai biológico da princesa Leia, e o avô de Kylo Ren (Ben Solo). Na continuidade não canônica de Star Wars, ele também é avô de Ben Skywalker, seu epônimo Anakin Solo, Jaina Solo e Darth Caedus (Jacen Solo), e bisavô de Allana Solo.',
  },
  {
    id: 1,
    image_url:
      'https://s3-alpha-sig.figma.com/img/c19b/db6c/3081fcdfb400dc41d0f9f73157f3a01d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gF86uT7tATD17Y4PmFFAKtHYDZaa43PKdCESWPEGhrmx4rud-ydrrctsDTXwBCXblLK~HLogwjwgNmHMqKA1Z~UIEI1IquB8fw51pR5neBRytN0~plAQx1gYhyKfasOz3R7q95W8KqRaVJqQNgireO5aGfCiqstFKUcXdOPiJd6jLR-2G~Z26Da91xWt99~uNzMAdjMNNC67ukn~WL0Ti-bzSQEVzTg5YTsMpO2S7GNxZSrgeT5sO5JiQ66gV1ceR6Oqy905dwqLmCHclLR-1CC3yTF1xqYmtuT-S5VR~fMeRNVLKuW~m7c4doL60sXoqBQC4etigVyGfke6LKPnvg__',
      title: 'Han Solo',
      type: 'Personagem',
      subtitle: 'Mercenário',
      description: 'Han Solo é um mercenário, nativo do planeta Corellia, mas residente em Tatooine. É proprietário da nave espacial Millennium Falcon, antigo cargueiro corelliano, modificado por Solo, descrita por ele como "a nave mais veloz da galáxia" e tem como co-piloto o wookiee Chewbacca. Precisando de dinheiro urgentemente para pagar o credor Jabba the Hutt, Han aceita transportar Luke Skywalker e Obi-Wan Kenobi para o planeta Alderaan.',
  },
  {
    id: 2,
    image_url:
      'https://s3-alpha-sig.figma.com/img/8cd3/bcda/2c4d9bfbd0d1c2074236744863054e57?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kkj2U2aR2R5T~ZzlKSz9sLEcJOOKMUnhGjJSZd1EhE8EBrZAuoMDN10uI4dvjwfeNPGY187c4eFwZQhINrt0aUzZ40Ugh2KbZ1JcyR0m~SkamN3DZmydBcNntolfj-OnOR0FIxPgO4jQYzBbuR765XMxGY4738V5UHMQCf1tRn7zghxm9xaxd~UoUICurGVelueQ7N7rAYyYbygrlv9~7thm6eJjdMd-TsA5ZgmGlgYimV0y6xJFliL2hZrwCgV1OhGrGXQy9Yq1cdPfgMtcZG88WTpRSZn~Isvl2WEevUPSsbJLBhnC0b2Yjoc2zGC4dARSwX6-LqgNcLdvVe3fVg__',
      title: 'Leia Organa',
      type: 'Personagem',
      subtitle: 'Leia Amidala Skywalker',
      description: 'Leia Organa (nascida Leia Amidala Skywalker) era uma Humana sensível à Força que serviu como Princesa de Alderaan, membro do Senado Imperial, General da Aliança pela Restauração da República e da Nova República, e a general fundadora da Resistência. Apesar de tudo, ela se tornou fundamental na derrota do Império Galáctico na Guerra Civil Galáctica e liderou a guerra contra a Primeira Ordem. Ela nasceu dezenove anos antes da Batalha de Yavin como filha do Cavaleiro Jedi Anakin Skywalker e da Senadora Padmé Amidala. Depois que sua mãe morreu e seu pai caiu para o lado sombrio da Força para se tornar Darth Vader, Leia foi adotada pela Casa dos Organa. Ela tomou o lugar de seu pai adotivo, Bail Organa, no Senado e ajudou a liderar a batalha contra o Império.',
  },
  {
    id: 3,
    image_url:
      'https://s3-alpha-sig.figma.com/img/215f/cbd6/158eedf6ba4d3ad09398f3857c073dc5?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UcCt2Su1Y9On5534URoj9XXDhmWMnkCsKsJ04U0qNHMU1nLRCTrh~IulHqXqr4pOCrCdaDuadbk~u80mXCmHLjv9XeUXeUrpbqX2cpc2KTqoz37waoWRH5OVPtUIz~tU08OFUsZB2enjw77cv33slGLhfDDIwdXWvsuAY0cOIHD9YUITyeNAOjlGFGqAXST3qLsyMfBA8heW~9wl5nlvEy0ysVaTaxSB25ABkz-7W-bSzreYPjr9q80aT4IhsW399qAdEB~J83-8KB-T9sfYZ1x9ncbQU4vNvynRw04C0qVBKAWNk6j0sC8Q2TshPs3sHIIRvI~4mRBq-MHnmwKPZg__',
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
      'https://s3-alpha-sig.figma.com/img/e641/bac1/3251fbc354b808f30c4276e509471aaf?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eoqmZ4xi7iL-tHQ-BrxhLV62GfoHvI6H051ZFkG4lqI2yYz2x0TCiwjLWEIL0G2Ix49nIobwd0JCdMKlEIzVQi08mZy6tXFMNupxK805W0mqu2s10ZMj2n9ok1YiBwBXlJwY05QY~MeV6R~ZuP4ZSizd7wO9CjarU-PGLOzy0~~HgLGLrlMWUI551EgrXScgKoMgcP6jRq--PKF6HpDiMOfgO7kQj8Lkth7XAmNxZrTyB~DJvkCHYudpr0JI4dxq0fcdFL93-uskZSyJJv5T8Pw87ZlFjGyTmRKFw8rDJL6wbKsqoDG92It3aHMJl5CCx~GT~wUKBM846nDSLDlYDA__',
  },
  {
    id: 1,
    image_url:
      'https://s3-alpha-sig.figma.com/img/0902/25ef/93807e3e51ae991b2b44329c7b032a82?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MMbUKoWHcNGqz1Axk6tIMgrXCKA64axe3SDmGI9o25bvHWBmhsxTWJm3IdMV3T8WXiiEt87T1a-6bywD2jN5q7h09q2AXOyRU41r5Io5UZJQmGlJg3PZknYky7dGS8dCot9DBW4n5JQxgmqIEYaZjPl8Dl3pBK4dz9ryB-9VEwXmu2GPrOHVLuN284N1ADnffnmDPpBfwQWE86L9gEFzh5HZhTKCGO8VVQQvqmuaHIS6XtH-cB0Khze2QoWmBPRX04gnfLkKFeLfJOqm~qr~8EdXRoWZHDxSwMEwgwADYA3fO5vw~y8XKd9AYn3vqTnR~3Qm8FfyJAsnhh22fVpQDQ__',
  },
  {
    id: 2,
    image_url:
      'https://s3-alpha-sig.figma.com/img/f44b/43d5/572bffb0dfa5a7790e316e4b004bc736?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h8aurc2PL~ODBytFSZWVk3JBdNuYxri0Lwy5tL-Sqp-SoTlEJDawu0~vDXAW2y0QtBXk4xSYmjPdQZPfZfRtt-CyAaEDrS3acq7hzKL5iMlMw-WjYlq6ffs6EljcgKYztMr0SmBTUlRWQYxPJnxBSrOgj-xDyPhvZwvd5DdPBtvRWg6xGBOsx6DkMPKHuXbocR6QI-OqN2yKziS-gfcdjQWxy3Hd-sSAPcjATDni-7hkXnLW56hdJCkGq2XTE1BWJ06jTm6zIqHIWjZ8UXVP7fw6Fm7Er5ZIbGZOHAXqZhxg6KZU44d5rbIKMGBvcm0Wp3f5sign6ctWU4QJ6JO~qQ__',
  },
  {
    id: 3,
    image_url:
      'https://s3-alpha-sig.figma.com/img/9fca/ab84/bfbe5269a594b1faf90aa78a3374b26e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZN6Piyr8OfvI9-pZ9-WeREx7k52kvCUA6uDsP0-PlcQPLYOSwi7GsmyQNtCe~omjF3R58o1atpoWuda5Azanf8i1Quw0Qel1kg4V-Jm-5G5BJVBDXHX75HVyfdoymNoX5awmJAax4DRqHfwJ2VnNzS1mPm5ZuO9Q5lEZnsNWu40Ryvm511uzAExS0IGfQCIkxPqie~MHitgiWBOjSNhQX1xa5x3b34QESrh2iWNDWoJJ9q65DW0cBWto~~BhbIC8MkrPZyv9wmRMrQFsggyen0GwiCR10d9cmjGMvobmIKW2irt~nws3MEpHSXku2fBHGlAfalG5P3IUkP6AMDyL7w__',
  },
]

export const Home = () => {
  return (
    <ScreenScrollContainer>
      <Hero item={{
        title: 'Episódio I',
        subtitle: 'A Ameaça Fantasma',
        type: 'Filme',
        image_url: 'https://s3-alpha-sig.figma.com/img/63ad/549e/710e307adf3dae8f5c62fa912a60110f?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qgBwm5ikW2dPpL425zuP0yemxhB2Xmm0v6zCZwFDtxktehstjDrMawRV~D-pwFMxKsFpuCbMu5k-xCCVCN4vqkAyp0uyYAmR4P3rX0HTsOnwGCIRfWenawESUy5QC5e0QLs7~LyPJHVT680iRlNbhPsp8Byav9-yeXVuB~mbPJYQbyk8J72K~womBLizIPz2EaUnxhPes8AXVrpCF9o7GG1EyvJP~l2EApeBCLdT5JS3pP~WvjoqUZkKjEXTv17pEksA02O9KibcvYBXKMShG~sqMW0E3bwiKGdPpb-pGtFHQSiRXPXr2wpr78mrfNROcweO9Jnj1s6sYiZ5x1CjYQ__',
      }} />
      <HomeList title="Filmes" data={FAKE_DATA_MOVIES} />
      <HomeList title="Personagens" data={FAKE_DATA_CHARACTERS} />
    </ScreenScrollContainer>
  )
}
