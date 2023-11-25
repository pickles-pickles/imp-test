export const sortArray = (
  arr: Array<any>,
  property: any,
  sortOrder: string
) => {
  if (sortOrder === 'asc') {
    return [...arr].sort((a, b) => a[property] - b[property])
  } else if (sortOrder === 'des') {
    return [...arr].sort((a, b) => b[property] - a[property])
  } else {
    return arr
  }
}
