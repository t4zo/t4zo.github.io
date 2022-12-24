import { useContext, useRef, useState } from 'react';
import axios from 'axios';
import Switch from 'components/switch';
import ThemeContext from 'contexts/themeContext';
import TooltipContext from 'contexts/tooltipContext';
import Link from 'next/link';
import Tooltip from 'components/tooltip';

export default function ContactPage() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  const { tooltip, openTooltip, closeTooltip } = useContext(TooltipContext);

  const nameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const messageRef = useRef<HTMLTextAreaElement>();

  return (
    <>
      <main className='h-screen flex justify-center items-center flex-col bg-gray-50 dark:bg-[#191919] text-black dark:text-gray-300'>
        <Switch condition={darkTheme} changeCondition={toggleTheme} offIcon={'&#x2600;&#xFE0F;'} onIcon={'&#127769;'} />
        <div className=' px-6 md:px-16 py-12 w-full lg:w-2/3 xl:w-1/3'>
          <h1 className='mt-6 text-center text-3xl font-bold tracking-tight text-black dark:text-gray-100 mb-10'>Entre em Contato!</h1>
          <form method='post' onSubmit={sendMail}>
            <div>
              <div>
                <label htmlFor='name' className='sr-only'>
                  Nome
                </label>
                <input
                  id='name'
                  name='name'
                  type='name'
                  ref={nameRef}
                  required
                  className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm'
                  placeholder='Nome'
                />
              </div>
              <div>
                <label htmlFor='email' className='sr-only'>
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  ref={emailRef}
                  required
                  className='relative block w-full appearance-none rounded-none rounded-b-md border-t-0 focus:border-t border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm'
                  placeholder='Email'
                />
              </div>

              {/* <div className='col-span-6 sm:col-span-4'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                type='text'
                name='email'
                id='email'
                autoComplete='email'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
              />
            </div> */}
            </div>

            <div className='my-8'>
              <label htmlFor='message' className='sr-only'>
                Mensagem
              </label>
              <textarea
                id='message'
                name='message'
                rows={6}
                ref={messageRef}
                required
                className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm'
                placeholder='Mensagem'
              />
            </div>

            <div className='flex'>
              <Link
                href='/'
                className='group relative flex py-2 pl-4 pr-8  text-sm font-medium justify-center rounded-l-md bg-gray-50 border border-transparent hover:border hover:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'>
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <svg
                    className='w-6 h-6 text-primary-500 group-hover:text-primary-700'
                    fill='currentColor'
                    aria-hidden='true'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7'></path>
                  </svg>
                </span>
              </Link>
              <button
                type='submit'
                className='group relative flex w-full justify-center rounded-r-md bg-primary-600 py-2 px-4 text-sm font-medium text-gray-100 hover:text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'>
                Enviar
                <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
                  <svg
                    className='w-6 h-6 text-gray-100 group-hover:text-white'
                    fill='currentColor'
                    aria-hidden='true'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
        
        <Tooltip message={tooltip.message} />
      </main>
    </>
  );

  async function sendMail(e: any) {
    e.preventDefault();

    try {
      await axios.post('https://on3xxithejy362fi3nennx7mz40nbouv.lambda-url.us-east-1.on.aws', {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      });

      openTooltip('Mensagem enviada com sucesso!', 5000);

      nameRef.current.value = ''
      emailRef.current.value = ''
      messageRef.current.value = ''
    } catch (e) {
      openTooltip('Ops, ocorreu um erro, por favor, tente novamente!', 5000);
    } finally {
      setTimeout(() => {
        closeTooltip();
      }, 5000);
    }
  }
}
