function cortarRoupeiro(){

    // recebe os elementos HTML
    const parede = parseInt(document.getElementById('parede').value);
    const ateOTeto = parseInt(document.getElementById('ateOTeto').value);
    const altura = parseInt(document.getElementById('altura').value);
    const largura = parseInt(document.getElementById('largura').value);
    const vao = parseInt(document.getElementById('vao').value);
    const porta = parseInt(document.getElementById('portas').value);
    var div = (vao - 1) * 1.5;

    corpo(altura, largura, vao);
    tamponamento(parede)
    portas(porta)
    fundo(vao)
    
    function corpo(altura, largura, vao){
        // faz verificação para ver se os elementos são validos e 
        if(largura <= 0 || altura <= 0){
            alert('Altura ou largura inválida');
        }else{
            // calculando o corpo
            let lateral = altura - 210;
            let base = largura - 60;
            let prat = ((base - div) / vao).toFixed(1);
            let travessaGaveta = (prat - 88);

            // console.log(lateral, base, prat, travessaGaveta);

        }

        // console.log(parede, ateOTeto, altura, largura)
    }

    function tamponamento(valor){
           
        if(valor === 0){
            console.log('lateral dois lados')
        }else if(valor === 1){
            console.log('lateral 1 lado')
        }else if(valor === 2){
            console.log('lateral 0 lados')
        }
        
    }

    function portas(porta){
        if(porta === 1){
            console.log('1 porta')
        }else if(porta === 2){
            console.log('2 portas')
        }else if(porta === 3){
            console.log('3 portas')
        }
    }

    function fundo(vao){
        let lar;
        let h;
        if(vao === 1){
            lar = largura - 65;
            h = altura - 215;
            console.log(`${h} X ${lar} fundo`);
        }else if(vao === 2){
            lar = (largura - 65) / 2;
            h = altura - 215;
            console.log(`${h} X ${lar} fundo`);
        }else if(vao ===3){
            lar = (largura - 65) / 3;
            h = altura - 215;
            console.log(`${h} X ${lar} fundo`);
        }
    }

}
