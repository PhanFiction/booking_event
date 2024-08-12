import React from 'react';

export default function ModifiedDate({ date }) {
  const newDate = new Date(date);

  return (
    <span>
      { newDate.toLocaleString() }
    </span>
  )
}
