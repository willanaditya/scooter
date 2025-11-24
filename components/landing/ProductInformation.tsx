import Image from 'next/image'
import { urlFor } from "@/sanity/lib/image"

const ProductInformation = ({ data }: any) => {

  return (
    <div><section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-[25px] font-bold text-center mb-4 text-gray-900">
          Product Information
        </h2>
        <h2 className="text-sm font-sm text-center mb-10 text-gray-600">
          Our Scooter has following unique design and technology features:
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Image */}
          <div className="relative">
            //
            <Image
              src={urlFor(data.image).url()}
              alt="Electric Scooter Side View"
              width={600}
              height={500}
              className="rounded-2xl"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-8">


            <ul className="space-y-6 ml-6">
              {data?.features?.map((feature: string, i: number) => (
                <li key={i} className="flex items-center gap-4">
                  <Image
                    src="/Vector.svg"
                    alt="tick mark"
                    width={25}
                    height={25} />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section></div>
  )
}

export default ProductInformation