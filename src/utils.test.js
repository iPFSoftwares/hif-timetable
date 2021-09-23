import { getTimeFromNumber, addMinutesToTime, getTimeFromRow, getNumberFromTimeArray, numberTimeDiff } from './utils';

test('Get time from number', () => {
  expect(getTimeFromNumber(1330)).toBe("13:30");
  expect(getTimeFromNumber(915)).toBe("09:15");
  expect(getTimeFromNumber(805)).toBe("08:05");
});

test('Get number from time array', () => {
  // expect(getNumberFromTimeArray([13,0])).toBe(1300);
  expect(getNumberFromTimeArray([9,5])).toBe(905);
  expect(getNumberFromTimeArray([8,0])).toBe(800);
  expect(getNumberFromTimeArray([12,30])).toBe(1230);
  expect(getNumberFromTimeArray([14,15])).toBe(1415);
});

test('Get number time diff', () => {
  expect(numberTimeDiff(1330, 1300)).toBe(30);
  expect(numberTimeDiff(1330, 1230)).toBe(60);
  expect(numberTimeDiff(1505, 1445)).toBe(20);
  expect(numberTimeDiff(905, 800)).toBe(65);
  expect(numberTimeDiff(1000, 905)).toBe(55);
});

test('Add minutes to time', () => {
  expect(addMinutesToTime(1330, 50)).toBe("14:20");
  expect(addMinutesToTime(830, 15)).toBe("08:45");
  expect(addMinutesToTime(830, 60)).toBe("09:30");
  expect(addMinutesToTime(1615, 70)).toBe("17:25");
});

test('Get time from row', () => {
  expect(getTimeFromRow(1)).toBe("08:00");
  expect(getTimeFromRow(7)).toBe("09:30");
  expect(getTimeFromRow(14)).toBe("11:15");
  expect(getTimeFromRow(20)).toBe("12:45");
  expect(getTimeFromRow(29)).toBe("15:00");
});
