import { Navigator } from "@/components/navbar/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Hero, DetailPokemon, Demo } from "@views"
import LoginView from "@/views/Login/LoginView"

export const AppNavigator = () => {
  return (
    <BrowserRouter>
      <Navigator />
      <Routes>
        <Route path="/Login" element={<LoginView />} />
        <Route path="/" element={<Hero />} />
        <Route path="/DetailPokemon" element={<DetailPokemon />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="*" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  )
}
