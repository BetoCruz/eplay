import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
// import resident from '../../assets/images/resident.png'
// import diablo from '../../assets/images/diablo.png'
// import zelda from '../../assets/images/zelda.png'
// import starWars from '../../assets/images/star_wars.png'
import { Game } from '../Home'

// const promocoes: Game[] = []

// const emBreve: Game[] = []

const Categories = () => {
  const [gameAcao, setGameAcao] = useState<Game[]>([])
  const [gameEsportes, setGameEsportes] = useState<Game[]>([])
  const [gameSimulacao, setGameSimulacao] = useState<Game[]>([])
  const [GameLuta, setGameLuta] = useState<Game[]>([])
  const [gameRpg, setGameRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/eplay/acao')
      .then((resp) => resp.json())
      .then((res) => setGameAcao(res))

    fetch('https://ebac-fake-api.vercel.app/api/eplay/esportes')
      .then((resp) => resp.json())
      .then((res) => setGameEsportes(res))

    fetch('https://ebac-fake-api.vercel.app/api/eplay/simulacao')
      .then((resp) => resp.json())
      .then((res) => setGameSimulacao(res))

    fetch('https://ebac-fake-api.vercel.app/api/eplay/luta')
      .then((resp) => resp.json())
      .then((res) => setGameLuta(res))

    fetch('https://ebac-fake-api.vercel.app/api/eplay/rpg')
      .then((resp) => resp.json())
      .then((res) => setGameRpg(res))
  }, [])

  return (
    <>
      {/* <Banner /> */}
      <ProductsList games={gameAcao} title="Ação" background="black" />
      <ProductsList games={gameEsportes} title="Esportes" background="gray" />
      <ProductsList games={GameLuta} title="Luta" background="black" />
      <ProductsList games={gameRpg} title="RPG" background="gray" />
      <ProductsList
        games={gameSimulacao}
        title="Simulação"
        background="black"
      />
    </>
  )
}

export default Categories
