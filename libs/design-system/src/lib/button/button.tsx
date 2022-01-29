import { FunctionComponent, useState } from "react";

export interface ButtonProps {
  title: string;
}

export const Button: FunctionComponent<ButtonProps> = ({title}) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(previousCount => previousCount+1)
  }

  return (
    <button onClick={increment}>
      {`${title} - ${count}`}
    </button>
  );
}

