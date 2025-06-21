import "dotenv/config"; // Load environment variables from .env file
import app from "./app";
import connectDB from "./app/config/db"; // must come *after* dotenv.config()

const port = process.env.PORT || 5000;

(async () => {

  await connectDB();
  
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
})();
