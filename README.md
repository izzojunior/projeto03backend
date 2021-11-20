# Express-MongDB-NodeJS

Um simples NodeJS + Express.js + Mongoose RESTful API servindo dados sobre os subgênero do rock

API Versão: 1.0

## Sobre

Dentro da pasta Projeto Final você pode experimentar as coleções e ambientes do thunder para todos os endpoints em localhost e heroku

### Endpoints para Heavy Metal

`GET /HeavyMetal/listall` (ALL)

 - Retorna tudo que está dentro do banco de dados

   ```
   - nome: é um campo String que armazena o nome da banda
   - vocalista: é um campo String que armazena o nome do vocalista da banda 
   - ano: é um campo numérico que armazena o ano de atuação da banda 
   - musica: é um campo String que armazena uma musíca da banda
   ```

 - Status Code: 200

`GET HeavyMetal/listid/:name` 

 - Retorna uma banda pelo seu nome
 - Status Code: 200
 - Status Code: 404

`POST / HeavyMetal/add`

- Criar uma nova banda.

- Status Code: 201

- Status Code: 400

- Status Code: 403

  ```
  {
      "nome" : "Iron Maiden",
      "vocalista" : "Bruce Dickinson",
      "ano" : 1975-,
      "musica" : "The Number Of The Beast"
  }
  ```

  

`PUT /HeavyMetal/update/:id`

- Alterar as informações do país por ID

- Status Code: 201
- Status Code: 400
- Status Code: 403

`DELETE /Heavymetal/delete/:id`

 - Alterar banda do banco de dados 
- Status Code: 201
- Status Code: 400
- Status Code: 403

### Pontos finais para Heavy Metal

`GET /heavymetal/listall` (tudo)

`GET /heavymetal/:name` (por nome)

`POST /heavymetal/add`

`PUT /heavymetal/update/:id`

`DELETE /heavymetal/delete/:id`

 - DB Model

   ```
   const RockAndRollModel = new mongoose.Schema({ 
       nome: { type: String, required: true }, 
       vocalista: { type: String, required: true },
       ano: { type: Number },
       musica: { type: Date, default: Date.now } 
   });
   ```

 - JSON Body

   ```
   {
       "nome" : "Iron Maiden",
       "vocalista" : "Bruce Dickinson",
       "ano" : 1975-,
       "musica" : "The Number Of The Beast"
   }
