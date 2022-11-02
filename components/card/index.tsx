import Image from 'next/image';
import styles from './index.module.scss';

interface Props {
  link: string;
  image: StaticImageData;
  title: string;
  content: string;
}

export default function Card({ link, image, title, content }: Props) {
  return (
    <a href={link} className={`${styles.card} dark:hover:text-white dark:border-white`} target='_blank'>
      {/* 'grid-rows-2' does not work with 'auto-rows-min' for min-content, to fix, was created the grid-rows-2min custom class */}
      <div className='grid grid-flow-col grid-cols-1 grid-rows-2min md:grid-flow-row md:grid-rows-1 md:grid-cols-3 h-full'>
        <div className={`${styles.imageWrapper} lg:order-2`}>
        <div className='aspect-w-16 aspect-h-9'>
        <Image
          src={image}
          alt={`Imagem do ${title}`}
          className='rounded-t-md md:rounded-none md:rounded-l-md lg:rounded-none lg:rounded-r-md'
          // placeholder='blur'
          // width={350}
          // height={200}
          objectFit='cover'

          layout='fill'
        />
        </div>
        </div>
        <div className='p-5 pb-12 md:pb-5 md:col-span-2'>
          <div className='flex items-center mb-4 space-x-2'>
            <h3>{title}</h3>
            <span>&rarr;</span>
          </div>
          <p className='text-lg md:text-sm'>{content}</p>
        </div>
      </div>
    </a>
  );
}
