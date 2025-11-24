import Image from 'next/image'
import { urlFor } from "@/sanity/lib/image"

const Motor = ({ data }: any) => {
  return (

    <div><section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-[25px] font-bold text-center mb-4 text-gray-900">
          {data?.title}
        </h2>
        <h2 className="text-sm font-sm text-center mb-10 text-gray-600">
          More torque for powerful riding with 22% maximum hill climbing capability.
        </h2>
        <div className="flex justify-center">
          <Image
            src={urlFor(data.image).quality(100).url()}
            alt="motor view"
            width={800}
            height={500}
            className="rounded-2xl max-w-[800px]"
          />
        </div>
      </div>
    </section></div>
  )
}

export default Motor