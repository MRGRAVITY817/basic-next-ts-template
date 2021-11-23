import Image from "next/image";
import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react"; import "swiper/css";

interface TrendItemProps {
  title: string;
  staff: string;
  image: string;
}

const TrendItem: React.FC<TrendItemProps> = ({ title, staff, image }) => (
  <div className="w-72 tablet:my-0 my-4">
    <Image src={image} alt={title} height={400} width={300} objectFit="cover" />
    <div className="tablet:my-6 my-2">
      <h1 className="tablet:text-2xl text-xl font-semibold">{title}</h1>
      <h2 className="tablet:mb-4 tablet:text-lg font-extralight text-md mb-2 italic">
        {staff}
      </h2>
    </div>
  </div>
);
export const Trending = () => {
  const [titleHover, setTitleHover] = useState(false);
  return (
    <div className="bg-bright text-dark tablet:p-24 flex flex-col items-center justify-start p-12">
      <div className="tablet:mb-20 mb-12">
        <h1
          onMouseEnter={(e) => setTitleHover(true)}
          onMouseLeave={(e) => setTitleHover(false)}
          className="tablet:text-7xl tablet:pb-8 pb-4 text-3xl font-bold text-center"
        >
          Trending now
        </h1>
        <h1
          className={`tablet:border-b-8 border-strong border-0 border-b-4 ${
            titleHover ? `tablet:mx-32 mx-16` : `tablet:mx-24 mx-12`
          } transition-all`}
        />
      </div>
      <div className="tablet:flex-row tablet:w-2/3 flex flex-col items-start justify-between">
        <TrendItem
          title="Start your own startup"
          staff="with Daniel Radcliff, Emma Watson"
          image="/trending/startup.jpg"
        />
        <TrendItem
          title="Automate things in your cafe or restaurant"
          staff="with Rupert Grint"
          image="/trending/cafe.jpg"
        />
        <TrendItem
          title="Maximize productivity in your project team"
          staff="with Tom Felton, Bonnie Wright"
          image="/trending/project.jpg"
        />
      </div>
    </div>
  );
};
