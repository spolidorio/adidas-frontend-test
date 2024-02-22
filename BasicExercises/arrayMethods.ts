// # Using functional programming with array methods

// We have a list of people and we want to obtain the average age of the women taking into account only the years, not the months.

// Write a snippet of code which using the test data returns the average age with the next restrictions:

// - Women
// - Only years, not months (`age` string type to define years and months)
//   - Example: `26y 1m` is 26 years and 1 month.

const people = [
  {
    name: "Mary",
    age: "26y 1m",
    gender: "female",
  },
  {
    name: "April",
    age: "33y 4m",
    gender: "female",
  },
  {
    name: "Peter",
    age: "18y 4m",
    gender: "male",
  },
  {
    name: "Eve",
    age: "25y 9m",
    gender: "female",
  },
  {
    name: "Andy",
    age: "47y 11m",
    gender: "male",
  },
  {
    name: "Charlotte",
    age: "40y 0m",
    gender: "female",
  },
];

export function getYearAge(age: string): number {
  if (!age) return 0;

  const _splitAge = age.split(" ");
  if (_splitAge.length < 2 || _splitAge.length > 2) return 0;

  const _year = _splitAge[0].toLocaleLowerCase().replace("y", "");
  return parseInt(_year);
}

export function getWomenAverageAge(): number {
  const females = people.filter((person) => person.gender === "female" && person.age);
  const total = females.reduce((previus, current) => {
    return previus + getYearAge(current.age);
  }, 0);

  return total / females.length;
}
