export function getSizeUnit(size: number) {
  if (size < 1000) {
    return size + 'B'
  } else if (size < 1000000) {
    return (size / 1000).toFixed(0) + 'KB'
  } else {
    return (size / 1000000).toFixed(0) + 'MB'
  }
}
