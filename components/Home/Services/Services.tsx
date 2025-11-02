import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white  ">
        Aplicando conhecimento <br />e gerando resultados impactantes
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <ServiceCard
          icon="/images/s1.png"
          name="UI & UX"
          description="Tenho experiência em UI/UX, criando interfaces intuitivas e focadas na melhor experiência do usuário.
          Aplico princípios de design para desenvolver aplicações funcionais, modernas e agradáveis de usar."
        />
        <ServiceCard
          icon="/images/s2.png"
          name="Web & Mobile App"
          description="+6 anos desenvolvendo aplicações web e mobile com foco em Next.js, React.js e Node.js.
          Entrego soluções modernas, rápidas e bem estruturadas, unindo performance, design e ótima experiência do usuário."
        />
        <ServiceCard
          icon="/images/s3.png"
          name="Padrões & Criatividade"
          description="Aplico design patterns como SOLID, Orientação a Objetos e Factory Pattern para criar código limpo e escalável.
          Tenho forte capacidade criativa, unindo lógica e inovação para desenvolver soluções eficientes e originais."
        />
        <ServiceCard
          icon="/images/s4.png"
          name="Desenvolvimento"
          description="Sou um desenvolvedor com excelente domínio em estrutura de dados, algoritmos e problem solving.
          Tenho uma base sólida em lógica de programação, o que me permite criar soluções eficientes e bem otimizadas."
        />
      </div>
    </div>
  );
};

export default Services;
