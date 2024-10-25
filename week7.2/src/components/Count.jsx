
import { useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from '../store/atom/countAtom';
import { EvenooD } from './EvenooD';



export const Count = () => {
    return (
        <div>
            <CountRender />
            <Button />
        </div>
    );
};

const CountRender = () => {
    const count = useRecoilValue(countAtom);
    return <div>{count}</div>;
};

const Button = () => {
    const [count, setCount] = useRecoilState(countAtom);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}
            >
            Increment</button>
            <button onClick={() => setCount(count - 1)}>
            Decrement</button>
            <div>
                
                   <EvenooD/>
                
            </div>
        </div>
    );
};
