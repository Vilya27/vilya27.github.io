import Card from "@/components/Card"
import { tariffType } from "@/constants"
import { useEffect, useState } from "react"

import Checkbox from '@/components/Checkbox'
import Attention from '@/components/Attention'
import Button from '@/components/Button'
import GetTariffs from '@/pages/api/hello';

interface ICardGrid {
    showDiscont: boolean,
}

const CardGrid = ({showDiscont}: ICardGrid) => {
    const [tariffs, setTariffs] = useState<Array<tariffType> | null>(null);
    const [isChecked, setIsChecked] = useState(false);
    const [showError, setShowError] = useState(false);
    useEffect(() => {
        const fetchGetTariffs = async () => {
            try {
                let res = await GetTariffs();
                setTariffs(res);
            } catch (err) {
                console.error('Ошибка при запросе:', err);
            }
        };
        fetchGetTariffs();
    }, [])

    const handleChcked = (e: boolean) => {
        setIsChecked(e);
        setShowError(false);
    }

    const handleWrong = () => {
        if (!isChecked) {
            setShowError(true);
        }
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-6 gap-[6px] min-[375px]:gap-2 lg:gap-[14px] lg:max-w-[748px]'>
            {tariffs && tariffs.slice().reverse().map((item, index) => (<Card key={index} card={item} id={index} nameInput={"tariffs"} showDiscont={showDiscont}/>))}
            <Attention />
            <Checkbox setIsChecked={handleChcked} isChecked={isChecked} isError={showError} />
            <Button onClick={handleWrong} />
        </div>
    )
}
export default CardGrid;