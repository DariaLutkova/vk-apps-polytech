export const getCurrentWeek = (monthSchedule) => {

  const scheduleArr = Object.entries(monthSchedule);

  const today = new Date();
  const timezoneOffset = today.getTimezoneOffset() * 60000;
  const weekStart = today.getDate() + 1 - today.getDay();
  today.setDate(weekStart);

  const weekStartKey = new Date(today - timezoneOffset).toISOString().substring(0, 10);
  let weekStartIndex = scheduleArr.findIndex(record => {
    return record[0] === weekStartKey;
  });

  let weekOffset = 6;

  if (weekStartIndex === -1) {
    weekOffset = weekOffset + 1 - new Date(scheduleArr[0][0]).getDay();
    weekStartIndex = 0;
  }

  return scheduleArr.slice(weekStartIndex, weekStartIndex + weekOffset);
};