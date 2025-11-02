import { FaCodepen, FaGraduationCap, FaReact } from "react-icons/fa";
import ResumeCard from "./ResumeCard";
import { BsDatabase } from "react-icons/bs";
import { PiCertificateBold } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";

const Resume = () => {
  return (
    <div className="pt-16 pb-16 ">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 ">
        {/* work */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Experiências <span className="text-cyan-200">de Trabalho</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={MdOutlineWorkOutline}
              date="Out 2021 - Out 2025"
              link="https://www.midia3.com.br/"
              linkDescription="www.midia3.com.br"
              role="Mobile Developer - React Native "
              description="Midia3, Goldies Saúde Integrada - Home Office (Brasíl), Fui o desenvolvedor principal da App Goldies Saúde, solução desenvolvida para o
              cuidado de saúde de idosos da Halth Tech!"
            />
            <ResumeCard
              Icon={MdOutlineWorkOutline}
              date="Out 2021 - Nov 2024"
              link="https://canseivendi.com.br/"
              linkDescription="canseivendi.com.br"
              role="Full-Stack Developer PHP - OpenCart"
              description="@cansei_vendi - Home Office (Brasíl), Minha principal responsabilidade foi de criar novos modulos
              na plataforma de E-comerce já existente desenvolvida com framework OpenCart."
            />
            <ResumeCard
              date="Jan 2020 - Dez 2021"
              Icon={MdOutlineWorkOutline}
              link="https://www.instagram.com/internacionalseguros.is/"
              linkDescription="@internacionalseguros.is"
              role="Front-End Developer - NextJS"
              description="SNIR - Presencial (Angola), Atuei no desenvolvimento de um software de gestão de apólice de seguro para
              Internacional Seguro, onde iniciei como um desenvolvedor pleno e me tornei
              o responsável da aplicação, com maior destaque no desenvolvimeto do módulo de contrato de mediação e corretagem de seguro, co-seguro & resseguro."
            />
          </div>
        </div>
        {/* education */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Educação <span className="text-cyan-200">& Formações</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={FaGraduationCap}
              date="Fev 2020 - Presente"
              role="Engenharia Informática, 5º Ano"
              description="ISPTEC - Instituto Superior Politécnico de Tecnologias e Ciências, finalizando a minha licenciatura."
              link="https://www.isptec.co.ao/"
              linkDescription="isptec.co.ao"
            />
            <ResumeCard
              Icon={PiCertificateBold}
              date="Jan 2020 - Dez 2025"
              role="Curso Técnico de Informática"
              description="IPIL - Instituto Politécnico Industrial de Luanda, Estudei durante 4 Anos, finalizando com média 15 o curso de informática."
              link="https://ipil.ao/"
              linkDescription="ipil.ao"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
