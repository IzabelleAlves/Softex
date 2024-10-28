import { Button } from "./components/button";
import { Cabecalho } from "./components/cabecalho";
import { Footer } from "./components/footer";
import { Img } from "./components/img";
import { ListItem } from "./components/list-itens";
import { Paragrafo } from "./components/paragrafo";
import { Quadrado } from "./components/quadrado";
import { Title } from "./components/title";

export default function Home() {
  return (
    <>
      <Cabecalho />
      {/* <div className="grid grid-cols-2 gap-4"> */}
      <div className="flex flex-col gap-5">
        <Title text="Olá" />
        <Quadrado />
        <Button />
        <ListItem />
        <Img />
        <Paragrafo />
      </div>
      <Footer />
    </>
  );
}
