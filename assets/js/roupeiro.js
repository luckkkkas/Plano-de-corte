function cortarRoupeiro(){
   
    // recebe os elementos HTML
    const parede = parseInt(document.getElementById('parede').value);
    const ateOTeto = document.getElementById('ateOTeto').value;
    const altura = parseInt(document.getElementById('altura').value);
    const largura = parseInt(document.getElementById('largura').value);
    const vao = parseInt(document.getElementById('vao').value);
    const porta = parseInt(document.getElementById('portas').value);
    const profundidade = document.getElementById('profundidade').value;
    const nPrateleira = parseInt(document.getElementById('nPrateleira').value);
    const gaveta = parseInt(document.getElementById('nGaveta').value);
    var div = (vao - 1) * 1.5;
    var res = document.getElementById('res');
   
    corpo(altura, largura, vao, ateOTeto);
    tamponamento(parede);
    portas(porta);
    fundo(vao);
    acessorios(ateOTeto);
    //gerarTabela();
        
    function corpo(altura, largura, vao, ateOTeto) {
        var lateralH, nlaterais, lateralP, base, prat, travessaGaveta, divisoria, fundoH, fundoL, porta = 0;
        
        if (largura <= 0 || altura <= 0 || profundidade <= 0) {
            // faz verificação para ver se os elementos são válidos
            alert('Altura, largura ou profundidade inválida');
        } else {
            // --------------------primeiro divide ente ate o teto e não, depois faz as contas;

            if (ateOTeto) {
                //calcula as peças se o movel for ate o teto
                if(vao === 1){
                    nlaterais = vao + 1;
                    lateralP = profundidade - 80;
                    lateralH = altura - 240;
                    base = largura - 60;
                    prat = largura - 90; 
                    travessaGaveta = largura - 148;
                    fundoL = largura - 65;
                    fundoH = altura - 215;
                }else if(vao === 2){
                    nlaterais = vao + 1;
                    lateralP = profundidade - 80;
                    lateralH = altura - 240;
                    base = largura - 60;
                    prat = (largura - 105) /2; 
                    travessaGaveta = ((largura - 105) / 2)- 5.8 ;
                    fundoL = (largura - 5) /2;
                    fundoH = altura - 215;
                }
                //====================abaixo nao é ate o teto==================================================================
            }else{
                if(vao === 1){
                    nlaterais = vao + 1;
                    lateralP = profundidade - 80;
                    lateralH = altura - 140;
                    base = largura - 60;
                    prat = largura - 90; 
                    travessaGaveta = largura - 148;
                    fundoL = largura - 65;
                    fundoH = altura - 145;
                }else if(vao === 2){
                    nlaterais = vao + 1;
                    lateralP = profundidade - 80;
                    lateralH = altura - 140;
                    base = largura - 60;
                    prat = (largura - 105)/2; 
                    travessaGaveta = largura - 148;
                    fundoL = largura - 65;
                    fundoH = altura - 145;
                }
            }
        }
        
        gerarTabela() 
        function gerarTabela(){
                    const tableContainer = document.getElementById('res');
                            let tableHTML = `
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Quantidade</th>
                                            <th>Comprimento</th>
                                            <th>Largura</th>
                                            <th>Descrição</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>${nlaterais}</td>
                                            <td>${lateralH}</td>
                                            <td>${lateralP}</td>
                                            <td>Laterais/divisórias</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>${base}</td>
                                            <td>${lateralP}</td>
                                            <td>Base/teto</td>
                                        </tr>
                                        <tr>
                                            <td>${nPrateleira}</td>
                                            <td>${prat}</td>
                                            <td>${lateralP - 1}</td>
                                            <td>Prateleiras</td>
                                        </tr>
                                        <tr>
                                            <td>${gaveta * 2}</td>
                                            <td>${travessaGaveta}</td>
                                            <td>140</td>
                                            <td>Travessa de gaveta</td>
                                        </tr>
                                        <tr>
                                            <td>${gaveta*2}</td>
                                            <td>500</td>
                                            <td>140</td>
                                            <td>laterais gaveta</td>
                                        </tr>
                                        <tr>
                                            <td>${vao}</td>
                                            <td>${fundoH}</td>
                                            <td>${fundoL}</td>
                                            <td>Fundo</td>
                                        </tr>
                                    </tbody>
                                </table>
                            `;
                            res.innerHTML = tableHTML;
                }
        

    }
    
    
    function acessorios(ateOTeto){
        let puxador;
        let trilho;

        // calcula acessorios se o roupeiro vai ate o teto
        if(ateOTeto){
            puxador = altura - 175;
            trilho = largura - 62;

           //aqui continua atabela
        }
    }

    function tamponamento(valor, ateOTeto){
        //    faz a verificação de quantas laterais inteiras tem
        let sicha
        sicha = largura - 60;

        if(ateOTeto){

            if(valor === 0){
               //aqui continua atabela
            }else if(valor === 1){

               //aqui continua atabela
            }else if(valor === 2){
               //aqui continua atabela
            }
        }else{ 
            if(valor === 0){
               //aqui continua atabela
            }else if(valor === 1){

                //aqui continua atabela
            }else if(valor === 2){
                //aqui continua atabela
            }
        }
        
    }

    function portas(porta){
        let lar;
        let h = (altura - 245).toFixed(0);
        
        if(porta === 2){
            let lar = ((largura - 40) / 2).toFixed(0) ;

            //aqui continua atabela
        }else if(porta === 3){
            let lar = ((largura - 40) / 3).toFixed(0) ;
            
            
          //aqui continua atabela
        }
    }

    function fundo(vao){
        let lar;
        let h;
        if(vao === 1){
            lar = largura - 65;
            h = altura - 215;
            //aqui continua atabela
        }else if(vao === 2){
            lar = (largura - 65) / 2;
            h = altura - 215;
           //aqui continua atabela
        }else if(vao ===3){
            lar = (largura - 65) / 3;
            h = altura - 215;
            //aqui continua atabela
        }
    }
    
}


function limparTela(){
    res.innerText = ''
}