import { verrou } from "./verrou";

const lock = verrou.createLock("test-lock", "1s");

const data = {
  foo: "bar",
};

export const accessData = async () => {
  try {
    await lock.acquire();

    // Do your critical code here
    return data;
  } catch (error) {
    // Handle the error
  } finally {
    // Release the lock
    await lock.release();
  }
};
