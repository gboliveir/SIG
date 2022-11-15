import { Carousel } from "antd";
import { CarouselItem } from "./CarouselItem";

export function SectionAboutUs() {
  return (
    <section>
      <Carousel style={{ padding: 100, minHeight: '100vh', background: '#364d79' }}>
        <CarouselItem 
          title="Conheça a LMContabilidade"
          description="Somos o que forma a razão social LMContabilidade desde 1992. Uma empresa de serviços contábeis, fiscais e de recursos humanos!"
        />
        <CarouselItem 
          title="Seus profissionais"
          description="A equipe tem uma vasta experiência com os serviços fiscais e contábeis, estando em constante atualização conforme as transformações na legislação vigente. Conta com um suporte de informações inteligentes que atua como facilitadora em diversas atividades, sejam elas econômicas e/ou tributárias."
        />
        <CarouselItem 
          title="Onde esta localizada?"
          description="A empresa tem apenas uma sede localizada na rua xxxxx, nº xxxxx, centro, xx – xx."
        />
      </Carousel>
    </section>
  );
}