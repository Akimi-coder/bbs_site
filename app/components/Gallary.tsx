"use client";
import Image from 'next/image';

type ImageItem = {
  src: string;
  alt?: string;
};

type GallaryProps = {
  images: ImageItem[];
  animationClass?: string;
};

export default function Gallary({
  images,
  animationClass = 'animate-infinite-scroll',
}: GallaryProps) {
  return (
    <div className="flex w-full overflow-x-hidden overflow-y-hidden">
      <div className="flex h-full w-max gap-[0.2vw] will-change-transform">
        {/* Перша копія */}
        <div
          className={`flex gap-[0.2vw] h-full ${animationClass}`}
        >
          {images.map((img, index) => {
            const isWide = index % 2 === 0;
            return (
              <div
                key={`row1-${index}`}
                className={`relative 
                  ${isWide
                    ? 'sm:w-[45vw] w-[75vw]'
                    : 'sm:w-[20vw] w-[40vw]'
                  }
                  sm:h-[25vw] h-[50vw]
                `}
              >
                <img
                  src={img.src}
                  loading="lazy"

                  className="object-cover w-full h-full opacity-85"
                />
              </div>
            );
          })}
        </div>

        {/* Друга копія */}
        <div
          className={`flex gap-[0.2vw] h-full ${animationClass}`}
        >
          {images.map((img, index) => {
            const isWide = index % 2 === 0;
            return (
              <div
                key={`row2-${index}`}
                className={`relative 
                  ${isWide
                    ? 'sm:w-[45vw] w-[75vw]'
                    : 'sm:w-[20vw] w-[40vw]'
                  }
                  sm:h-[25vw] h-[50vw]
                `}
              >
                <img
                  src={img.src}
                  loading="lazy"
                  className="object-cover w-full h-full opacity-85"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
