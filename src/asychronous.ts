const createPromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "someThing";
    if (data) {
      resolve("data loaded");
    } else {
      reject("failed to load data");
    }
  });
};

const showData = async (): Promise<string> => {
  const data: string = await createPromise();
  return data;
};
showData();
