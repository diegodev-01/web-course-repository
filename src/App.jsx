import "./App.css"
import { store } from "./store/store"
import { Provider } from "react-redux"
import { AppNavigator } from "./Navigation/AppNavigator"

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

export default App
