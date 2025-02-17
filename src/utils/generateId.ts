export const generateId = () => {
  const timestamp = Date.now().toString();
  const random = Math.floor(Math.random() * 1000000).toString();
  return `${timestamp}-${random}`;
};
