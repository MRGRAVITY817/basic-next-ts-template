import { Footer } from "./Footer";
import { Header } from "./header";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
