import { createServer } from "./server";
import { log } from "@repo/logger";

const port = process.env.PORT || 4000;
const server = createServer();

server.listen(port, () => {
  log("hello");
  log(`api running on ${port}`);
});
