export default function orderByProps(obj, sortOrder) {
  const sortedProps = [];
  const unsortedProps = [];

  for (const prop in obj) {
    if (sortOrder.includes(prop)) {
      sortedProps.push({ key: prop, value: obj[prop] });
    } else {
      unsortedProps.push({ key: prop, value: obj[prop] });
    }
  }

  sortedProps.sort((a, b) => sortOrder.indexOf(a.key) - sortOrder.indexOf(b.key));
  unsortedProps.sort((a, b) => a.key.localeCompare(b.key));

  return [...sortedProps, ...unsortedProps];
}

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defense: 40,
};
const sortOrder = ['name', 'level'];
const result = orderByProps(obj, sortOrder);
console.log(result);
