import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Triagem from "./pages/Triagem";
import Inicio from "./pages/Pagina-principal";
import QuemSomos from "./pages/Quem-somos";
import Consultorias from "./pages/Consultorias";
import Mentorias from "./pages/Mentorias";
import Investimento from "./pages/Investimento";
import Forum from "./pages/Fórum";
import NossosParceiros from "./pages/Nossos-parceiros";
import Comunidades from "./pages/Comunidade";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/triagem" component={Triagem} />
        <Route path="/inicio" component={Inicio} />
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/consultorias" component={Consultorias} />
        <Route path="/mentorias" component={Mentorias} />
        <Route path="/investimento" component={Investimento} />
        <Route path="/comunidade" component={Comunidades} />
        <Route path="/forum" component={Forum} />
        <Route path="/nossos-parceiros" component={NossosParceiros} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
