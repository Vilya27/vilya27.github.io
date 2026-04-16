import Image from "next/image";

interface IHeaderProps {
    min: number,
    sec: number,
    srcImage: string,
    styleTimer: string,
    styleImage: string,
}

const Header = ({ min, sec, srcImage, styleTimer, styleImage }: IHeaderProps) => (
    <header className="flex flex-col bg-(--color-secondary) items-center justify-center gap-2 py-8 xl:rounded-t-[60px]">
        <p className="text-white text-sm min-[375px]:text-lg lg:text-2xl font-semibold leading-[1.3]">Успейте открыть пробную неделю</p>
        <div className="flex items-center gap-[14px]">
            <Image
                src={srcImage}
                width={50}
                height={50}
                alt='star icon'
                className={styleImage}
            />
            <p className={styleTimer}>{min.toString().padStart(2, "0")} : {sec.toString().padStart(2, "0")}</p>
            <Image
                src={srcImage}
                width={50}
                height={50}
                alt='star icon'
                className={styleImage}
            />
        </div>
    </header>
);
export default Header;