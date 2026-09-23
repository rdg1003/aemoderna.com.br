# Guia Completo de Publicação na Internet — AE Moderna

Este manual descreve detalhadamente como colocar o site da **AE Moderna** no ar, seja utilizando a infraestrutura rápida do Manus WebDev, seja hospedando em serviços globais como Vercel, Netlify ou servidor próprio com domínio personalizado (`aemoderna.com.br`).

---

## 1. Publicação Direta via Manus WebDev (Recomendada e Instantânea)

O projeto já está estruturado, compilado e com checkpoint salvo no ambiente integrado.

1. **Abrir o Painel WebDev:**  
   Clique no botão ou link de gerenciamento do projeto **AE Moderna** na interface do Manus.
2. **Revisar o Checkpoint:**  
   Localize o checkpoint mais recente: `Site institucional completo da AE Moderna com tema roxo elegante`.
3. **Publicar (Publish):**  
   Clique no botão **Publish** (Publicar). O sistema gerará automaticamente uma URL pública segura com HTTPS.
4. **Configuração de Domínio Próprio:**  
   Na seção *Custom Domain* do painel, você pode apontar o seu domínio oficial `aemoderna.com.br` seguindo as instruções de DNS exibidas na tela.

---

## 2. Publicação na Vercel (Gratuito e de Alta Performance)

A Vercel é ideal para sites React/Vite com certificado SSL gratuito e CDN global.

### Passo a Passo:
1. **Criar ou acessar conta na [Vercel](https://vercel.com):**
   - Faça login com sua conta do GitHub ou e-mail.
2. **Subir os arquivos para o GitHub:**
   - Crie um repositório privado ou público no GitHub chamado `ae-moderna-site`.
   - No terminal do projeto, execute:
     ```bash
     git init
     git add .
     git commit -m "Site institucional AE Moderna"
     git branch -M main
     git remote add origin https://github.com/SEU_USUARIO/ae-moderna-site.git
     git push -u origin main
     ```
3. **Importar na Vercel:**
   - Clique em **Add New... > Project** e selecione o repositório `ae-moderna-site`.
   - Em **Framework Preset**, a Vercel detectará automaticamente **Vite**.
   - No campo **Root Directory**, certifique-se de apontar para a raiz do projeto (onde está o `package.json`).
   - Clique em **Deploy**. Em menos de 1 minuto o site estará publicado online.

---

## 3. Publicação no Netlify (Arrastar e Soltar a Pasta `dist`)

Se você preferir não usar o Git imediatamente, pode publicar arrastando a pasta de produção compilada:

1. **Gerar a pasta de produção:**
   - No diretório do projeto, o comando de build gera a pasta `dist/public`:
     ```bash
     pnpm run build
     ```
2. **Acessar o [Netlify Drop](https://app.netlify.com/drop):**
   - Acesse a plataforma e arraste a pasta gerada (`dist/public`) diretamente na tela.
3. O site é publicado na hora com link `.netlify.app` e SSL automático.

---

## 4. Como Conectar o Domínio Oficial (`aemoderna.com.br`)

Se você já possui o domínio registrado no **Registro.br** ou provedor similar:

1. Acesse o painel do seu registrador de domínio (ex: [Registro.br](https://registro.br)).
2. Vá em **Gerenciar DNS** ou **Configurar Zona DNS**.
3. Adicione os seguintes apontamentos (conforme a plataforma escolhida):

| Tipo | Nome (Host) | Valor / Destino | Finalidade |
| :--- | :--- | :--- | :--- |
| **A** | `@` (ou vazio) | `76.76.21.21` *(exemplo Vercel)* | Direciona o domínio raiz (`aemoderna.com.br`) |
| **CNAME** | `www` | `cname.vercel-dns.com` *(ou alias fornecido)* | Direciona o subdomínio `www.aemoderna.com.br` |

4. Aguarde a propagação do DNS (geralmente entre 15 minutos e 2 horas). O certificado SSL HTTPS é gerado automaticamente.

---

## 5. Estrutura do Site Entregue

- **Identidade Visual:** Paleta em tons de roxo institucional com gradientes sutis e modo escuro sofisticado.
- **Logotipo Oficial:** Integrado no cabeçalho e rodapé em alta resolução com efeito de iluminação suave.
- **Conteúdo dos Documentos:**
  - 10 anos de atuação e mais de 200 acordos homologados.
  - Defesa contra execuções bancárias (Banco do Brasil, Bradesco, Santander).
  - Tabela com processos reais do TJSP e link de consulta pública.
  - Expurgo de juros abusivos e proteção patrimonial (SISBAJUD e garantias reais).
  - **Simulador Interativo:** Cálculo dinâmico da estimativa de redução com base no credor e valor da dívida.
  - **Canal de Contato Direto:** Botão integrado com WhatsApp comercial e formulário de diagnóstico.
