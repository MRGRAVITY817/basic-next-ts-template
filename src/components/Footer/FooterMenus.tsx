interface FooterMenuProps {
  title: string;
  contents: string[];
}

const FooterMenu: React.FC<FooterMenuProps> = ({ title, contents }) => (
  <div className="text-bright tablet:my-0 tablet:items-start tablet:justify-start flex flex-col items-center justify-center my-4">
    <h1 className="mb-2 text-lg font-medium">{title}</h1>
    <div className="grid grid-flow-row gap-2">
      {contents.map((content, i) => (
        <p
          key={i}
          className="text-md tablet:text-left font-light text-center cursor-pointer"
        >
          {content}
        </p>
      ))}
    </div>
  </div>
);

export const FooterMenus = () => (
  <div className="tablet:flex-row tablet:w-1/2 tablet:items-start flex flex-col justify-around">
    <FooterMenu
      title="Help"
      contents={[
        "Frequently Asked Questions",
        "Reviews",
        "My Account",
        "Corporate Gifting",
        "Contact Us",
      ]}
    />
    <FooterMenu
      title="Shop"
      contents={[
        "CodeRound Webbuild™",
        "CodeRound Bootcamp™",
        "Merchandise",
        "Private lessons",
      ]}
    />
    <FooterMenu
      title="About"
      contents={["Magazine", "Press", "Our Story", "Technology"]}
    />
  </div>
);
