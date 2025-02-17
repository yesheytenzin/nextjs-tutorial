import "client-only";

export const clientFucntion = () => {
  console.log("this is a code meant to run only on client and not on server");
  return "client result";
};
