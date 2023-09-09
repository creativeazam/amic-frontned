import FeaturedProducts from "@modules/home/components/featured-products"
import FeaturedCategories from "@modules/home/components/featured-categories"
import Hero from "@modules/home/components/hero"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the AMIC. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories/>
      <FeaturedProducts />
    </>
  )
}

export default Home
