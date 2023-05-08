
const processDate = (date: string) => {
  const D = new Date(date)
  const DDay = D.getDate();
  const DMonth = D.getMonth() + 1;
  const DYear = D.getFullYear();

  return {
    DDay,
    DMonth,
    DYear,
    D
  }
}

export default processDate