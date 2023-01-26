export const getRandomArray= <T>(arr: T[], numberOfItems: number) =>
  [...arr]
    .sort(() => 0.5 - Math.random())
    .slice(0, numberOfItems);