import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Switch from 'components/switch';
import Tooltip from 'components/tooltip';
import TooltipContext from 'contexts/tooltipContext';
import Link from 'next/link';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { contactSchema } from 'schemas/contact.schema';
import { useContactStore } from 'stores/contact.store';

export default function ContactPage() {
  const { setName, setEmail, setMessage, setContact } = useContactStore()
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: zodResolver(contactSchema) });

  const { tooltip, openTooltip, closeTooltip } = useContext(TooltipContext);

  const hasNameError = errors.name?.message

  return (
    <>
      <main className='h-screen flex justify-center items-center flex-col bg-gray-50 dark:bg-[#191919] text-black dark:text-gray-300'>
        <Switch />
        <div className=' px-6 md:px-16 py-12 w-full lg:w-2/3 xl:w-1/3'>
          <h1 className='mt-6 text-center text-3xl font-bold tracking-tight text-black dark:text-gray-100 mb-10'>Entre em Contato!</h1>
          <form method='post' onSubmit={handleSubmit(sendMail)}>
            <div>
              <div>
                <label htmlFor='name' className='sr-only'>
                  Nome
                </label>
                <input
                  id='name'
                  name='name'
                  type='name'
                  {...register('name')}
                  required
                  className={`relative block w-full appearance-none rounded-none ${hasNameError ? 'rounded-md' : 'rounded-t-md'} border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm`}
                  placeholder='Nome'
                />
              </div>
              {errors.name?.message && <p className='text-red-600 mb-4'>{errors.name?.message}</p>}
              <div>
                <label htmlFor='email' className='sr-only'>
                  E-mail
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  {...register('email')}
                  required
                  className={`relative block w-full appearance-none rounded-none ${hasNameError ? 'rounded-b' : 'border-t-0 rounded-b-md'} focus:border-t border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm`}
                  placeholder='E-mail'
                />
              </div>
              {errors.email?.message && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>

            <div className={`${hasNameError ? 'mt-4' : 'mt-8'}`}>
              <label htmlFor='message' className='sr-only'>
                Mensagem
              </label>
              <textarea
                id='message'
                name='message'
                rows={6}
                {...register('message')}
                required
                className='relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm'
                placeholder='Mensagem'
              />
            </div>
            {errors.message?.message && <p className='text-red-600 mb-8'>{errors.message?.message}</p>}

            <div className='flex mt-8'>
              <Link
                href='/'
                className='group relative flex py-2 pl-4 pr-8  text-sm font-medium justify-center rounded-l-md bg-gray-50 border hover:border hover:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'>
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
              </button>
            </div>
          </form>
        </div>
        
        <Tooltip message={tooltip.message} />
      </main>
    </>
  );

  async function sendMail(e: any) {
    setContact({ name: e.name, email: e.email, message: e.message });
    setName(e.name);
    setEmail(e.email);
    setMessage(e.message);

    try {
      await axios.post('https://on3xxithejy362fi3nennx7mz40nbouv.lambda-url.us-east-1.on.aws', {
        name: e.name,
        email: e.email,
        message: e.message,
      });

      reset();
      openTooltip('Mensagem enviada com sucesso!', 5000);
    } catch (e) {
      console.error(e)
      openTooltip('Ops, ocorreu um erro, por favor, tente novamente!', 5000);
    } finally {
      setTimeout(() => {
        closeTooltip();
      }, 5000);
    }
  }
}
