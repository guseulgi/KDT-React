import {useState} from 'react'

export default function ConditionEx() {
  const [count, setCount] = useState(0);
  const style = {
    icon : {
      fontSize : '62px',
      border :'none',
      backgroundColor : 'white',
    }
  }
  return (
    <div>
      <button 
        style={style.icon}
        onClick={() => setCount(count + 1)}>
          { count >= 10 ? '🥳': '👍' }
      </button>
      <br/><span>{count}</span>
    </div>
  )
}
