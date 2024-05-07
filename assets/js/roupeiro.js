function cortarRoupeiro(){
   
    // recebe os elementos HTML
    const parede = parseInt(document.getElementById('parede').value);
    const ateOTeto = document.getElementById('ateOTeto').value;
    const altura = parseInt(document.getElementById('altura').value);
    const largura = parseInt(document.getElementById('largura').value);
    const vao = parseInt(document.getElementById('vao').value);
    const porta = parseInt(document.getElementById('portas').value);
    var div = (vao - 1) * 1.5;
    var res = document.getElementById('res');
    const profundidade = document.getElementById('profundidade').value;
    const nPrateleira = parseInt(document.getElementById('nPrateleira').value);
    const gaveta = parseInt(document.getElementById('nGaveta').value);
   
    corpo(altura, largura, vao, ateOTeto);
    tamponamento(parede);
    portas(porta);
    fundo(vao);
    acessorios(ateOTeto);
    
    
    function corpo(altura, largura, vao, ateOTeto) {
        let lateral, base, prat, travessaGaveta;
        // faz verificação para ver se os elementos são válidos
        if (largura <= 0 || altura <= 0 || profundidade <= 0) {
            alert('Altura, largura ou profundidade inválida');
        } else {
            // calculando o corpo de acordo com o vao;
            let divisoria = vao - 1;
            let nGaveta = gaveta * 2;
            let rodape = largura - 100;
            let trvRodape = profundidade - 100;
            let tamanhoCalcoGaveta = gaveta * 200
            let quantiCalcoGaveta = Math.ceil(gaveta / 2)
            
            res.innerText += `
                ${rodape} rodapé do corpo
                ${trvRodape} travessa rodapé
                ${tamanhoCalcoGaveta} X 100 X ${quantiCalcoGaveta} Claço das gavetas
            `

           if(vao === 1){
                if (ateOTeto) {
                    // calcula o corpo ate o teto com 1 vao
                    let prof = profundidade - 80
                    let profPrat = profundidade - 90
                    lateral = altura - 210;
                    base = largura - 60;
                    prat = ((base - div) / vao).toFixed(1);
                    travessaGaveta = (prat - 88);

                    res.innerText += `
                        Corpo    
                        ${lateral} X ${prof} X 2 laterais
                        ${base} X ${prof} X 2 base/teto
                        ${prat} X ${profPrat} X ${nPrateleira} prateleiras
                        ${travessaGaveta} X 135 X ${gaveta} travessa de gaveta
                    `;
                
                } else {
                    // calcula o corpo não sendo ate o teto com 1 vao
                    let prof = profundidade - 80
                    let profPrat = profundidade - 90
                    lateral = altura - 140;
                    base = largura - 60;
                    prat = ((base - div) / vao).toFixed(1);
                    travessaGaveta = (prat - 88);


                    res.innerText += `
                        Corpo    
                        ${lateral} X ${prof} X 2 laterais
                        ${lateral} X ${prof} X ${divisoria} divisoria
                        ${base} X ${prof} X 2 base/teto
                        ${prat} X ${profPrat} X ${nPrateleira} prateleiras
                        ${travessaGaveta} X 135 X ${gaveta} travessa de gaveta
                    `;
                }
            }else if(vao === 2){
                // calcula o corpo com dois vãos e ate o teto
                if (ateOTeto) {
                    
                    let prof = profundidade - 80
                    let profPrat = profundidade - 90
                    lateral = altura - 210;
                    base = largura - 60;
                    prat = ((base - div) / vao).toFixed(1);
                    travessaGaveta = (prat - 88);

                    res.innerText += `
                    Corpo    
                    ${lateral} X ${prof} X 2 laterais
                    ${lateral} X ${prof} X ${divisoria} divisoria
                    ${base} X ${prof} X 2 base/teto
                    ${prat} X ${profPrat} X ${nPrateleira} prateleiras
                    ${travessaGaveta} travessa de gaveta
                    `;

                } else {
                    // dois vaos nao sendo ate o teto
                    let prof = profundidade - 80
                    let profPrat = profundidade - 90
                    lateral = altura - 140;
                    base = largura - 60;
                    prat = ((base - div) / vao).toFixed(1);
                    travessaGaveta = (prat - 88);


                    res.innerText += `
                    Corpo    
                    ${lateral} X ${prof} X 2 laterais
                    ${lateral} X ${prof} X ${divisoria} divisoria
                    ${base} X ${prof} X 2 base/teto
                    ${prat} X ${profPrat} X ${nPrateleira} prateleiras
                   ${travessaGaveta} travessa de gaveta
                    `;
                }
            }else{
                // corpo com 3 vaos ate o teto
                if (ateOTeto) {
                    let prof = profundidade - 80
                    let profPrat = profundidade - 90
                    lateral = altura - 210;
                    base = largura - 60;
                    prat = ((base - div) / vao).toFixed(1);
                    travessaGaveta = (prat - 88);

                    res.innerText += `
                    Corpo    
                    ${lateral} X ${prof} X 2 laterais
                    ${lateral} X ${prof} X ${divisoria} divisoria
                    ${base} X ${prof} X 2 base/teto
                    ${prat} X ${profPrat} X ${nPrateleira} prateleiras
                    ${travessaGaveta} travessa de gaveta
                    `;

                } else {
                    // 3 vaos nao sendo ate o teto
                    let prof = profundidade - 80
                    let profPrat = profundidade - 90
                    lateral = altura - 140;
                    base = largura - 60;
                    prat = ((base - div) / vao).toFixed(1);
                    travessaGaveta = (prat - 88);


                    res.innerText += `
                    Corpo    
                    ${lateral} X ${prof} X 2 laterais
                    ${lateral} X ${prof} X ${divisoria} divisoria
                    ${base} X ${prof} X 2 base/teto
                    ${prat} X ${profPrat} X ${nPrateleira} prateleiras
                    ${travessaGaveta} travessa de gaveta
                    `;
                }
            }
        }

    }
    
    
    function acessorios(ateOTeto){
        let puxador;
        let trilho;

        // calcula acessorios se o roupeiro vai ate o teto
        if(ateOTeto){
            puxador = altura - 175;
            trilho = largura - 62;

            res.innerText += `${puxador} ${trilho}`
        }
    }

    function tamponamento(valor){
        //    faz a verificação de quantas laterais inteiras tem
        let sicha
        sicha = largura - 60;

        if(valor === 0){
            res.innerText += `
                Tamponamento 
                ${altura} X ${profundidade} X 2 Lateral Tamponada
                ${sicha} X 150 X 2 Engrosso Teto/base
                ${sicha} X 80 X 1 Frente Rodapé
                ${sicha} X 60 X 1 Acabamento
                ${sicha} X 3 X 6mm X 1 Acabamento
            `
        }else if(valor === 1){

            res.innerText += `
            Tamponamento 
                ${altura} X ${profundidade} X 1 Lateral Tamponada
                ${altura} X 150 X 2 Lateral parede
                ${sicha} X 150 X 2 Engrosso Teto/base
                ${sicha} X 80 X 1 Frente Rodapé
                ${sicha} X 60 X 1 Acabamento
                ${sicha} X 3 X 6mm X 1 Acabamento
            `
        }else if(valor === 2){
            res.innerText += `
                Tamponamento 
                ${altura} X 150 X 2 Lateral parede
                ${sicha} X 150 X 2 Engrosso Teto/base
                ${sicha} X 80 X 1 Frente Rodapé
                ${sicha} X 60 X 1 Acabamento
                ${sicha} X 3 X 6mm X 1 Acabamento
            `
        }
        
    }

    function portas(porta){
        let lar;
        let h = (altura - 245).toFixed(0);
        
        if(porta === 2){
            let lar = ((largura - 40) / 2).toFixed(0) ;

            res.innerText += `
            Portas
            ${h} X ${lar} X ${porta} portas
            `;
        }else if(porta === 3){
            let lar = ((largura - 40) / 3).toFixed(0) ;
            
            
            res.innerText +=  `
            Portas
            ${h} X ${lar} X ${porta} portas
            `;
        }
    }

    function fundo(vao){
        let lar;
        let h;
        if(vao === 1){
            lar = largura - 65;
            h = altura - 215;
            res.innerText += `
                Fundos
                ${h} X ${lar} X 1 fundo
             `;
        }else if(vao === 2){
            lar = (largura - 65) / 2;
            h = altura - 215;
            res.innerText += `
                Fundos
                ${h} X ${lar} X 2 fundo
            `;
        }else if(vao ===3){
            lar = (largura - 65) / 3;
            h = altura - 215;
            res.innerText += `
                Fundos
                ${h} X ${lar} X 3 fundo
            `;
        }
    }

    function acessorios(ateOTeto){
        let puxador;
        let trilho;

        // calcula acessorios se o roupeiro vai ate o teto
        if(ateOTeto){
            puxador = altura - 175;
            trilho = largura - 62;

            res.innerText += ` 
                Acessórios
                ${puxador} ${trilho}
            `
        }
    }

    
}

function limparTela(){
    res.innerText = ''
}