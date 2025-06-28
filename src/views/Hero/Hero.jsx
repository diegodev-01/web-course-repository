import { getPokemons } from "@services/pokemons.services"
import { useEffect, useState, Fragment, useRef } from "react"
import Styles from "./Hero.module.css"
import { useSelector } from "react-redux"
import { ProtectedRoutes } from "../../helpers/ProtectedRoutes"

export const Hero = () => {
  const heroRef = useRef(null)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const counter = useSelector((state) => state.counter.value)

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true)
      const pokemons = await getPokemons()
      heroRef.current.scrollIntoView({
        behavior: "smooth",
      })
      setData(pokemons)
      setLoading(false)
    }

    fetchPokemons()
  }, [])

  console.log("Hero component rendered")
  // const fragment = <></>;
  // console.log(fragment);

  return (
    <ProtectedRoutes>
      <main ref={heroRef} className={`${Styles.hero} ${Styles.container}`}>
        <h1 className={Styles.title}>Welcome to the Pokemon World</h1>
        <p className={Styles.text}>
          Explore and discover your favorite Pokemons!
        </p>
        <p className={Styles.counter}>Counter: {counter}</p>
        {loading ? (
          <div className={Styles.loading}>
            <p>Loading Pokemons...</p>
          </div>
        ) : (
          <div className={Styles.pokemonList}>
            {data?.map((pokemon, idx) => (
              <Fragment key={idx}>
                <h2 className={Styles.pokemonName}>
                  {idx} - {pokemon.name}
                </h2>
              </Fragment>
            ))}
          </div>
        )}
      </main>
    </ProtectedRoutes>
  )
}
