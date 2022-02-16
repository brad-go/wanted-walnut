import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface CheckProps {
  checkAnimation: boolean;
  src: string;
  wait: number;
}

const Check = React.memo(({ checkAnimation, src, wait }: CheckProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (checkAnimation) {
      setTimeout(() => {
        setVisible(true);
      }, wait);
    } else {
      setVisible(false);
    }
  }, [checkAnimation]);

  return <>{visible && <CheckContainer src={src + `?a=${Math.random()}`} />}</>;
});

const CheckContainer = styled.img`
  width: 100%;
`;

export default Check;
