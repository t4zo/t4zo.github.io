import { useContext } from 'react';

import ThemeContext from 'contexts/themeContext';

export default function Footer() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <footer className='p-1'>
      <a href='https://github.com/t4zo' target='_blank' rel='noopener noreferrer' className='flex justify-center items-center'>
        <img src={`/assets/images/${darkTheme ? 'github_white' : 'github'}.png`} alt='Github Repository' className='h-6' />
      </a>
    </footer>
  );
}
