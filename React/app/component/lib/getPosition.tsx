export const getTop = (target: HTMLDivElement | null) => {
  if (target === null) return undefined;
  return (
    window.scrollY + target.getBoundingClientRect().top
    + target.clientHeight
  );
};
export const getLeft = (target: HTMLDivElement | null) => {
  if (target === null) return undefined;
  return (
    window.scrollX + target.getBoundingClientRect().left
  );
};
