import React, { useState } from 'react';
import * as dayjs from 'dayjs';

const CreateDay = () => {
  const [day, setDay] = useState({
    date: '',
    weight: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleWeight = (e) => {
    setDay({ ...day, weight: e.target.value });
  };

  const handleDate = () => {
    setDay({ ...day, date: dayjs().format('ddd DD/MM/YYYY') });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Create Day</h1>
        <label htmlFor='Weight'>Weight: </label>
        <input id='Weight' type='number' onChange={handleWeight} />
        <h2>{day.date}</h2>
        {console.log(day)}
        <button onClick={handleDate}>Get Date</button>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default CreateDay;
