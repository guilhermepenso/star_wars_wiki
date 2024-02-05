import React from 'react'
import { ScreenScrollContainer, HomeList, Hero } from '~/components'

const FAKE_DATA_CHARACTERS = [
  {
    id: 0,
    image_url:
      'https://s3-alpha-sig.figma.com/img/db70/e6a2/22a05eca5f16406e5f74ecaab09f6151?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MKJT58k0xqTnlOJK6OVw0BbhXx6QniekV3LknRxADs-eTd5rAtSpsQA5jHAtX0vwmRUYb24oMi-gO4szHsZRM1awbSmjvA3AAg7TUGIu~2QjqGUl9GGv2~gEUN4B5YCmxEiL562IUDY780nKycWfMqYGGooalytS41OHrgYGFmvyLqhaPg4Mk0owKM3vDkR2RkfcrDRvf4f2kSEyRGtaTHljaH0KFuE8vBrRa2-LWPgYQQcbjW8~o9I4wRfES0ExNO7h~O7jUunQoFfgWplQSBDCrpAgWlcc3v7NmpevnpFTkVbEgXB3dXKKa-oxyC5rt7LmKdbRUgBg1ruNrtt1wg__',
  },
  {
    id: 1,
    image_url:
      'https://s3-alpha-sig.figma.com/img/c19b/db6c/3081fcdfb400dc41d0f9f73157f3a01d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gF86uT7tATD17Y4PmFFAKtHYDZaa43PKdCESWPEGhrmx4rud-ydrrctsDTXwBCXblLK~HLogwjwgNmHMqKA1Z~UIEI1IquB8fw51pR5neBRytN0~plAQx1gYhyKfasOz3R7q95W8KqRaVJqQNgireO5aGfCiqstFKUcXdOPiJd6jLR-2G~Z26Da91xWt99~uNzMAdjMNNC67ukn~WL0Ti-bzSQEVzTg5YTsMpO2S7GNxZSrgeT5sO5JiQ66gV1ceR6Oqy905dwqLmCHclLR-1CC3yTF1xqYmtuT-S5VR~fMeRNVLKuW~m7c4doL60sXoqBQC4etigVyGfke6LKPnvg__',
  },
  {
    id: 2,
    image_url:
      'https://s3-alpha-sig.figma.com/img/8cd3/bcda/2c4d9bfbd0d1c2074236744863054e57?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kkj2U2aR2R5T~ZzlKSz9sLEcJOOKMUnhGjJSZd1EhE8EBrZAuoMDN10uI4dvjwfeNPGY187c4eFwZQhINrt0aUzZ40Ugh2KbZ1JcyR0m~SkamN3DZmydBcNntolfj-OnOR0FIxPgO4jQYzBbuR765XMxGY4738V5UHMQCf1tRn7zghxm9xaxd~UoUICurGVelueQ7N7rAYyYbygrlv9~7thm6eJjdMd-TsA5ZgmGlgYimV0y6xJFliL2hZrwCgV1OhGrGXQy9Yq1cdPfgMtcZG88WTpRSZn~Isvl2WEevUPSsbJLBhnC0b2Yjoc2zGC4dARSwX6-LqgNcLdvVe3fVg__',
  },
  {
    id: 3,
    image_url:
      'https://s3-alpha-sig.figma.com/img/215f/cbd6/158eedf6ba4d3ad09398f3857c073dc5?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UcCt2Su1Y9On5534URoj9XXDhmWMnkCsKsJ04U0qNHMU1nLRCTrh~IulHqXqr4pOCrCdaDuadbk~u80mXCmHLjv9XeUXeUrpbqX2cpc2KTqoz37waoWRH5OVPtUIz~tU08OFUsZB2enjw77cv33slGLhfDDIwdXWvsuAY0cOIHD9YUITyeNAOjlGFGqAXST3qLsyMfBA8heW~9wl5nlvEy0ysVaTaxSB25ABkz-7W-bSzreYPjr9q80aT4IhsW399qAdEB~J83-8KB-T9sfYZ1x9ncbQU4vNvynRw04C0qVBKAWNk6j0sC8Q2TshPs3sHIIRvI~4mRBq-MHnmwKPZg__',
  },
]

const FAKE_DATA_MOVIES = [
  {
    id: 0,
    image_url:
      'https://s3-alpha-sig.figma.com/img/492c/54b3/3c4d0037f0f063e412959b3ebfaf8a46?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hGS4caDGGy74GJwyxOmWwfVqF~9A99rQsbCXnF670CsLy-0~yUxF89Fn0ixuZkcH-tHNFC26mxMOISUdzugp0RW6C87GDxJnkTQMY3ILE5~rRE3j-FRefeZyz6ST0AuEGHf5QhJGJdYFgHEmgH3A4gjWg0uo4FEK5MRQa9639uoz6f4jrQGsq7bFqxyIkksyuebiWxF1JXeup5prm~ck0l3zWpaug1ih9oMIX1i2fxkDaa8KX2JTHhk2jWVQ4GZx-tXYr07WHnmU-t1x7xRL8sTqLsfgLQ6IQ6WELWGj9~jB-h1EgXeJ8c7tX7vxfsgS1q1iZyCG4E~~oM2890Nm6g__',
  },
  {
    id: 1,
    image_url:
      'https://s3-alpha-sig.figma.com/img/e641/bac1/3251fbc354b808f30c4276e509471aaf?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k3PiWGiGDkMBgwnjnrRtg4v47PK2UMqRlAGsgtOufjt6eFeVJd~RbNBj4C6VNEOYyf3HAHgdB0oHM6ZWkRPxBbfc-vmSW6ksUmiHWo3BtrUzu~8aMF1wEKuv17ih8vB1ui5D8Vc7EAswxBDk8KytfrzXSbf~NkWQgZl9UJNux6xVjJOb6J5peuiYon9af2SmynglrGttFohu21PnhjDHZGtdWjX8OSN1RodURzeOG1fLWmgTZ28NPWV8SE89u8y07KSNGbVk5keKbtTgiFOFJp7LKHoNooGB8Mo4cfZjHeuYj0gCTTtwWSvYhtwi58Na~nZoFFBxNPbx20Srqgcl3Q__',
  },
  {
    id: 2,
    image_url:
      'https://s3-alpha-sig.figma.com/img/0902/25ef/93807e3e51ae991b2b44329c7b032a82?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vj1PucF7R8lg~2o8Zqotf2SEZf7z4rW8i35K72p~sDPhVCqSlZqZ45bsBC1NbEZDC7frsXdPOZkA8hMrJTPThAHD-YkHhcd7j~T~a6~1ieX1Y2weavtE8XLhws9jHiexSGyZYS703zqwBVmTRuPqPzg6C9dhRG2JhUR1K56XmRpzXKGGqT4-xeLowqiifGx2XkFlloUO1azcfheNBHC0GGFJFDIT6QO431iPoGeVzHK8KCm2ob0n8vK3XjrNjO7KUo6Pj1o5jp3YHGO0OSZR1wZvLaBbSVbhi5kFxIvJ5fUphSDlzD-JLYZcwyYcIKPeFniS7mPP64g~jL4f8Nkapw__',
  },
  {
    id: 3,
    image_url:
      'https://s3-alpha-sig.figma.com/img/f44b/43d5/572bffb0dfa5a7790e316e4b004bc736?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qXLo6X0PDSadTTRFiRgNSiNTBSBn6enMPHMG1Y-kp0ABNAIoXEwS4hSZdiVRszd8Brx00DSKyrF1S8r0Mp~r9HlWNohDz4ov-dYqxCJOlCOk5Tfm5b5g5jkH2x-xCjeaGl-OgSA-vS16RpLZcb94QMIqdn4i2xAmOWaep8-K57ZWlykodvR-JTNlvVCg88EMKIUv2yuGf7o08OxixTbNVFcYC9Fq2rOHaD7NcBxoOuLgBJgEKQwGEt1Qcm7pKzUWWubGY-ecaVb1IH9KXxxOPgdNstFwCHvkDE58DXRIRAGTe6XRX1VFf3-i9Pr9pbw3IUKtZ4hqhNfH7eifeh-6Qg__',
  },
]

export const Home = () => {
  return (
    <ScreenScrollContainer>
      <Hero />
      <HomeList title="Filmes" data={FAKE_DATA_MOVIES} />
      <HomeList title="Personagens" data={FAKE_DATA_CHARACTERS} />
    </ScreenScrollContainer>
  )
}
