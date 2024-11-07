price-scraper-bot

Este projeto é um bot de scraping de preços desenvolvido em JavaScript usando Puppeteer para automação de navegador e SQLite para armazenamento de dados. Ele visita uma página de produtos na Amazon, extrai os nomes e preços dos itens listados e os armazena em um banco de dados local.

Funcionalidades:
-Acessa a página de bestsellers da Amazon.
-Extrai os nomes e preços dos produtos.
-Armazena os dados extraídos em um banco de dados SQLite local para referência e análise futura.

Tecnologias:
-Node.js: Ambiente de execução.
-Puppeteer: Biblioteca para automação do navegador.
-SQLite3: Banco de dados leve para armazenamento local dos dados.

Estrutura do Banco de Dados:
O banco de dados Produtos.db contém uma tabela chamada Produtos com a seguinte estrutura:

id (INTEGER): Identificador único.
name (TEXT): Nome do produto.
preco (TEXT): Preço do produto.

Possíveis Erros:
-Erro ao salvar no banco de dados: Certifique-se de que o SQLite está instalado corretamente.
-Erro ao inicializar o Puppeteer: Verifique se todas as dependências estão instaladas e se o Chrome é compatível com a versão do Puppeteer usada.

Contribuição:
-Contribuições são bem-vindas! Sinta-se à vontade para enviar PRs ou abrir issues para sugestões e melhorias.
