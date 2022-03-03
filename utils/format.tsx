import React from 'react';

export const alignLine = (contents: string) => {
  const altered = contents.split('\\n').map((content: string, idx: number) => {
    return (
      <React.Fragment key={idx}>
        {content}
        <br />
      </React.Fragment>
    );
  });
  return altered;
};
