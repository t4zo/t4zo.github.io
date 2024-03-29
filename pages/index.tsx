import Link from 'next/link';

import Card from 'components/card';
import Footer from 'components/footer';
import Switch from 'components/switch';

import cards from 'cards';

export default function HomePage() {
  return (
    <div className='m-auto min-h-screen flex flex-col justify-center items-center bg-white dark:bg-[#191919] text-black dark:text-gray-300'>
      <main className='px-10 py-20 m-auto flex flex-col flex-1 justify-center items-center'>
        <Switch />
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
