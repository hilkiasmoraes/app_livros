let servicos = ""
const detalhes = [
    {
        titulo: 'serviço 1',
        descricao: 'xxxxxxxx xxxxxxxx xxxxx',
        imagem: 'src/img/jogador_1.webp'
    },
    {
        titulo: 'serviço 2',
        descricao: 'xxxxxxxx xxxxxxxx xxxxx',
        imagem: 'src/img/jogador_2.webp'
    },
    {
        titulo: 'serviço 3',
        descricao: 'xxxxxxxx xxxxxxxx xxxxx',
        imagem: 'src/img/jogador_3.avif'
    },
    {
        titulo: 'serviço 4',
        descricao: 'xxxxxxxx xxxxxxxx xxxxx',
        imagem: 'src/img/jogador_4.jpg'
    },
    {
        titulo: 'serviço 5',
        descricao: 'xxxxxxxx xxxxxxxx xxxxx',
        imagem: 'src/img/jogador_5.jpg'
    }
]


servicos += `<div class="bem-grid-auto">`
for(let i=0; i < detalhes.length; i++){
servicos += `
            <div class="bem-card">
                <img class="bem-card__image" src="${detalhes[i].imagem}" alt="Image description">
                <div class="bem-card__body">
                    <h3 class="bem-card__title">${detalhes[i].titulo}</h3>
                    <p>${detalhes[i].descricao}</p>
                </div>
            </div>

    `
}
servicos += `</div>`

export default servicos;