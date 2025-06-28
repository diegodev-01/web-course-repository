import { getPokemons } from "@services/pokemons.services"
import { useEffect, useState, Fragment, useRef } from "react"
import Styles from "./DetailPokemon.module.css"
import { useSelector, useDispatch } from "react-redux"
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../store/counterSlices/counterSlice"

export const DetailPokemon = () => {
  const heroRef = useRef(null)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [text, setText] = useState("")
  const dispatch = useDispatch()
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

  let url = new URL(window.location.href)

  const setParam = (param) => {
    url.searchParams.set("id", param)
  }

  return (
    <main ref={heroRef} className={`${Styles.hero} ${Styles.container}`}>
      <h1 className={Styles.title}>Welcome to the Pokemon World</h1>
      <p className={Styles.text}>
        Explore and discover your favorite Pokemons!
      </p>

      <button
        onClick={() => {
          dispatch(increment())
        }}
      >
        incrementar
      </button>
      <button
        onClick={() => {
          dispatch(decrement())
        }}
      >
        decrementar
      </button>

      <p>Counter: {counter}</p>

      <form action="">
        <input
          name="user"
          type="text"
          onChange={(e) => {
            setParam(e.target.value)
            console.log(e.target.value)
          }}
        />
        <input
          type="number"
          name="counter"
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            dispatch(incrementByAmount(Number(text)))
          }}
        >
          enviar
        </button>
      </form>
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
  )
}
