import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
// import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

// const promocoes: Game[] = [
//   {
//     id: 1,
//     category: 'Ação',
//     description:
//       'Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o primeiro título principal da série Grand Theft Auto desde Grand Theft Auto IV em 2008.',
//     image: resident,
//     infos: ['10%', 'R$ 199,90'],
//     system: 'Windows',
//     title: 'Residente Evil 4'
//   },
//   {
//     id: 2,
//     category: 'Ação',
//     description:
//       'Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o primeiro título principal da série Grand Theft Auto desde Grand Theft Auto IV em 2008.',
//     image: diablo,
//     infos: ['5%', 'R$ 299,00'],
//     system: 'PS5',
//     title: 'Diablo IV '
//   },
//   {
//     id: 3,
//     category: 'Ação',
//     description:
//       'Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o primeiro título principal da série Grand Theft Auto desde Grand Theft Auto IV em 2008.',
//     image: zelda,
//     infos: ['10%', 'R$ 199,90'],
//     system: 'Windows',
//     title: 'Zelda Breath of the Wild'
//   },
//   {
//     id: 4,
//     category: 'Ação',
//     description:
//       'Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o primeiro título principal da série Grand Theft Auto desde Grand Theft Auto IV em 2008.',
//     image: starWars,
//     infos: ['10%', 'R$ 199,90'],
//     system: 'Windows',
//     title: 'Star Wars Jedi: Survivor'
//   }
// ]

// const emBreve: Game[] = [
//   {
//     id: 5,
//     category: 'RPG',
//     description:
//       'Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o primeiro título principal da série Grand Theft Auto desde Grand Theft Auto IV em 2008.',
//     image: resident,
//     infos: ['17/09'],
//     system: 'PS5',
//     title: 'Grand Theft Auto V'
//   },
//   {
//     id: 6,
//     category: 'RPG',
//     description:
//       'Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o primeiro título principal da série Grand Theft Auto desde Grand Theft Auto IV em 2008.',
//     image: diablo,
//     infos: ['17/09'],
//     system: 'PS5',
//     title: ' diablo '
//   },
//   {
//     id: 7,
//     category: 'RPG',
//     description:
//       'Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o primeiro título principal da série Grand Theft Auto desde Grand Theft Auto IV em 2008.',
//     image: zelda,
//     infos: ['17/09'],
//     system: 'PS5',
//     title: 'Zelda Breath of the Wild'
//   },
//   {
//     id: 8,
//     category: 'RPG',
//     description:
//       'Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o primeiro título principal da série Grand Theft Auto desde Grand Theft Auto IV em 2008.',
//     image: starWars,
//     infos: ['17/09'],
//     system: 'PS5',
//     title: 'Star Wars Jedi: Survivor'
//   }
// ]

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))
  }, [])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoção" background="gray" />
      <ProductsList games={emBreve} title="Em breve" background="black" />
    </>
  )
}

export default Home
