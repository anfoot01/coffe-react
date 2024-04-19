import "./Home.scss"
import { Search } from "./components/Search"
import { Categories } from "./components/Categories"
import { CoffeeItems } from "./components/CoffeeItems"
import { BeansItems } from "./components/BeansItems"
export const Home = () => {
  return (
    <div className="home-container">
      <h1 className="main-title">Find the best coffee for you</h1>
      <Search></Search>
      <Categories></Categories>
      <CoffeeItems></CoffeeItems>
      <BeansItems></BeansItems>
</div>
   
  )
}

