import { useContext } from 'react';

import GitHub from '~/assets/images/github.png';
import GitHubWhite from '~/assets/images/github_white.png';
import ThemeContext from '~/contexts/themeContext';


export default function Footer() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <footer className='p-1 border-t border-white w-full'>
      <a href='https://github.com/t4zo' target='_blank' rel='noopener noreferrer' className='flex justify-center items-center'>
        <img src={darkTheme ? GitHubWhite : GitHub} alt='Github Repository' className='h-6' />
      </a>
    </footer>
  );
}
