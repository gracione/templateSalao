import React from 'react';
import styled from 'styled-components';
import { Content } from './componentes/content';
import { Footer } from './componentes/footer';
import { Header } from './componentes/header';
import { Menu } from './componentes/menu';
import { Global } from './style/Global';
import { createContext, useContext, } from "react";
import { TransactionsContext } from './componentes/transactions';
import { useState } from "react";
import { Cabelos } from './componentes/cabelos';

function App() {
  const [exibircabelo, exibirCabelo] = useState(false);
  const [numeroFoto, mudarNumero] = useState('');
  function abrirExibirCabelo(valor: string) {
    mudarNumero('img/foto'+valor+'.jpg');
    exibirCabelo(true);
  }
  function fecharExibirCabelo() {
    exibirCabelo(false);
  }
  return (
    <TransactionsContext.Provider value={[]} >
      <Content></Content>
      <Menu
        abrirNovaTela={abrirExibirCabelo}
      ></Menu>
      <Header
        eAbrir={exibircabelo}
        fechar={fecharExibirCabelo}
        valor={numeroFoto}
      ></Header>
      <Footer></Footer>
      <Global />

    </TransactionsContext.Provider>
  );
}

export default App;
