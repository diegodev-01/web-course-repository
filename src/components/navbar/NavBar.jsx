import { Link } from "react-router-dom"

import Styles from ".//NavBar.module.css"

export const Navigator = () => {
  return (
    <nav className={Styles.navigator}>
      <ul className={Styles.container}>
        <li className={Styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={Styles.item}>
          <Link to="/DetailPokemon">Details</Link>
        </li>
        <li className={Styles.item}>
          <Link to="/Demo">Demo</Link>
        </li>
      </ul>
    </nav>
  )
}
