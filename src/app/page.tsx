import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"

const HomePage = () => {
  return (
    <div className=''>
      <Slider/>
      <div className="mt-16 px-4 md:px-8 lg:px-12 xl:px-28 2xl:px-60">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList/>
      </div>
      <div className="mt-16">
        <h1 className="text-2xl px-4 md:px-8 lg:px-12 xl:px-28 2xl:px-60 mb-8">Categories</h1>
        <CategoryList/>
      </div>
      <div className="mt-16 px-4 md:px-8 lg:px-12 xl:px-28 2xl:px-60">
        <h1 className="text-2xl">New Products</h1>
        <ProductList/>
      </div>
    </div>
  )
}

export default HomePage