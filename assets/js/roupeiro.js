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
            // calculando o corpo;
            if (ateOTeto) {
                let prof = profundidade - 80
                let profPrat = profundidade - 90
                lateral = altura - 210;
                base = largura - 60;
                prat = ((base - div) / vao).toFixed(1);
                travessaGaveta = (prat - 88);

                res.innerText += `
                    Corpo    
                    ${lateral} X ${prof} lateral,\n ${base} X ${prof} X 2 base/teto,\n ${prat} X ${profPrat} prateleira,\n ${travessaGaveta} travessa de gaveta
                `;

            } else {
                let prof = profundidade - 80
                let profPrat = profundidade - 90
                lateral = altura - 140;
                base = largura - 60;
                prat = ((base - div) / vao).toFixed(1);
                travessaGaveta = (prat - 88);


                res.innerText += `
                    Corpo 
                    ${lateral} X ${prof} lateral,\n ${base} X ${prof} X 2 base/teto,\n ${prat} X ${profPrat} prateleira,\n ${travessaGaveta} travessa de gaveta
                `;
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
        if(valor === 0){
            res.innerText += `
                Tamponamento 
                lateral dois lados
            `
        }else if(valor === 1){
            res.innerText +=  `
            Tamponamento 
            lateral dois lados
        `
        }else if(valor === 2){
            res.innerText +=  `
            Tamponamento 
            lateral dois lados
        `
        }
        
    }

    function portas(porta){
        if(porta === 1){
            res.innerText +=  `
            2 Portas 
            
        `
        }else if(porta === 2){
            res.innerText +=  `
            Portas
        `
        }else if(porta === 3){
            res.innerText +=  `
            Portas
        `
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
