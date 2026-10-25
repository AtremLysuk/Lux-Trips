// Сегодняшняя дата в формате YYYY-MM-DD по местному времени.
// toISOString() отдаёт дату в UTC: после полуночи по Киеву там ещё «вчера»,
// поэтому сдвигаем на разницу с UTC
export const getToday = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
};
