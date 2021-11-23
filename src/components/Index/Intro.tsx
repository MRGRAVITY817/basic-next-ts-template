import { useEffect, useState } from "react";

export const Intro = () => {
  const [hover, setHover] = useState<boolean>();

  return (
    <div
      style={{ backgroundImage: `url('/intro.jpg')` }}
      className="tablet:py-32 tablet:px-24 text-bright p-12 bg-center bg-cover"
    >
      <h1 className="tablet:text-7xl tablet:mb-12 mb-4 text-3xl font-bold">
        Focus on your <span className="text-strong">idea.</span>
      </h1>
      <p className="tablet:text-2xl text-lg font-light">
        Enter the brave new world.
        <br /> Leave the coding to our professionals.
      </p>
      <div className="my-12">
        <button
          onPointerEnter={(e) => setHover(true)}
          onPointerLeave={(e) => setHover(false)}
          className="bg-bright text-main absolute p-4 font-semibold"
        >
          Start business
        </button>
        <div className="h-24">
          <button
            className={`border-bright text-main p-4 font-semibold text-opacity-0 transition-all ${
              hover
                ? `mt-0 ml-0 border-0`
                : `tablet:mt-2 tablet:ml-2 mt-1 ml-1 tablet:border-2 border`
            }`}
          >
            Start business
          </button>
        </div>
      </div>
    </div>
  );
};
