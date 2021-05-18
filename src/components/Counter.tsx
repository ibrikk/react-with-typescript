import React, { useState } from 'react';

interface Props {
  children: (data: {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }) => JSX.Element | null;
}

export const Counter: React.FC<Props> = () => {
  const [count, setCount] = useState(0);

  return <div>{children({count, setCount})}</div>;
};
