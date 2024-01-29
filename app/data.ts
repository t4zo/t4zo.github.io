import { Card } from "~/types";

import artmed360Image from '~/assets/images/artmed360.png';
import covid19Image from '~/assets/images/covid19.jpg';
import egesplanImage from '~/assets/images/egesplan.png';
import netflixImage from '~/assets/images/netflix.jpg';
import osFederaImage from '~/assets/images/osfederas.png';
import pgpImage from '~/assets/images/pgp.png';
import sacaImage from '~/assets/images/saca.jpg';
import saedImage from '~/assets/images/saed.jpg';

const cards: Card[] = [
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

export default cards;