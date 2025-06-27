import { Navigator } from "@/components/navigator/Navigator"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Hero, DetailPokemon, Demo } from "@view"

export const AppNavigator = () => {
  return (
    <BrowserRouter>
      <Navigator />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/DetailPokemon" element={<DetailPokemon />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="*" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  )
}
