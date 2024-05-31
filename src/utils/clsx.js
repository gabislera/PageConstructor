export function clsx(...args) {
  return args
    .flat(Infinity) // Flatten nested arrays
    .filter(Boolean) // Remove falsy values
    .join(' '); // Join the array into a string separated by spaces
}