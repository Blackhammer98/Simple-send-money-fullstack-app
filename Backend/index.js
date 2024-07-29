const express  = require("express")
const cors = require("cors")


const app = express();

app.use(cors())
app.use(express.json());
const mainRouter = require("./routes/index")
console.log(typeof mainRouter);


app.use("/api/v1", mainRouter);

app.listen(3000);