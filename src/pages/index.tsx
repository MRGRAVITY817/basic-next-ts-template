import type { NextPage } from "next";
import { Intro } from "../components/Index/Intro";
import { Review } from "../components/Index/Review";
import { Trending } from "../components/Index/Trending";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-full">
      <Intro />
      <Review />
      <Trending />
    </div>
  );
};

export default Home;
