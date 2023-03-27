const EventHandler = () => {
  const clickFunc = () => {
    alert('이벤트 2');
  }
  return (
    <>
    <span onClick={clickFunc}>클릭</span><br/>
    <span onClick={() => {
      alert('이벤트 핸들러');
    }}>Click</span><br/>
    <span onClick={() => {
      let num = 10;
      num += 5;
      console.log(num);
    }}>숫자 계산</span>
    </>
  )
}

export default EventHandler;