import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Newsletter = () => (
  <div className="tablet:mb-0 tablet:w-1/2 tablet:px-16 flex flex-col items-center justify-center w-2/3 my-8">
    <div className="tablet:items-start flex flex-col items-center justify-center w-full mb-8">
      <h1 className="mb-4 text-lg font-medium">Sign up for our newsletter</h1>
      <form className="grid w-full grid-flow-row gap-3">
        <input type="text" className="p-2" placeholder="Enter your email" />
        <button className="bg-bright hover:bg-strong hover:text-bright text-main p-2 font-semibold transition-all">
          Sign Up
        </button>
      </form>
    </div>
    <div className="tablet:items-start flex flex-col items-center justify-center w-full">
      <h1 className="mb-4 text-lg font-medium">Or follow us on</h1>
      <div className="flex flex-row items-center justify-between w-32 text-2xl">
        <FontAwesomeIcon
          className="text-bright hover:text-strong transition-colors cursor-pointer"
          icon={faInstagram}
        />
        <FontAwesomeIcon
          className="text-bright hover:text-strong transition-colors cursor-pointer"
          icon={faTwitter}
        />
        <FontAwesomeIcon
          className="text-bright hover:text-strong transition-colors cursor-pointer"
          icon={faFacebook}
        />
      </div>
    </div>
  </div>
);
