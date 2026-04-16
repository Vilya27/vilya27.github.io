import { tariffType } from "@/constants"

interface CardProps {
  card: tariffType,
  id: number,
  nameInput: string,
  showDiscont: boolean,
}

const Card = ({ card, id, nameInput, showDiscont }: CardProps) => {
  let styleContainer = `relative bg-(--background-secondary) border-[2px] ${card.is_best ? "border-(--color-primary)" : "border-(--color-border)"} rounded-[20px] md:rounded-[34px] p-[18px] md:pt-[34px] lg:pb-[28px] pr-[14px] md:col-span-6  md:max-h-[190px] cursor-pointer has-checked:outline-2`;
  let stylePrice = `font-semibold text-3xl min-[375px]:text-[34px] md:text-[40px] xl:text-[50px] ${card.is_best ? "text-(--color-primary)" : "text-white"}`;
  let percent = Math.round((card.full_price - card.price) / card.full_price * 100);
  if (percent % 2 === 0) percent = Math.round(percent / 10) * 10;
  return (
    <label className={styleContainer}>
      <div className='absolute flex gap-2 right-[14px] -top-[2px] md:left-[50px]  md:right-[20px] md:justify-between'>
        {showDiscont && <div className='bg-(--color-danger) px-[6px] py-[3px] rounded-b-[6px] font-medium font-[13px] min-[375px]:text-base md:text-[22px] leading-[1.3] text-white'>-{percent}%</div>}
        {card.is_best && showDiscont && <div className='font-medium font-[13px] min-[375px]:text-base md:text-[22px] leading-[1.3] tracking-widest text-(--color-primary) pt-[6px] md:pt-[10px]'>хит!</div>}
      </div>
      <div className='flex gap-[30px] md:items-center justify-center'>
        <div className='flex flex-col gap-y-3 basis-1/2 md:basis-1/4 lg:basis-2/3 items-start md:items-center'>
          <p className='font-medium text-base min-[375px]:text-lg md:text-[26px] leading-[1.2] text-white'>{card.period}</p>
          <div className='flex flex-col items-end'>
            {showDiscont && <p className={stylePrice}>{card.price} ₽</p>}
            {showDiscont &&<p className='font-normal text-sm min-[375px]:text-base md:text-2xl leading-[1.2] text-(--color-text-primary) line-through'>{card.full_price} ₽</p>}
            {!showDiscont &&<p className={stylePrice}>{card.full_price} ₽</p>}
          </div>
        </div>
        <p className='text-white text-sm md:text-base leading-[1.3] flex items-center basis-1/2  md:max-w-[328px] lg:mr-[80px]'>{card.text}</p>
      </div>
      <input type="radio" name={nameInput} id={`${id}`} className="hidden" />
    </label>
  )
}

export default Card;