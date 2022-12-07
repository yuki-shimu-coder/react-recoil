import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { countState } from '../store/countState';
import { textState } from '../store/textState';


export const FirstScreen = () => {
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
  const navigateTop = () => navigate('/')
  return (
    <>
      <h1>FirstScreen</h1>
      <p>Stateの値：{text}</p>
      <input type="text" onChange={onChange} value={text} />
      <br />
      <p>count：{count}</p>
      <button onClick={onClick}>count++</button>
      <button onClick={navigateTop}>TopScreenへ移動する</button>
    </>
  );
}