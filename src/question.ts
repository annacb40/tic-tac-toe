import { createInterface } from "readline";

export const readLine = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

export const askQuestion = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    readLine.question(question, (answer) => {
      resolve(answer);
    });
  });
};
