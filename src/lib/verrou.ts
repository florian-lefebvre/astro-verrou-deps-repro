import { Verrou } from "@verrou/core";
import { memoryStore } from "@verrou/core/drivers/memory";

export const verrou = new Verrou({
  default: "memory",
  stores: {
    memory: { driver: memoryStore() },
  },
});
