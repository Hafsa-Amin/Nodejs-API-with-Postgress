const express = require ('express')
const app = express();
const movieRouter = require("./routes/movies");

const port = 8080;
app.use(express.json())

app.use("/api/movies", movieRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
