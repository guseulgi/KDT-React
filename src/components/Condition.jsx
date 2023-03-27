import {useState} from 'react'

export default function Condition() {
  const [condition, setCondition] = useState(true);

  return (
    <div>
      <h1 style={{fontSize:'100px'}}>{condition ? '👍' : '✨'}</h1>
      <button onClick={() => setCondition(!condition)}>Change</button>
    </div>
  )
}
