import orderByProps from "../..";

test('orderByProps', () => {
  const obj = { name: 'маг', health: 10, level: 2, attack: 80, defense: 40 };
  const sortOrder = ['name', 'level'];
  const result = orderByProps(obj, sortOrder);
  
  const expectedResult = [
    { key: 'name', value: 'маг' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defense', value: 40 },
    { key: 'health', value: 10 }
  ];

  expect(result).toEqual(expectedResult);
});
