// A simple tool that will tell you whether a year is a leap year, according to the following rules:

// All years divisible by 400 ARE leap years (e.g. 2000 was a leap year)
// All years divisible by 100 but not by 400 are NOT leap years (e.g. 1700, 1800 and 1900 were not leap years)
// All years divisible by 4 and not by 100 ARE leap years (e.g. 2004, 2008 and 2012 were leap years)
// All years not divisible by 4 are NOT leap years (e.g. 2009, 2010 and 2011 were not leap years)
// Example output


describe('Leap', function() {
  var leap

  it('it is a leap year 2020', function() {
    leap = new Leap();
    expect(leap.leapYears(2020)).toBe(true)
  })

  it('it is a leap year 2016', function() {
    leap = new Leap();
    expect(leap.leapYears(2016)).toBe(true)
  })

  it('it is a leap year 2012', function() {
    leap = new Leap();
    expect(leap.leapYears(2012)).toBe(true)
  })

  it('it is a leap year 2011', function() {
    leap = new Leap();
    expect(leap.leapYears(2011)).toBe(false)
  })

  it('it is a leap year 2009', function() {
    leap = new Leap();
    expect(leap.leapYears(2009)).toBe(false)
  })

  it('it is a leap year 1700', function() {
    leap = new Leap();
    expect(leap.leapYears(1700)).toBe(false)
  })

  it('it is a leap year 2000', function() {
    leap = new Leap();
    expect(leap.leapYears(2000)).toBe(true)
  })

})