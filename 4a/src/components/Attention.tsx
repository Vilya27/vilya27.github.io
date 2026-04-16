import Image from 'next/image'

const Attention = () => (
    <div className='flex gap-[6px] md:gap-2 bg-(--background-tertiary) rounded-[16px] py-[14px] pr-[20px] pl-[12px] md:py-[18px] md:px-[20px] mb-[16px] md:col-span-4 lg:mt-[6px]'>
        <div className='pt-[5px] max-w-[22px]' >
            <Image
                src={"/exclamationMark.svg"}
                width={100}
                height={100}
                alt='exclamation mark'
                className=' h-[16px] lg:h-[18px]'

            />
        </div>
        <p className='text-xs leading-[1.3] text-white md:text-base min-[375px]:max-w-[260px] md:max-w-none whitespace-break-spaces md:whitespace-normal'>Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц</p>
    </div>
)

export default Attention;