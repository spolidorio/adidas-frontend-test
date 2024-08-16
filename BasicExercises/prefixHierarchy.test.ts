import { describe, expect, test } from "@jest/globals";
import { findCompletePrefixes } from "./prefixHierarchy";

describe("Prefix Hierarchy", () => {
  test("Given a list of names, determine the number of names in that list", async () => {
    findCompletePrefixes([""], [""]);
  });
});
