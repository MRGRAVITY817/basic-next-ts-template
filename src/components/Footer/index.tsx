import { FooterMenus } from "./FooterMenus";
import { Newsletter } from "./Newsletter";

export const Footer = () => {
  return (
    <div className="bg-main text-bright laptop:pt-8 laptop:px-8 px-4 py-8">
      <div className="tablet:flex-row-reverse tablet:items-center tablet:justify-start flex flex-col items-center justify-center">
        <Newsletter />
        <FooterMenus />
      </div>
      <div className="tablet:px-16 tablet:flex-row tablet:h-24 tablet:mt-8 tablet:text-xl flex flex-col items-center justify-between h-48 p-8 text-lg">
        <div>
          <p className="font-light">Terms & Privacy</p>
        </div>
        <div className="grid">
          <p className="font-light">© 2021 CODEROUND.</p>
          <p className="ml-1">All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};
