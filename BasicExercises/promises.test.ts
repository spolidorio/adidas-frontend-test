import { describe, expect, test } from "@jest/globals";
import { wait } from "./promises";

describe("Asynchronous code with promises", () => {
  test("hello + world!", async () => {
    const logSpy = jest.spyOn(global.console, "log");

    await wait(1000);

    expect(logSpy).toHaveBeenCalledWith("hello");
    expect(logSpy).toHaveBeenCalledWith("world!");
  });
  
  test("goodbye + world!", async () => {
    const logSpy = jest.spyOn(global.console, "log");

    await wait("1000");

    expect(logSpy).toHaveBeenCalledWith("goodbye");
    expect(logSpy).toHaveBeenCalledWith("world!");
  });
});
