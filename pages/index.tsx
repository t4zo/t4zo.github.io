import Link from 'next/link';
import { useContext } from "react";

import ThemeContext from 'contexts/themeContext';

import Card from 'components/card';
import Footer from 'components/footer';
import Switch from 'components/switch';

import artmed360Image from 'public/assets/images/artmed360.png';
import covid19Image from 'public/assets/images/covid19.jpg';
import egesplanImage from 'public/assets/images/egesplan.png';
import netflixImage from 'public/assets/images/netflix.jpg';
import osFederaImage from 'public/assets/images/osfederas.png';
import pgpImage from 'public/assets/images/pgp.png';
import sacaImage from 'public/assets/images/saca.jpg';
import saedImage from 'public/assets/images/saed.jpg';

const cards = [
  {
    title: 'SACA',
    content: 'Aplicativo móvel voltado para ajudar crianças com problemas de comunicação',
    link: 'https://play.google.com/store/apps/details?id=xyz.saca',
    image: sacaImage,
  },
  {
    title: 'Artmed 360',
    content: 'E-Commerce voltado para venda de conteúdo para a área da saúde',
    link: 'https://www.artmed360.com.br',
    image: artmed360Image,
  },
  {
    title: 'Egesplan',
    content: 'Sistema para gestão e coordenação de dados de prefeituras',
    link: 'https://egesplan.vercel.app',
    image: egesplanImage,
  },
  {
    title: 'SAED',
    content: 'Sistema de avaliação de desempenho escolar através da resolução de questões elobaradas pelos professores',
    link: 'https://saed.t4zo.com',
    image: saedImage,
  },
  {
    title: 'Netflix',
    content: 'Projeto pessoal realizando um clone com a possibilidade de criação de contas e atualização periódica do catálogo de Séries e Filmes',
    link: 'https://netflix-blush.vercel.app',
    image: netflixImage,
  },
  {
    title: 'PGP',
    content: 'Programa de Governo Participativo, um portal feito em 2020 para o então candidato a prefeito de Juazeiro, Paulo Bomfim no período eleitoral',
    link: 'https://pgpjuazeiroba.netlify.app',
    image: pgpImage,
  },
  {
    title: 'Covid19',
    content: 'Sistema para rastreamento de casos e mortes confirmadas da Covid19 por país ou globalmente',
    link: 'https://covid19-tracker-azure.vercel.app',
    image: covid19Image,
  },
  {
    title: 'Os Federa',
    content: 'Projeto para o professor, afim de atualizar seu site pessoal',
    link: 'https://osfedera.netlify.app',
    image: osFederaImage,
  },
];

export default function HomePage() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='m-auto min-h-screen flex flex-col justify-center items-center bg-white dark:bg-[#191919] text-black dark:text-gray-300'>
      <main className='px-10 py-20 m-auto flex flex-col flex-1 justify-center items-center'>
        <Switch condition={darkTheme} changeCondition={toggleTheme} offIcon={'&#x2600;&#xFE0F;'} onIcon={'&#127769;'} />
        <h1 className='text-center m-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight'>
          <span className='hover:text-primary-600 hover:cursor-pointer dark:text-gray-200 dark:hover:text-primary-600'>
            <span className='text-primary-600'>T</span>ácio de <span className='text-primary-600'>S</span>ouza <span className='text-primary-600'>C</span>ampos
          </span>
          <span> | </span>
          <Link href='/contact' className='text-primary-600 no-underline hover:underline focus:underline'>
            Contato
          </Link>
        </h1>
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 w-full mt-12 lg:max-w-6xl'>
          {cards.slice(0, 6).map((card, index) => (
            <Card key={index} title={card.title} content={card.content} link={card.link} image={card.image} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
