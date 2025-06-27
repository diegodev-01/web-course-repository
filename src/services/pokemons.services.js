import axios from "axios"

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 10000,
})

export const getPokemons = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  try {
    const response = await api.get("pokemon?limit=50")
    return response.data.results
  } catch (error) {
    console.error("Error fetching pokemons:", error)
    throw error
  }
}
