import Basket from "../components/Basket"
import ProductList from "../components/ProductList"
import InfoWrapper from "../components/infoWrapper"
import Sliders from "../components/Slider"
import Categories from "../components/Categories"
import PastOrders from "../components/PastOrders"
import home from "../styles/homepage/Index.module.scss"

export default function Home() {
  return (
    <>
      <InfoWrapper />
      <main className={home.main}>
        <div className={home.container}>
          <Sliders />
          <div className={home.contents}>
            <div className={home.categories}>
              <Categories />
            </div>
            <div className={home.productList}>
              <ProductList />
            </div>
            <div className={home.basket}>
              <Basket />
              <PastOrders />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
