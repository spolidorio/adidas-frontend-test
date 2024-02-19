import { describe, expect, test } from "@jest/globals";
import { wait } from "./promises";

describe("Asynchronous code with promises", () => {
  test("hello + world!", () => {
    expect(wait(2)).toBe("hello world!");
  });
});
