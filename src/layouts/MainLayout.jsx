import ShellBar from "../components/layout/ShellBar";
import Navbar from "../components/layout/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <ShellBar />
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;