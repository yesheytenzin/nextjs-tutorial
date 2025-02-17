import "server-only";
export const serverfunction = () => {
  console.log(
    `this is a code mean to be run only on server and not on client side`
  );
  return "server result";
};
