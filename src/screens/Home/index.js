import React from 'react'
import { ScreenScrollContainer, HomeList, Hero } from '~/components'

const FAKE_DATA_CHARACTERS = [
  {
    id: 0,
    image_url:
      'https://s3-alpha-sig.figma.com/img/db70/e6a2/22a05eca5f16406e5f74ecaab09f6151?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SJglljSEYxiwN6Y3YOeFAPYbgms9EslTmLENshiS2-GpLpCfRecqe9e34UyiEA1VaA-XcDYX3v~ZZ2Jf~np2-2Gpew9RiAJ4xgr06ZkbC87~c~l-Uh-os~BrfXttT4PLXFi-PCBJpaRmhjSIQObydSIbnMgPgTl80HJZUu9PUpqtR0GOr~jh7EKWbKqjtJVWWQTzmoBSmQiU7Jn1hlMWZneuhPIozkGMKA~5p-NuJFRHci5yt804KrUnx8mvNAFXqoiQRkcEt1aBBa2AG~0S3qwFw7Ci~8nnPZ8EykJtz4uarzsuilUAuPtwYWn7xWYmj2sauh2R~M1O9-POdYA2~w__',
      title: 'Darth Vader',
      type: 'Personagem',
      subtitle: 'Anakin Skywalker',
      description: 'Originalmente um escravo em Tatooine, Anakin Skywalker era um Jedi profetizado para trazer equilíbrio à Força. Ele é atraído para o Lado Negro da Força pelo Chanceler Sheev Palpatine/Darth Sidious e se torna um Lorde Sith, assumindo o título de Darth Vader. Após uma batalha de sabre de luz com seu ex-mentor Obi-Wan Kenobi em Mustafar, na qual ele fica gravemente ferido, Vader é transformado em um ciborgue. Ele então serve ao Império Galáctico por mais de duas décadas como seu principal executor. Vader se redime salvando seu filho, Luke Skywalker, e matando Palpatine, sacrificando sua própria vida no processo. Ele também é o marido secreto de Padmé Amidala, o pai biológico da princesa Leia, e o avô de Kylo Ren (Ben Solo). Na continuidade não canônica de Star Wars, ele também é avô de Ben Skywalker, seu epônimo Anakin Solo, Jaina Solo e Darth Caedus (Jacen Solo), e bisavô de Allana Solo.',
  },
  {
    id: 1,
    image_url:
      'https://s3-alpha-sig.figma.com/img/c19b/db6c/3081fcdfb400dc41d0f9f73157f3a01d?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mq-fmDk3lfX700yg5zFi~xZJ8xEnV7OvqCFTFQJ6BTBLY0iRpos7czOmQBr90D8Qzq6bnb-xEZtr5ZrSygFwNTa3y~4naVyRfgVi2jgGhSAijgfHZdKn94i9he72CkA83SPIsksL0qn4hkOnVNqBx~~coW3NIPpjI2dp9zv8MKnpasxb-RRVqGQ13HIz8ppQldU4X6Ocyt~VnALF4xeooireRE4tjK49Hy~rHGUg16KjzvHubu2BZ3S5FFwdZhMdepfrtxDCZ8e3kw564sikK7l~pniKAICiUJ43Ij~JA5BX1kAwGCd2V3gwN-z6pWua1hlZ1ZAdvdT8ONb93sAS5g__',
      title: 'Han Solo',
      type: 'Personagem',
      subtitle: 'Mercenário',
      description: 'Han Solo é um mercenário, nativo do planeta Corellia, mas residente em Tatooine. É proprietário da nave espacial Millennium Falcon, antigo cargueiro corelliano, modificado por Solo, descrita por ele como "a nave mais veloz da galáxia" e tem como co-piloto o wookiee Chewbacca. Precisando de dinheiro urgentemente para pagar o credor Jabba the Hutt, Han aceita transportar Luke Skywalker e Obi-Wan Kenobi para o planeta Alderaan.',
  },
  {
    id: 2,
    image_url:
      'https://s3-alpha-sig.figma.com/img/8cd3/bcda/2c4d9bfbd0d1c2074236744863054e57?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gk4QvwBeVo~B6p5oy4PVYbyhg~gV815-qIJsvpmgERb8WD8iNSQd4r5tIfjp2NYDWE1Lo9HxLO5LoPMIAMPVCTMHK4yvKHU8d5ZltH8mp~QYk08PoU9bnon6fnLSGHTT6kVn-Z0utw7cSzD6PMqRoLtgZD5SqAFzB24mKfzMoBICXk5PJtQHINY6-BSv03mSny~H8R8vI9VspbE-voWgrLZk0sieD6P5axtSrge0pVx0QVateEywwooIde90Fla7bpXqHi3kM281dEyIQB1CAK1YEtZY2x7Z9GKUkyoTtlK5frm4ZL-PuasqaiJiK5e-DuFRbTGiDdJ8ma4Jmz6HMw__',
      title: 'Leia Organa',
      type: 'Personagem',
      subtitle: 'Leia Amidala Skywalker',
      description: 'Leia Organa (nascida Leia Amidala Skywalker) era uma Humana sensível à Força que serviu como Princesa de Alderaan, membro do Senado Imperial, General da Aliança pela Restauração da República e da Nova República, e a general fundadora da Resistência. Apesar de tudo, ela se tornou fundamental na derrota do Império Galáctico na Guerra Civil Galáctica e liderou a guerra contra a Primeira Ordem. Ela nasceu dezenove anos antes da Batalha de Yavin como filha do Cavaleiro Jedi Anakin Skywalker e da Senadora Padmé Amidala. Depois que sua mãe morreu e seu pai caiu para o lado sombrio da Força para se tornar Darth Vader, Leia foi adotada pela Casa dos Organa. Ela tomou o lugar de seu pai adotivo, Bail Organa, no Senado e ajudou a liderar a batalha contra o Império.',
  },
  {
    id: 3,
    image_url:
      'https://s3-alpha-sig.figma.com/img/215f/cbd6/158eedf6ba4d3ad09398f3857c073dc5?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I6zSoDIvYjvSHPrN4eWaXvCivHasbnGf6RkI8ccoU4HJq0bujNCudfuQdPx9NzwxJ-jpoWrxVM-yxxZt3ZhiZVRewwrKfWoddhCi2c9tssyDA-P6o4NmE-54Vt9oZqYdkiwZaqll-AEiS-T8EfgHL72uZ7eH6Hk6IlhjodQ4PsDc01oifYLtZN8Ut9JPcs4X8C8QDP7GRIm2AjTmIwpK-drnVzk96y7-NMQFWU1Oiypy2842fDlqnetEQUsZjt~3OxfvVd-rN7uW7-PgRWCMWEdJ2LuPq0OOO6KT5BPV~x7k8jo41TW6kXMxTCYJKne78Vv2oLF5LIRy38XFY71ISA__',
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
      'https://s3-alpha-sig.figma.com/img/492c/54b3/3c4d0037f0f063e412959b3ebfaf8a46?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bfG7aXDUohlnjAhoEO8U3S9RkWY~lWxsMMVBpQlm0aHOwIlUo~IC~njiXtU3OMlknZkiUdSnmFDhpJ32xc~PulA9BDmyH5IYisepkYf0TLm8OAQ1b55ZUX85AC2n1ouutHZieiIUjqy-bR9wuEnGKoWu4rAGf8F9KDMmFnfu8njB6sQvqLXBWjmk41RzeUAELUoJENZuonZGy7oNIm2qxoLGt0U5pCrgsGkiWjJ4uqoKc7d3KNjVp1gpivi9KNzLR939E1xg463MwiIuaulO0a5h7xFZ77zw-C2tCf0xVqQcjlvb5mzTFdyOTH0Tsn8kIoXjxXMnLHvFqzEyvvnYgg__',
  },
  {
    id: 1,
    image_url:
      'https://s3-alpha-sig.figma.com/img/e641/bac1/3251fbc354b808f30c4276e509471aaf?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ohBqRB-ARDOVizjhFpgpf-rQF61gaYC6xbr72fNq-C~Xu8PMgREFp9P0LKnBlDxVlwBID099kNkgGzLKvPLaOvodZTiMk0T2xHlPlvWcKvfLj9-sMrqoKmIGuvmnFoSxByTlHtmQKeeilhRhI7xeSYimjmXM~pHFw301Ao3zEChh96zsVQbkC-TwbFJQnC0w1VslucD0bEPTGXREaI9SMt1u6CN5eRR-s7GrsLexLdkjPeP0z~NuTuPnU7iT0i-Ggpljn9lIrn8pXdsSdmFap-z6S2OPcvx1uz2hB6gZsOAkqQzsNymoXHVeubPkEtpSq-BrKH13p93MiPatkuqT1w__',
  },
  {
    id: 2,
    image_url:
      'https://s3-alpha-sig.figma.com/img/0902/25ef/93807e3e51ae991b2b44329c7b032a82?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gr0JiXxpBQFYvHE7xOh~kAPvUfTsGXHkvAOnD89yvL1VzxY7RNn~La0vqxt-C3C4AGbu-XX46Vrm1MxOO4WgngaUXXtsCH7uo1l18nvOE6Cmww1BVVQrTGWuyLBddewZFLaOjXe8eDWHZMMtG5F8OA9lQd67cDK7dGYmIcyxknjClSo~SQMaEitDaegkaNQyMfSubWAUo8T~L1Pnt6YvjkgOWROQEydtvyFdzOpfTXVtfTCGAw8Uimu4GKqc1TQZHKUBD5KUaeF0SireL5rEfHAkK6xn-Xe7gSj7DqjjnliWjFa6ZIFF7x4wG0mEUeZyqCCCn4IP-08xaF1A3xcejA__',
  },
  {
    id: 3,
    image_url:
      'https://s3-alpha-sig.figma.com/img/f44b/43d5/572bffb0dfa5a7790e316e4b004bc736?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MkfZCdac1gmsyJsNZk4H2kx3dPm-KZYNKoYJ35-i7kGotXgBiUAOtVrOtBUV59r2h0oPyXy5yo9LOkMxWgPhIn56hDhIYT-q6gT5Ciln52ekWYwsE2mC-I~mORUXSO19bZeSX-cfAUw3qMMBGlQQ5RLHt6kMwv9JL4bPUnCGkZHS2UhFdauBlq3zK1ABNz8fdN8b5T7JybgEmCyFfwGLSDq-iapyX9OJkaN2s9-nJ3PRrzd9OZm6rMyk6M0rgCzhdrUws5aM-hLEiU9BNRQXHa-JTOCbJIm6jfyHbSEMj1A4Lgvy2hicWfKkSvVd6BpJvLHQen9-ZZdWjdS4naRu7g__',
  },
]

export const Home = () => {
  return (
    <ScreenScrollContainer>
      <Hero item={{
        title: 'Episódio I',
        subtitle: 'A Ameaça Fantasma',
        type: 'Filme',
        image_url: 'https://s3-alpha-sig.figma.com/img/63ad/549e/710e307adf3dae8f5c62fa912a60110f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SadIUqZkoj2wOlwNYQ466dsHGG23LVqy6ziJ7J~T2KgNC2GswYCnlCZgKi0Hhtd7i-jFJCPG7AinSKVqJKODFOiOhzrdvYPVpdXEn~xoZN6s7PcXGgydNI7v5ik5DwOWnWRc-XyVJc1tYDeu2LJig5fvBaQ0EKXYDn-D0xaZerzQVXDBbt9fKHAJgkqOb1mJgxFZrK6bvHG0K3UV~xbm3cHq4JHOmB7cF~8n~q0pd-c06n0o7uqNUaBvr4VJMWckkhPnR08oGcH7tzJEwsG62dnE4ip3JQr2VQ4la78LVyQo9IpJnLpNF13iV5gYTaP4ewSoozzyM10bZkpfb1yRKQ__',
      }} />
      <HomeList title="Filmes" data={FAKE_DATA_MOVIES} />
      <HomeList title="Personagens" data={FAKE_DATA_CHARACTERS} />
    </ScreenScrollContainer>
  )
}
