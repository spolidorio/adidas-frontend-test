import { describe, expect, test } from "@jest/globals";
import { getWomenAverageAge, getYearAge } from "./arrayMethods";

describe("Using functional programming with array methods", () => {
  test("Women Average Age", async () => {
    expect(getWomenAverageAge()).toBe(31);
  });
  test("Get year from age wrong string", async () => {
    const emptyAge = getYearAge("")
    const ageYear = getYearAge("40y")
    const ageDays = getYearAge("40y 0m 3d")

    expect(emptyAge).toBe(0);
    expect(ageYear).toBe(0);
    expect(ageDays).toBe(0);
  });
  test("Get year from age string", async () => {
    const ageOne = getYearAge("26y 1m")
    const ageTwo = getYearAge("18y 4m")

    expect(ageOne).toBe(26);
    expect(ageTwo).toBe(18);
  });
});
