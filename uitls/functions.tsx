export const alignLine = (contents: string) => {
  const altered = contents.split('\\n').map((content: string) => {
    return (
      <>
        {content}
        <br />
      </>
    );
  });
  return altered;
};
