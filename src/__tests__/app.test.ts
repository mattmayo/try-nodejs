import { writeMessageFromMatt } from "../app";

test("Should return message with from Matt appended", () => {
  const inputMessage = "Hi there!";
  const outputMessage = inputMessage + " from Matt";
  expect(writeMessageFromMatt(inputMessage)).toBe(outputMessage);
});
