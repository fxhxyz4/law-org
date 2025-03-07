const createDate = () => {
  const DATE = new Date();
  const YEAR = DATE.getFullYear();

  return YEAR;
}

export { createDate };
