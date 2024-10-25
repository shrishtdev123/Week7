
import { RecoilRoot } from 'recoil';
import { Count } from './components/Count';

 function App() {
    return (
        <RecoilRoot>
            <div>
                <h1>Counter App</h1>
                <Count />
            </div>
        </RecoilRoot>
    );
}
export default App