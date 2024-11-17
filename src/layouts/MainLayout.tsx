import {ReactNode} from "react";
import MainHeader from "@/layouts/MainHeader.tsx";

interface Props {
  children?: ReactNode
}

const MainLayout = ({children}: Props) => {
  return (
    <section>
      <MainHeader/>
      {children}
    </section>
  );
};

export default MainLayout;