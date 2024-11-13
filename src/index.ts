import { app } from "app";
import { DatabaseHandler } from "v1/utils";

const startService = async () => {
  console.log("Starting application...");
  new DatabaseHandler(process.env.DATABASE_URI!).connect();
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
};

startService();
