import { useRef } from 'react';

export default function ColorInput() {
  const colorPalet = useRef();
  const divEl = useRef();

  const style = {
    divStyle: {
      width: '500px',
      height: '300px',
      margin: 'auto',
      padding: '10px',
      marginTop: '20px',
      border: '1px solid #ddd',
    },
  };

  const ChangeDivBGColor = () => {
    divEl.current.style.backgroundColor = colorPalet.current.value;
  };

  return (
    <div style={style.divStyle} ref={divEl}>
      <input type="color" ref={colorPalet} />
      <br />
      <br />
      <button onClick={ChangeDivBGColor}>색 적용</button>
    </div>
  );
}
