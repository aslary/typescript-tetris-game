import { describe, expect, it } from "vitest";

describe("Arithmetic tests", () => {
  it("passes: 2 + 2 equals 4", () => {
    expect(2 + 2).toBe(4);
  });

  it("fails: 2 + 2 equals 5", () => {
    expect(2 + 2).toBe(5);
  });
});
