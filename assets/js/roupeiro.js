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
   //gerarTabela();
        
    function corpo(altura, largura, vao, ateOTeto) {
        var lateralH, nlaterais, lateralP, base, prat, travessaGaveta, fundoH, fundoL, porta1, porta2, puxador, cabide, trilho = 0;
        
        if (largura <= 0 || altura <= 0 || profundidade <= 0) {
            // faz verificação para ver se os elementos são válidos
            alert('Altura, largura ou profundidade inválida');
        } else {
            //calcula as operações comum para todos
            lateralP = (profundidade - 80).toFixed(1);
            nlaterais = (vao + 1).toFixed(1);
            base = (largura - 60).toFixed(1);
            trilho = (base - 2).toFixed(1);
            
            // --------------------;
            if (ateOTeto) {
                //calcula as peças se o movel for ate o teto
                lateralH = (altura - 240).toFixed(1);
                puxador = lateralH - 5;
                if(vao === 1){            
                    prat = largura - 90; 
                    cabide = prat - 5;
                    travessaGaveta = (largura - 148).toFixed(1);
                    fundoL = largura - 65;
                    fundoH = altura - 215;
                }else if(vao === 2){
                    prat = ((largura - 105) /2).toFixed(1); 
                    cabide = prat - 5;
                    travessaGaveta = (((largura - 135) / 2)- 5.8 ).toFixed(1);
                    fundoL = prat + 1.5;
                    fundoH = altura - 215;
                    porta1 = prat - 20 ;
                    porta2 = prat + 5; 
                }else if(vao === 3){
                    prat = ((largura - 120) /3).toFixed(1); 
                    cabide = prat - 5;
                    travessaGaveta = (((largura - 150) / 3) - 5.8 ).toFixed(1);
                    fundoL = prat + 1.5;
                    fundoH = altura - 215;
                    porta1 = prat - 20 ;
                    porta2 = prat + 5;
                }
                //====================abaixo nao é ate o teto==================================================================
            }else{
                lateralH = altura - 140;
                Math.round(fundoH) = altura - 145;
                puxador = lateralH - 5
                if(vao === 1){
                    prat = largura - 90;
                    cabide = prat - 5; 
                    travessaGaveta = largura - 148;
                    fundoL = largura - 65;
                }else if(vao === 2){
                    prat = (largura - 105)/2; 
                    cabide = prat - 5;
                    travessaGaveta = largura - 148;
                    Math.round(fundoL) = ((largura - 65) / 3 ).toFixed(1);
                    fundoL = prat + 1.5;
                    porta1 = prat - 20 ;
                    porta2 = prat + 5;
                }else if(vao === 3){
                    prat = ((largura - 120)/3).toFixed(1); 
                    cabide = prat - 5;
                    travessaGaveta = largura - 178;
                    Math.round(fundoL) = (((largura - 65) / 3 )).toFixed(1);
                    fundoL = prat + 1.5;
                    porta1 = prat - 20;
                    porta2 = prat + 5;
                }
            }
        } gerarTabela() 
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
                                        <tr>
                                            <td>${1}</td>
                                            <td>${porta1}</td>
                                            <td>${lateralH - 5}</td>
                                            <td>porta</td>
                                        </tr>
                                        <tr>
                                            <td>${2}</td>
                                            <td>${porta2}</td>
                                            <td>${lateralH - 5}</td>
                                            <td>porta</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table>
                                    <thead>
                                        <tr>
                                            <th>Comprimento</th>
                                            <th>Acessório</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>${cabide}</td>
                                            <td>cabides</td>
                                        </tr>
                                        <tr>
                                            <td>${puxador}</td>
                                            <td>Puxadores</td>
                                        </tr>
                                        <tr>
                                            <td>${trilho}</td>
                                            <td>Trilho</td>
                                        </tr>
                                    </tbody>
                                <table>
                            `;
                            res.innerHTML = tableHTML;
                }
        

    }

   
}


function limparTela(){
    res.innerText = ''
}

function tamponamento(valor, ateOTeto){
    let sicha, tSicha, nlateraisT, tLateralH, tLateralP, acRodape, acTeto;
    sicha= largura - 60;
    acRodape = sicha;
    acTeto = sicha;
    tLateralH = altura;
    tLateralP = profundidade;
    if(parede === 0 ){
        nlateraisT = 2;
        let tableHTML2 = `<table>
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
                <td>2</td>
                <td>${sicha}</td>
                <td>150</td>
                <td>Base/teto</td>
            </tr>
            <tr>
                <td>${nlateraisT}</td>
                <td>${altura}</td>
                <td>${profundidade}</td>
                <td>Laterais</td>
            </tr>
            <tr>
                <td>1</td>
                <td>${acRodape}</td>
                <td>80</td>
                <td>Rodapé</td>
            </tr>
            <tr>
                <td>1</td>
                <td>${acTeto}</td>
                <td>60</td>
                <td>Ac Teto</td>
            </tr>
            </tbody>
            </table>
        `;
        
    res.innerHTML += tableHTML2
    }else if(parede === 1){
        nlateraisT = 1;
        tSicha = 1;
        let tableHTML2 = `<table>
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
                <td>2</td>
                <td>${sicha}</td>
                <td>150</td>
                <td>Base/teto</td>
            </tr>
            <tr>
                <td>${nlateraisT}</td>
                <td>${altura}</td>
                <td>${profundidade}</td>
                <td>Laterais</td>
            </tr>
            <tr>
                <td>${tSicha}</td>
                <td>${altura}</td>
                <td>${profundidade}</td>
                <td>Laterais</td>
            </tr>
            <tr>
                <td>1</td>
                <td>${acRodape}</td>
                <td>80</td>
                <td>Rodapé</td>
            </tr>
            <tr>
                <td>1</td>
                <td>${acTeto}</td>
                <td>60</td>
                <td>Ac Teto</td>
            </tr>
            </tbody>
            </table>
        `;
        
    res.innerHTML += tableHTML2
    }else{
        nlateraisT = 0;
        tSicha = 2;
    }
        let tableHTML2 = `<table>
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
                <td>2</td>
                <td>${sicha}</td>
                <td>150</td>
                <td>Base/teto</td>
            </tr>
            <tr>
                <td>${tSicha}</td>
                <td>${altura}</td>
                <td>${profundidade}</td>
                <td>Laterais</td>
            </tr>
            <tr>
                <td>1</td>
                <td>${acRodape}</td>
                <td>80</td>
                <td>Rodapé</td>
            </tr>
            <tr>
                <td>1</td>
                <td>${acTeto}</td>
                <td>60</td>
                <td>Ac Teto</td>
            </tr>
            </tbody>
            </table>
        `;
        
    res.innerHTML += tableHTML2
}
