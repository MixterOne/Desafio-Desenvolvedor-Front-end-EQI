function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText
}

function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText
}

function CriaBloco(simulacoes) {
    blocos = document.querySelector('.blocos')
    blocos.innerHTML = `
        <div class= 'bloco'>
            <h4>Valor final Bruto<h4>
            <p>R$ ${simulacoes.valorFinalBruto}</p>
        </div>

        <div class= 'bloco'>
            <h4>Aliquota do IR<h4>
            <p>${simulacoes.aliquotaIR}%</p>
        </div>

        <div class= 'bloco'>
            <h4>Valor Pago em IR<h4>
            <p>R$ ${simulacoes.valorPagoIR}</p>
        </div>

        <div class = 'bloco'>
            <h4>Valor final Líquido<h4>
            <p style = 'color: green'>R$ ${simulacoes.valorFinalLiquido}</p>
        </div>

        <div class = 'bloco'>
            <h4>Valor Total Investido<h4>
            <p>R$ ${simulacoes.valorTotalInvestido}</p>
        </div>

        <div class = 'bloco'>
            <h4>Ganho Líquido<h4>
            <p style = 'color: green'>R$ ${simulacoes.ganhoLiquido}</p>
        </div>
    
    `

    return blocos
}

function main() {
    let data = fazGet('http://localhost:3000/simulacoes')
    let simulacoes = JSON.parse(data);
    let blocosDiv = document.getElementById('blocosContainer')
    let blocos = document.createElement('div')
    blocos.classList.add('blocos')

    blocosDiv.appendChild(blocos)
    simulacoes.forEach(element => {
        let blocoSimu = CriaBloco(element);
        blocosDiv.appendChild(blocoSimu)
    });

}

