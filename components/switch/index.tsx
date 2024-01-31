import { useContext } from "react";

import ThemeContext from 'contexts/themeContext';

export default function Switch() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  const translateX = darkTheme ? 'translate-x-6' : 'translate-x-0'

  return (
    <label htmlFor='toggleTheme' className='fixed top-8 right-4 w-[50px] h-[24px] rounded-3xl flex cursor-pointer bg-[#191919] dark:bg-gray-700 z-50'>
      <input type='checkbox' className='hidden' name='toggleTheme' id='toggleTheme' onChange={toggleTheme} checked={darkTheme} />
      <span className='w-1/2 text-base text-center pointer-events-none' dangerouslySetInnerHTML={{ __html: '&#x2600;&#xFE0F;' }}></span>
      <span className='w-1/2 text-base text-center pointer-events-none' dangerouslySetInnerHTML={{ __html: '&#127769;' }}></span>
      <span
        className={`absolute top-[1px] left-[1px] w-[22px] h-[22px] rounded-full bg-white transform transition-transform ${translateX}`}></span>
    </label>
  );
}
