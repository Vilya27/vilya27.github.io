import Image from 'next/image'

interface ICheckboxProps {
    isChecked: boolean,
    isError: boolean,
    setIsChecked: (e: boolean) => void,
}

const Checkbox = ({ isChecked, isError, setIsChecked }: ICheckboxProps) => {
    let errorStyle = "inline-block border-[1.5px] border-(--color-border-secondary) rounded-[3px] w-[100%] h-[100%] max-w-[30px] max-h-[30px] xl:max-w-[32px] xl:max-h-[32px] md:max-w-8 md:max-h-8 cursor-pointer py-[6px] px-[3px] text-[9px] xl:text-xs";
    if(isError) errorStyle = "inline-block border-[1.5px] border-(--color-danger) rounded-[3px] w-[100%] h-[100%] max-w-[30px] max-h-[30px] xl:max-w-[32px] xl:max-h-[32px] md:max-w-8 md:max-h-8 cursor-pointer py-[6px] px-[3px] text-[9px] xl:text-xs";
    return (
    <div className='flex gap-[10px] md:col-span-4'>
        <label className={errorStyle}>
            <input type="checkbox" name="privacy_policy" className='hidden peer' checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
            <Image
                src={"/checked.svg"}
                width={100}
                height={100}
                alt='checked mark'
                className='inline-block opacity-0 peer-checked:opacity-100 '
            />
        </label>
        <p className='text-xs lg:text-base leading-[1.2] text-(--color-text-link)'>Я согласен с <a className='underline cursor-pointer hover:text-white'>офертой рекуррентных платежей</a> и <a className='underline cursor-pointer hover:text-white'>Политикой конфиденциальности</a></p>
    </div>
    )
};

export default Checkbox;