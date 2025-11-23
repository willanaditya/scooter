import { client } from "@/sanity/lib/client"
import { landingPageQuery } from "@/sanity/lib/queries"
import Accessories from "@/components/landing/Accessories"
import Colors from "@/components/landing/Colors"
import Footer from "@/components/landing/Footer"
import Gallery from "@/components/landing/Gallery"
import Hero from "@/components/landing/Hero"
import Motor from "@/components/landing/Motor"
import Newsletter from "@/components/landing/Newsletter"
import ProductInformation from "@/components/landing/ProductInformation"
import Testimonials from "@/components/landing/Testimonials"
import Navbar from "@/components/landing/Navbar"


export default async function Home() {
  const data = await client.fetch(landingPageQuery)

  return (
    <main>
      <Navbar />
      <Hero data={data.hero} />
      <ProductInformation data={data.productInformation} />
      <Motor data={data.motor} />
      <Accessories data={data.accessories} />
      <Gallery data={data.gallery} />
      <Colors data={data.colors} />
      <Testimonials data={data.testimonials} />
      <Newsletter data={data.newsletter} />
      <Footer data={data.footer} />
    </main>
  )
}
