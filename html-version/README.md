# CCN — Versão HTML/CSS/JS/PHP

Versão estática/PHP do site da Comunidade Cristo para as Nações, pronta para publicar em qualquer hospedagem compartilhada com suporte a PHP 7.4+.

## Estrutura

```
html-version/
├── index.php          Home
├── sobre.php          Quem Somos
├── ministerios.php    Ministérios
├── cultos.php         Cultos & Ao Vivo
├── agenda.php         Agenda
├── conteudo.php       Mensagens e devocionais
├── biblia.php         Bíblia Online
├── contato.php        Formulário de contato (envia via mail())
├── includes/
│   ├── config.php     Dados do site (nome, e-mail, telefone, redes)
│   ├── header.php     Cabeçalho + menu
│   ├── footer.php     Rodapé + botão flutuante WhatsApp
│   └── fish-svg.php   Ícone peixe cristão
└── assets/
    ├── styles.css     CSS único (design tokens da CCN)
    ├── script.js      Menu mobile + ano no rodapé
    └── img/           Imagens do site
```

## Deploy

1. Faça upload da pasta `html-version/` (renomeie se quiser) para a raiz do domínio via FTP / painel de hospedagem.
2. Garanta que a hospedagem tenha **PHP 7.4 ou superior**.
3. Para o formulário de contato funcionar, a hospedagem precisa ter `mail()` habilitado (padrão em Hostinger, HostGator, LocaWeb etc.). Ajuste o e-mail em `includes/config.php` se necessário.
4. Personalize telefones, endereço e Instagram em `includes/config.php`.

## Rodando localmente

```bash
cd html-version
php -S localhost:8000
```

Depois abra `http://localhost:8000`.

## Versão React

A versão React/TanStack Start continua ativa na raiz do projeto (`src/`) e é a exibida no preview do Lovable. Esta pasta HTML/PHP é uma versão independente para hospedagem tradicional.
