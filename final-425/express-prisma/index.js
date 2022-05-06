const { PrismaClient } = require("@prisma/client");
const express = require("express");


const app = express();


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());

app.get('/properties', async (req, res) => {
  const prisma = new PrismaClient()
  const properties = await prisma.property.findMany()
  console.log(properties)
  res.json(properties)
})

app.get('/agents', async (req, res) => {
  const prisma = new PrismaClient()
  const agents = await prisma.agent.findMany()
  console.log(agents)
  res.json(agents)
})

const port = process.env.PORT || "3000";

app.listen(port, () => {
  console.log(`Server Running at ${port} 🚀`);
});