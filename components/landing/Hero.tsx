import Image from 'next/image';
import { urlFor } from "@/sanity/lib/image"

// 1. Define the type for a single stat item
interface HeroStat {
  _key: string;
  _type: "heroStat";
  label: string;
  value: string;
}


export default function Hero({ data }: any) {
  console.log(JSON.stringify(data, null, 2))
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen text-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

        <div className="relative container mx-auto px-6 pt-8 pb-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="max-w-xl space-y-10">
            <div className='max-w-[526px]'>
              <h1 className=" relative text-[65px] font-bold leading-tight">
                {data?.title}<br />
              </h1>
            </div>
            <div className="w-[335px] h-1 bg-[#42454A]" />

            <p className="text-lg text-black">
              {data?.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-2">
              <div className='flex maw-w-[162px] items-center'>
                <img
                  src="/icon.png"
                  width={58}
                  height={48} />
                <button className="px-6 py-4 bg-white text-black font-semibold ">
                  Buy now
                </button>
              </div>
              <div className='flex max-w-[188px]'>
                <button className="px-6 py-4 border w-[118px] h-[75px] border-white/50  text-[9px]">
                  Watch your video how it work's
                </button>
                <img
                  src="/playbutton.svg"
                  width={58}
                  height={58} />
              </div>

            </div>
          </div>

          {/* Right Image + Badge */}
          <div className="relative">
            {/* SVG Background Right */}
            <svg
              width="435"
              height="558"
              viewBox="0 0 510 558"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-0 z-0"
            >
              <path
                d="M279 557.999C124.913 557.999 -5.4601e-06 433.086 -1.21955e-05 278.999C-1.89309e-05 124.912 124.913 -0.000982023 279 -0.000988758L510 -0.000998855L510 557.999L279 557.999Z"
                fill="#DBDBDB"
              />
            </svg>
            {/* Foreground Image */}
            <Image
              src={urlFor(data.image).url()}
              alt="Electric Scooter"
              loading="eager"
              width={800}
              height={600}
              className="relative z-10 drop-shadow-2xl"
            />
          </div>

        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {data?.stats?.map((stat: HeroStat) => {
            const displayValue =
              stat.label.includes("miles") ||
                stat.label.includes("%") ||
                stat.label.includes("nm") ||
                stat.label === "2X"
                ? stat.label
                : stat.value;

            const displayLabel =
              stat.label.includes("miles") ||
                stat.label.includes("%") ||
                stat.label.includes("nm") ||
                stat.label === "2X"
                ? stat.value
                : stat.label;

            return (
              <div key={stat._key} className="text-center">
                <div className="text-2xl font-bold text-black">
                  {displayValue}
                </div>
                <div className="text-sm text-gray-400 tracking-wider">
                  {displayLabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </>
  );
}
