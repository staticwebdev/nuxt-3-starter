let count = 0;

export default defineEventHandler((event) => {
  count += 1
  return {
    count
  }
})