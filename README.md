# CRL Gestão e Consultoria — GitHub Pages

Site multipágina estático, preparado para publicação no **GitHub Pages**, com microinterações, accordions nas frentes de atuação e formulário de contato via Formspree.

## Páginas
- `index.html` — Home
- `quem-somos.html`
- `desenvolvimento-e-viabilizacao.html`
- `gestao-e-estrategia.html`
- `relacoes-institucionais-e-articulacao.html`
- `inteligencia-e-diagnostico.html`
- `como-atuamos.html`
- `contato.html`

## Publicar no GitHub Pages
1. Crie um repositório no GitHub (por exemplo, `crl-site`).
2. Envie **o conteúdo desta pasta para a raiz do repositório**. O `index.html` deve ficar na raiz.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Salve. O GitHub exibirá a URL publicada após o deploy.

Todos os links e assets usam caminhos relativos, então funcionam tanto em `usuario.github.io/crl-site/` quanto em um domínio personalizado. O arquivo `.nojekyll` foi incluído para servir o conteúdo exatamente como está.

## Ativar o formulário de contato
O GitHub Pages não executa backend. Por isso, o formulário usa **Formspree**. O destinatário deve ser:

`agencia@comc.online`

### Configuração
1. Crie uma conta/projeto no Formspree.
2. Crie um formulário e configure/verifique `agencia@comc.online` como e-mail de destino.
3. O Formspree fornecerá um endpoint parecido com:
   `https://formspree.io/f/abcdwxyz`
4. Abra `contato.html` e localize:
   `https://formspree.io/f/SEU_FORM_ID`
5. Substitua `SEU_FORM_ID` pelo ID fornecido pelo Formspree.
6. Faça commit e push da alteração.

O JavaScript envia o formulário sem sair da página e mostra uma confirmação de sucesso. Se o Formspree ainda não estiver configurado ou houver falha, o site orienta a pessoa a escrever diretamente para `agencia@comc.online`.

## Interações implementadas
- fade/reveal sutil no scroll
- parallax leve nas imagens de topo
- micro movimento do círculo azul
- hover discreto nos cards da Home
- setas com deslocamento curto
- accordion com apenas um item aberto por vez
- respeito a `prefers-reduced-motion`

## Assets
As imagens e o logo estão em `assets/images/`. CSS e JavaScript ficam em `assets/css/` e `assets/js/`.

## Teste local
Para visualizar localmente, você pode abrir `index.html` no navegador. Para testar o formulário real, publique no GitHub Pages após configurar o endpoint do Formspree.
