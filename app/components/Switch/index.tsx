type Props = {
  condition: boolean;
  changeCondition: () => void;
  offIcon: any;
  onIcon: any;
}

export default function Switch({ condition, changeCondition, offIcon, onIcon }: Props) {
  console.log({condition, changeCondition})
  return (
    <label htmlFor='toggleTheme' className='fixed top-8 right-4 w-[50px] h-[24px] rounded-3xl flex cursor-pointer bg-[#191919] dark:bg-gray-700 z-50'>
      <input type='checkbox' className='hidden' name='toggleTheme' id='toggleTheme' onChange={changeCondition} checked={condition} />
      <span className='w-1/2 text-base text-center pointer-events-none' dangerouslySetInnerHTML={{ __html: offIcon }}></span>
      <span className='w-1/2 text-base text-center pointer-events-none'dangerouslySetInnerHTML={{ __html: onIcon }}></span>
      <span
        className={`absolute top-[1px] left-[1px] w-[22px] h-[22px] rounded-full bg-white transform transition-transform ${
          condition ? 'translate-x-6' : 'translate-x-0'
        }`}></span>
    </label>
  );
}
