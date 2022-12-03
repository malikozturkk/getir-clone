import Basket from "../components/Basket"
import ProductList from "../components/productList"
import InfoWrapper from "../components/infoWrapper"
import Slider from "../components/Slider"
import Categories from "../components/Categories"
import home from "../styles/homepage/Index.module.scss"

export default function Home() {
  return (
    <>
      <InfoWrapper />
      <main className={home.main}>
        <div className={home.container}>
          <Slider />
          <div className={home.contents}>
            <div className={home.categories}>
              <Categories />
            </div>
            <div className={home.productList}>
              <ProductList />
            </div>
            <div className={home.basket}>
              <Basket />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
