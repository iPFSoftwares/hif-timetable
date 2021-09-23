import { getTimeFromNumber, addMinutesToTime, getTimeFromRow } from './utils';

test('Formats numbers correctly', () => {
  expect(getTimeFromNumber(1330)).toBe("13:30");
  expect(getTimeFromNumber(915)).toBe("09:15");
});

test('Add minutes to time', () => {
  expect(addMinutesToTime(1330, 50)).toBe("14:20");
  expect(addMinutesToTime(830, 15)).toBe("08:45");
  expect(addMinutesToTime(1615, 70)).toBe("17:25");
});

test('Get time from row', () => {
  expect(getTimeFromRow(1)).toBe("08:00");
  expect(getTimeFromRow(7)).toBe("09:30");
  expect(getTimeFromRow(14)).toBe("11:15");
  expect(getTimeFromRow(20)).toBe("12:45");
  expect(getTimeFromRow(29)).toBe("15:00");
});
