# 📱 Estudo de Automação Mobile com Appium

## 📌 Descrição do Projeto

Este projeto tem como objetivo realizar estudos e testes automatizados em aplicações Android utilizando **Appium**. A aplicação utilizada para os testes é o APK de demonstração `Android-MyDemoAppRN.1.3.0.build-244.apk`, que simula funcionalidades comuns em apps mobile e serve como ambiente seguro para práticas de automação.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

- **Appium** — Framework de automação open-source para aplicações mobile nativas, híbridas e web.
- **Node.js** — Necessário para instalação e execução do Appium Server.
- **Appium Inspector** — Ferramenta para inspecionar elementos e gerar localizadores.
- **Android Studio** — Utilizado para configurar e executar emuladores Android e gerenciar o SDK.
- **JavaScript (WebdriverIO)** — Framework de testes utilizado para escrever e executar os scripts.
- **Emulador Android** ou **Dispositivo Físico**
- **APK de Teste:** `Android-MyDemoAppRN.1.3.0.build-244.apk`

---

## 📱 Aplicação de Teste

- **Nome:** Android My Demo App  
- **Versão:** 1.3.0 (build 244)  
- **Descrição:** Aplicativo mobile de demonstração utilizado para fins de automação, contendo telas de login, catálogo de produtos, carrinho de compras e checkout.

---

## 📥 Instalação e Configuração

### 1️⃣ Instalar Node.js  
[Download Node.js](https://nodejs.org/)

### 2️⃣ Instalar Appium Server

```bash
npm install -g appium
```
### 3️⃣ Iniciar o Appium

```bash
appium
```
Assim vai acessar a porta padrão 4723


### 4️⃣ Rodar os testes
```bash
npm run wdio
```
---

# 📑 Casos de Teste — Login Appium

| **ID**   | **Título**                      | **Pré-condições**            | **Dados de Entrada**                                                 | **Passos**                                                                          | **Resultado Esperado**                                                           |
| :------- | :------------------------------ | :--------------------------- | :------------------------------------------------------------------- | :---------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| TC-001   | Login com credenciais inválidas | App aberto e em tela inicial | `username`: userFail.username<br>`password`: userFail.password       | 1. Acessar a tela de login.<br>2. Preencher dados inválidos.<br>3. Confirmar login. | Exibir mensagem: *"Provided credentials do not match any user in this service."* |
| TC-002   | Login com credenciais válidas   | App aberto e em tela inicial | `username`: userSuccess.username<br>`password`: userSuccess.password | 1. Acessar a tela de login.<br>2. Preencher dados válidos.<br>3. Confirmar login.   | Exibir mensagem ou elemento de sucesso (ajustar verificação no teste)            |
