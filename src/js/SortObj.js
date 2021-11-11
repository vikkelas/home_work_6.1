export default function arrProperties(object, sortArr) {
  const arrObj = [];
  const copySortArr = [];
  const notcopySortArr = [];

  for (const prop in object) {
    arrObj.push({ key: prop, value: object[prop] });
  }

  arrObj.forEach((element) => {
    if (sortArr.includes(element.key)) {
      copySortArr.push(element);
    } else notcopySortArr.push(element);
  });

  notcopySortArr.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    } return 1;
  });
  return copySortArr.concat(notcopySortArr);
}
