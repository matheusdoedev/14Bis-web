import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// pages
import Home from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Triagem from "./pages/Triagem";
import CadastroEmpreendedor from "./pages/Cadastro-Empreendedor";
import Inicio from "./pages/Pagina-principal";
import QuemSomos from "./pages/Quem-somos";
import Consultorias from "./pages/Consultorias";
import Mentorias from "./pages/Mentorias";
import Investimento from "./pages/Investimento";
import NossosParceiros from "./pages/Nossos-parceiros";
import Comunidades from "./pages/Comunidade";
import Perfil from "./pages/Startup-perfil";
import StartupEditarDados from "./pages/Startup-editar-dados";
import MentorPerfil from "./pages/Mentor-perfil";
import Notificacoes from "./pages/Notificacoes";
import Notificacao from "./pages/Notificacao";
import TermosDeUso from "./pages/Termos-de-uso";
import Estatistica from "./pages/Estatistica";
import MentoresConsultorias from "./pages/Mentores-Consultorias";
import MentoresMentorias from "./pages/Mentores-Mentorias";
import CadastroMentor from "./pages/Cadastro-Mentor";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* cadastro e login */}
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/triagem" component={Triagem} />
        {/* cadastros */}
        <Route path="/cadastro-empreendedor" component={CadastroEmpreendedor} />
        <Route path="/cadastro-mentor" component={CadastroMentor} />
        {/* 14Bis */}
        <Route path="/inicio" component={Inicio} />
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/nossos-parceiros" component={NossosParceiros} />
        {/* startups routes */}
        <Route path="/startups/consultorias" component={Consultorias} />
        <Route path="/startups/mentorias" component={Mentorias} />
        <Route path="/startups/investimento" component={Investimento} />
        <Route path="/startups/comunidade" component={Comunidades} />
        <Route path="/startups/termos-de-uso" component={TermosDeUso} />
        <Route path="/startups/perfil" component={Perfil} />
        <Route path="/startups/editar-dados" component={StartupEditarDados} />
        <Route path="/startups/notificacoes/:id" component={Notificacao} />
        <Route path="/startups/notificacoes" component={Notificacoes} />
        <Route path="/startups/estatisticas" component={Estatistica} />
        {/* mentores routes */}
        <Route path="/mentores/perfil" component={MentorPerfil} />
        <Route path="/mentores/consultorias" component={MentoresConsultorias} />
        <Route path="/mentores/mentorias" component={MentoresMentorias} />
        <Route path="/mentores/editar-dados" component={Perfil} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
