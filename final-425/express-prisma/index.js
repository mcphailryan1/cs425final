const { PrismaClient } = require("@prisma/client");
const express = require("express");


const app = express();


app.use(function (req, res, next) {
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

app.get('/user/:email', async (req, res) => {
  const prisma = new PrismaClient()

  const agents = await prisma.login.findFirst(
    {
      where: {
        loginUsername: req.params.email,
      },
      select: {
        loginPassword: true
      },
    }
  )
  res.json(agents)
})

app.post('/updateUser', async (req, res) => {
  console.log(req.body);
  const prisma = new PrismaClient()
console.log(req.body)
  await prisma.login.update({
    where: {
      loginUsername: req.body.loginUsername,
    },
    data: {
      loginUsername: req.body.newLoginUsername,
      password: req.body.newPassword
    },
  })

  res.status(201).json({
    message: 'User Update Was Sucessful'
  });
});

const port = process.env.PORT || "3000";

app.listen(port, () => {
  console.log(`Server Running at ${port} 🚀`);
});