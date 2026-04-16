interface IButtonProps {
    onClick: ()=>void,
}

const Button = ({ onClick }: IButtonProps) => {
    return (
        <>
            <button className='font-bold text-[18px] md:text-[20px] leading-[1.3] text-(--color-text-button) bg-(--color-primary) py-[16px] px-[60px] rounded-[20px] text-center md:col-span-3 cursor-pointer animate-pulse' onClick={onClick}>Купить</button>
            <p className='inline-block text-[10px] lg:text-sm loading-[1.2] text-(--color-text-secondary) md:col-span-6'>Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению. Пользователь соглашается, что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.</p>
        </>
    )
}

export default Button;