import React from "react";
import { RouteComponentProps } from "@reach/router";
import {
  faFolderOpen,
  faPlus,
  faWifi
} from "@fortawesome/free-solid-svg-icons";
import Item from "./item";
import "./style.scss";

const Welcome = (_: RouteComponentProps) => (
  <main className="screen welcome-page">
    <nav>
      <Item description="Abrir Sistema" icon={faFolderOpen} />
      <Item description="Crear Archivo de Sistema" icon={faPlus} />
      <Item description="Conectarse con Servidor de Sistema" icon={faWifi} />
    </nav>
  </main>
);

export default Welcome;
