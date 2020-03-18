import * as DateConversion from '../DateConversion';
import moment from "moment";

test('daysBetween', () => {
    const dateOne = moment(new Date(2019, 1, 1));
    const dateTwo = moment(new Date(2019, 1, 8));
    const dateThree = moment(new Date(2020, 3, 30));
    expect(DateConversion.daysBetween(dateOne, dateTwo)).toBe(7);
    expect(DateConversion.daysBetween(dateOne, dateThree)).toBe(453);
  });

test('fullMonthDifference', () => {
    const differenceOne = DateConversion.fullMonthDifference(new Date(2019, 1, 1), new Date(2019, 1, 5));
    const differenceTwo = DateConversion.fullMonthDifference(new Date(2019, 1, 1), new Date(2019, 2, 1));
    const differenceThree = DateConversion.fullMonthDifference(new Date(2020, 0, 0), new Date(2020, 2, 0));
  
    expect(differenceOne).toBe(1);
    expect(differenceTwo).toBe(2);
    expect(differenceThree).toBe(3);
  });
  
  test('fullYearDifference', () => {
    const differenceTwo = DateConversion.fullYearDifference(new Date(2019, 1, 1), new Date(2020, 2, 1));
    const differenceOne = DateConversion.fullYearDifference(new Date(2019, 1, 1), new Date(2019, 1, 5));
    const differenceThree = DateConversion.fullYearDifference(new Date(2011, 1, 1), new Date(2020, 2, 0));
  
    expect(differenceOne).toBe(1);
    expect(differenceTwo).toBe(2)
    expect(differenceThree).toBe(10)
  })