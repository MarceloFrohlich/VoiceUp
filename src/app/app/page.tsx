'use client'

import ServicesImageLeft from "./components/servicesImageLeft";
import ServicesImageRight from "./components/servicesImageRight";
import { SiWhatsapp } from "react-icons/si";
import Link from "next/link";
import SobreMim from "./components/sobreMim";
import Trajetoria from "./components/trajetoria";
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from "./components/footer";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      easing: 'ease-out', // Função de tempo para a animação
      once: true, // Se a animação deve ocorrer apenas uma vez ao rolar
    })
  }, [])

  return (
    <section className="w-screen">
      <div className="w-full bg-firstBanner bg-cover bg-center min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:h-3/4 px-4 lg:px-20">
          <div className="text-gray-400 flex-1 flex flex-col justify-center py-10 lg:py-0">
            <div className="flex flex-col gap-8 animate-slideInFromLeft">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-green-900 font-bold animate-pulse">Consultoria em Marketing Digital | Gestão de Tráfego</h1>
              <p className="text-xl md:text-2xl lg:text-3xl">Uma estratégia de marketing digital bem elaborada pode transformar a visibilidade e o sucesso do seu negócio!</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center animate-slideInFromRight relative mt-10 lg:mt-0">
            <div className="absolute bg-slate-100/60 w-3/4 h-full blur"></div>
            <div className="w-3/4 bg-white bg-opacity-70 rounded-xl shadow-2xl flex flex-col p-5 lg:p-10 relative z-10">
              <h1 className="text-2xl lg:text-3xl font-bold text-green-900 text-center py-5">Vamos conversar?</h1>
              <p className="text-md md:text-lg text-gray-900 leading-7 text-center">Está pronto para elevar o potencial digital da sua empresa? Entre em contato e descubra como podemos trabalhar juntos para alcançar seus objetivos de marketing.</p>
            </div>
          </div>
        </div>
      </div>

      <SobreMim />

      <div className="fixed bottom-6 right-6 animate-bounce text-4xl z-50 text-green-800">
        <Link href='https://wa.me/5551993504346' target="_blank">
          <SiWhatsapp />
        </Link>
      </div>

      <section className="flex justify-center" data-aos="fade-up">
        <div className="w-full container mx-auto flex flex-col items-center justify-center px-4 py-10">
          <div className="text-center text-gray-300 py-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-green-900 font-bold">Cansado de perder oportunidades de negócio?</h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl mt-4">Veja como podemos lhe ajudar</h2>
          </div>

          <ServicesImageRight
            background="bg-socialMedia"
            description="Identifique pontos fortes e áreas de melhoria em suas plataformas sociais para aumentar o engajamento e a fidelidade do cliente"
            title="Análise de Redes Sociais"
          />

          <ServicesImageLeft
            background="bg-avaliacao"
            description="Otimize seus investimentos em publicidade digital com análises detalhadas de desempenho e recomendações estratégicas"
            title="Avaliação de Anúncios Online"
          />

          <ServicesImageRight
            background="bg-meuNegocio"
            description="Garanta que sua empresa seja facilmente encontrada por clientes locais, com informações atualizadas e atraentes no Google"
            title="Cadastro de Perfil de Empresas no Google Meu Negócio"
          />

          <ServicesImageLeft
            background="bg-seo"
            description="Melhore a visibilidade online da sua empresa com estratégias personalizadas de SEO e marketing de conteúdo"
            title="Aperfeiçoamento do Posicionamento Digital"
          />

          <ServicesImageRight
            background="bg-branding"
            description="Desenvolva uma identidade de marca forte e coerente que ressoe com seu público-alvo"
            title="Construção de Marca (Branding)"
          />

          <ServicesImageLeft
            background="bg-estrategia"
            description="Crie conteúdos relevantes e envolventes que atraem e mantêm a atenção dos seus clientes"
            title="Desenvolvimento de Estratégias de Conteúdo Digital"
          />

          <ServicesImageRight
            background="bg-consultoria"
            description="Receba orientação especializada para maximizar o impacto das suas campanhas digitais"
            title="Consultoria em Mídias Digitais"
          />

          <ServicesImageLeft
            background="bg-trafego"
            description="Colocar o anúncio certo, na hora certa, na frente da pessoa certa. Se é disso que você precisa, alcance mais clientes potenciais com campanhas de tráfego pago bem geridas e otimizadas para maximizar seus resultados"
            title="Gestão de Tráfego Pago"
          />
        </div>
      </section>

      <Trajetoria />

      <Footer />

    </section>
  )
}
