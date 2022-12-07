import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { countState } from '../store/countState';
import { textState } from '../store/textState';


export const TopScreen = () => {
  /** textState */
  const [text, setText] = useRecoilState(textState);
  const onChange = (event) => {
    setText(event.target.value)
  }
  /** ナビゲーションの設定 */
  const navigate = useNavigate()

  /** countState */
  const [count, setCount] = useRecoilState(countState)
  const onClick = () => { setCount(count + 1) }
  const navigateFirstScreen = () => navigate('/first')
  return (
    <>
      <h1>TopScreen</h1>
      <p>Stateの値：{text}</p>
      <input type="text" onChange={onChange} value={text} />
      <br />
      <p>count：{count}</p>
      <button onClick={onClick}>count++</button>
      <button onClick={navigateFirstScreen}>FirstScreenへ移動する</button>
    </>
  );
}