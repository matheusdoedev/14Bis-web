interface User {
  name: string;
  telefone: string;
  email: string;
  senha: string;
  perfil: string;
}

const users: User[] = [
  {
    name: "Matheus do É Santos",
    email: "matheusdoe@gmail.com",
    senha: "123456",
    telefone: "999249599",
    perfil: "Mentor",
  },
  {
    name: "João Apolinário",
    email: "joao@gmail.com",
    senha: "123456",
    telefone: "999249599",
    perfil: "Empreendedor",
  },
];

export default users;
