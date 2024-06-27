import { PrismaClient } from '@prisma/client';
import express from "express";
import cors from "cors";

const prisma = new PrismaClient()


const app = express();
app.use(express.json());
app.use(cors());

const users = []

app.post('/users', async (req, res) => {
  // console.log(req.body);
  // users.push(req.body)
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })
  
  res.status(201).json(req.body);
})


app.put('/users/:id', async (req, res) => {
  // console.log(req);
  await prisma.user.update({
    where: {
      id: req.params.id
    },
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })
  
  res.status(201).json(req.body);
})

app.delete('/users/:id', async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id
    }
  })
  res.status(204).json({message: 'Usuário deletado com sucesso!'});
})

//lista usuarios
// app.get('/users', async(req, res) => {
//   // console.log(req);
//   let user = []

//   if (req.query) {
//     user = await prisma.user.findMany({
//       where: {
//         name: req.query.name,
//         age: req.query.age,
//         email: req.query.email 
//       }
//     })
//   } else {
//     user = await prisma.user.findMany({})
//   }
//   res.status(200).json(user);
// })

app.get('/users', async (req, res) => {
  let users = [];
  const { name, age, email } = req.query;
  
  // Função para normalizar strings, removendo espaços e convertendo para minúsculas
  const normalizeString = (str) => str ? str.replace(/\s+/g, '').toLowerCase() : null;

  // Construir o objeto 'where' dinamicamente
  let whereClause = {};
  if (name) {
    whereClause.name = {
      contains: normalizeString(name),
      mode: 'insensitive'
    };
  }
  if (age) {
    whereClause.age = parseInt(age); // Certifique-se de converter idade para inteiro, se necessário
  }
  if (email) {
    whereClause.email = {
      contains: normalizeString(email),
      mode: 'insensitive'
    };
  }

  // Buscar usuários com base nos filtros fornecidos
  users = await prisma.user.findMany({
    where: whereClause
  });

  // Enviar resposta com status 200 e a lista de usuários em JSON
  res.status(200).json(users);
});


app.listen(3000);

/**
 * Criar nossa API de usuários
 * 
 * Criar um usuário -> POST
 * Listar todos os usuários -> GET
 * Listar um usuário por ID -> GET
 * Atualizar/editar um usuário por ID -> PATCH ou PUT
 * Deletar um usuário por ID -> DELETE
 * 
 * 
 * rodar o projeto API devClub
 * node --watch server.js
 * 
 * banco usado no projeto: MONGO DB Atlas
 * usuario: eurisonfbarbosa
 * senha: R1fsD4Vt404VpPFT
 * 
 * 
 * apos criar a query no mongo rode o comando:
 * npx prisma db push
 * 
 * em seguida rode o comando:
 * npm install @prisma/client
 * 
 * em seguida rode o comando:
 * npx prisma studio
 *
 */