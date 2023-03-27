const Example = () => {
  const style = {
    marginTop: '32px',
    backgroundColor: 'skyblue',
  }
  const helloStr = 'Hello, first exercise';

  const alertClick = () => {
    alert('클릭 됨');
  }

  return (
    <div style={style} onClick={alertClick}>
      {helloStr}
    </div>
  );
}
export default Example;