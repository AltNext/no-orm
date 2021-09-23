import { intervalStringValue, intervalToMilliseconds } from '..';

import type { IPostgresInterval } from '../interfaces';

describe('postrgres interval', () => {
  it('ms', () => {
    const interval: IPostgresInterval = {
      minutes: 10,
      seconds: 4,
      milliseconds: 3,
    };

    expect(intervalToMilliseconds(interval)).toStrictEqual(604_003);
  });

  it('ms2', () => {
    const interval: IPostgresInterval = {
      days: 2,
      hours: 2,
    };

    expect(intervalToMilliseconds(interval)).toStrictEqual(180_000_000);
  });

  it('string', () => {
    const interval: IPostgresInterval = {
      minutes: 10,
      seconds: 4,
      milliseconds: 3,
    };

    expect(intervalStringValue(interval)).toStrictEqual('10 minutes 4 seconds 3 milliseconds');
  });
});