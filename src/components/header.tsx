import { useEffect, useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    if (window.innerWidth > 768) {
      setMenuOpen(false);
    }
  }, []);
  return (
    <div className="text-main tablet:py-4 tablet:px-8 tablet:h-auto flex justify-between h-12 px-4 py-2 font-sans text-2xl">
      <h1 className={`text-dark font-bold ${menuOpen ? `hidden` : `block`}`}>
        CODEROUND
      </h1>
      <div
        className={`flex ${
          menuOpen ? `block justify-start` : `tablet:flex hidden justify-end `
        }`}
      >
        <h1 className="hover:text-strong mr-6 text-xl transition-colors cursor-pointer">
          Products
        </h1>
        <h1 className="hover:text-strong text-xl transition-colors cursor-pointer">
          Technology
        </h1>
      </div>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="tablet:hidden block text-xl"
      >
        {menuOpen ? `Close` : `Menu`}
      </button>
    </div>
  );
};
