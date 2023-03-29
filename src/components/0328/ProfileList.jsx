import React from 'react'
import Profile from './Profile'

export default function ProfileList() {
  const pororoObjArr = [
    {
      name:'뽀로로',
      age:5,
      nickname:'사고뭉치',
    },
    {
      name:'루피',
      age:4,
      nickname:'공주님',
    },
    {
      name:'크롱',
      age:5,
      nickname:'장난꾸러기',
    },
  ]
  return (
    <div>
      <Profile objArr={pororoObjArr} />
    </div>
  )
}
