import { useRecoilState } from 'recoil';
import { countState } from '../store/countState';
import { textState } from '../store/textState';


export const TopScreen = () => {
  /** textState */
  const [text, setText] = useRecoilState(textState);
  const onChange = (event) => {
    setText(event.target.value)
  }
  /** countState */
  const [count, setCount] = useRecoilState(countState)
  const onClick = () => { setCount(count + 1) }
  return (
    <>
      <h1>TopScreen</h1>
      <p>Stateの値：{text}</p>
      <input type="text" onChange={onChange} />
      <br />
      <p>count：{count}</p>
      <button onClick={onClick}>count++</button>
    </>
  );
}