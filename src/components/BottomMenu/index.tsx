import React from "react";
// imgs
import userImg from "../../assets/user.svg";
import homeImg from "../../assets/home.svg";
import comunidadesImg from "../../assets/comunidade.svg";
import bellImg from "../../assets/bell.svg";
// styles
import { BottomMenuContainer, BottomMenuItem } from "./styles";

interface BottomMenuItemProps {
  img: string;
  label: string;
  path: string;
}

const BottomMenu = () => {
  const perfil = localStorage.getItem("Perfil");

  const BottomMenuItems: BottomMenuItemProps[] = [
    { img: homeImg, label: "Inicio", path: "/inicio" },
    {
      img: bellImg,
      label: "Notificações",
      path:
        perfil === "Mentor"
          ? "/mentores/notificacoes/0"
          : "/startups/notificacoes/0",
    },
    { img: comunidadesImg, label: "Comunidades", path: "/startups/comunidade" },
    {
      img: userImg,
      label: "Conta",
      path: perfil === "Mentor" ? "/mentores/perfil" : "/startups/perfil",
    },
  ];

  return (
    <BottomMenuContainer>
      {BottomMenuItems.map((item) => (
        <BottomMenuItem key={item.label} to={item.path}>
          <img src={item.img} alt={item.label} />
          <p>{item.label}</p>
        </BottomMenuItem>
      ))}
    </BottomMenuContainer>
  );
};

export default BottomMenu;
