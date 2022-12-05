import { useRecoilState } from 'recoil';
import { textState } from '../store/textState';


export const TopScreen = () => {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event) => {
    setText(event.target.value)
  }
  return (
    <>
      <h1>TopScreen</h1>
      <p>Stateの値：{text}</p>
      <input type="text" onChange={onChange} />
    </>
  );
}