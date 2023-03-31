import React, { useEffect, useState } from 'react';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);

  const fetchData = async () => {
    const resFetch = await fetch('http://localhost:4000/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (resFetch.status !== 200) return;

    const data = await resFetch.json();
    setDataArr((cur) => (cur = data));
    console.log(dataArr);
  };

  const fetchData2 = async () => {
    const resData = await fetch('http://localhost:4000/').then((res) =>
      res.json(),
    );

    setDataArr((cur) => resData);
  };

  useEffect(() => {
    fetchData2();
  }, []);

  return (
    <>
      {dataArr.map((e, idx) => {
        return <ProfileComponent {...e} key={idx} />;
      })}
    </>
  );
}
