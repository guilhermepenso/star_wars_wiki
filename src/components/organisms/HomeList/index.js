import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'
import { Text } from '../../atoms'


const Filmes = [
    {
        id: 0,
        image_url: 'https://s3-alpha-sig.figma.com/img/492c/54b3/3c4d0037f0f063e412959b3ebfaf8a46?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hGS4caDGGy74GJwyxOmWwfVqF~9A99rQsbCXnF670CsLy-0~yUxF89Fn0ixuZkcH-tHNFC26mxMOISUdzugp0RW6C87GDxJnkTQMY3ILE5~rRE3j-FRefeZyz6ST0AuEGHf5QhJGJdYFgHEmgH3A4gjWg0uo4FEK5MRQa9639uoz6f4jrQGsq7bFqxyIkksyuebiWxF1JXeup5prm~ck0l3zWpaug1ih9oMIX1i2fxkDaa8KX2JTHhk2jWVQ4GZx-tXYr07WHnmU-t1x7xRL8sTqLsfgLQ6IQ6WELWGj9~jB-h1EgXeJ8c7tX7vxfsgS1q1iZyCG4E~~oM2890Nm6g__'
    },
    {
        id: 1,
        image_url: 'https://s3-alpha-sig.figma.com/img/e641/bac1/3251fbc354b808f30c4276e509471aaf?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k3PiWGiGDkMBgwnjnrRtg4v47PK2UMqRlAGsgtOufjt6eFeVJd~RbNBj4C6VNEOYyf3HAHgdB0oHM6ZWkRPxBbfc-vmSW6ksUmiHWo3BtrUzu~8aMF1wEKuv17ih8vB1ui5D8Vc7EAswxBDk8KytfrzXSbf~NkWQgZl9UJNux6xVjJOb6J5peuiYon9af2SmynglrGttFohu21PnhjDHZGtdWjX8OSN1RodURzeOG1fLWmgTZ28NPWV8SE89u8y07KSNGbVk5keKbtTgiFOFJp7LKHoNooGB8Mo4cfZjHeuYj0gCTTtwWSvYhtwi58Na~nZoFFBxNPbx20Srqgcl3Q__',
    },
    {
        id: 2,
        image_url: 'https://s3-alpha-sig.figma.com/img/0902/25ef/93807e3e51ae991b2b44329c7b032a82?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vj1PucF7R8lg~2o8Zqotf2SEZf7z4rW8i35K72p~sDPhVCqSlZqZ45bsBC1NbEZDC7frsXdPOZkA8hMrJTPThAHD-YkHhcd7j~T~a6~1ieX1Y2weavtE8XLhws9jHiexSGyZYS703zqwBVmTRuPqPzg6C9dhRG2JhUR1K56XmRpzXKGGqT4-xeLowqiifGx2XkFlloUO1azcfheNBHC0GGFJFDIT6QO431iPoGeVzHK8KCm2ob0n8vK3XjrNjO7KUo6Pj1o5jp3YHGO0OSZR1wZvLaBbSVbhi5kFxIvJ5fUphSDlzD-JLYZcwyYcIKPeFniS7mPP64g~jL4f8Nkapw__',
    },
    {
        id: 3,
        image_url: 'https://s3-alpha-sig.figma.com/img/f44b/43d5/572bffb0dfa5a7790e316e4b004bc736?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qXLo6X0PDSadTTRFiRgNSiNTBSBn6enMPHMG1Y-kp0ABNAIoXEwS4hSZdiVRszd8Brx00DSKyrF1S8r0Mp~r9HlWNohDz4ov-dYqxCJOlCOk5Tfm5b5g5jkH2x-xCjeaGl-OgSA-vS16RpLZcb94QMIqdn4i2xAmOWaep8-K57ZWlykodvR-JTNlvVCg88EMKIUv2yuGf7o08OxixTbNVFcYC9Fq2rOHaD7NcBxoOuLgBJgEKQwGEt1Qcm7pKzUWWubGY-ecaVb1IH9KXxxOPgdNstFwCHvkDE58DXRIRAGTe6XRX1VFf3-i9Pr9pbw3IUKtZ4hqhNfH7eifeh-6Qg__'
    },
]
export const HomeList = () => {
    return(
        <FlatList
            horizontal
            data={Filmes}
            renderItem={({ item }) => <Card item={item}/>}
            keyExtractor={(item) => String(item.id)}
        />
    )
}