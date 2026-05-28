# Baunilha Solar

Aplicação front-end multipágina que simula um e-commerce de confeitaria artesanal, desenvolvida com foco em experiência do usuário, organização de código e escalabilidade futura.

## Objetivo

O projeto foi desenvolvido para praticar conceitos comuns em aplicações reais de front-end, incluindo:

* gerenciamento de estado no cliente
* persistência de dados
* autenticação simulada
* organização modular
* responsividade
* separação de responsabilidades

---

## Funcionalidades

### Catálogo e navegação

* Listagem dinâmica de produtos
* Filtro por categorias
* Navegação multipágina
* Layout responsivo

### Carrinho

* Adição e remoção de produtos
* Atualização automática de totais
* Persistência via localStorage

### Autenticação simulada

* Cadastro de usuário
* Login com validação
* Persistência de sessão no navegador

### Contato e experiência

* Feedback visual de ações
* Interface consistente entre páginas
* Microinterações e refinamento visual

---

## Stack utilizada

| Tecnologia        | Responsabilidade                   |
| ----------------- | ---------------------------------- |
| HTML5             | Estrutura da aplicação             |
| CSS3              | Estilização e responsividade       |
| JavaScript (ES6+) | Regras de negócio e interatividade |
| localStorage      | Persistência de dados no cliente   |

---

## Estrutura do projeto

```bash
baunilha-solar/
│
├── index.html
├── cardapio.html
├── carrinho.html
├── login.html
├── cadastro.html
├── sobre.html
├── contato.html
│
└── assets/
    ├── css/
    ├── js/
    └── img/
```

---

## Decisões técnicas

* Estrutura multipágina para simplificar navegação e separação de contexto
* CSS organizado por páginas e componentes
* JavaScript modularizado por responsabilidade
* Persistência de dados utilizando localStorage
* Estrutura preparada para futura integração com backend

---

## Possíveis evoluções

* Integração com API REST
* Backend em Node.js
* Banco de dados relacional
* Autenticação JWT
* Painel administrativo
* Sistema de pedidos

---

## Demonstração

[Ver projeto](#)

[Assistir demonstração](#)

---

## Autor

**Luiz Felipe**

Projeto desenvolvido como parte da construção do meu portfólio front-end, com foco em aplicações que simulam cenários reais de produto.
