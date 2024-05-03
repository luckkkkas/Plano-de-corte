
function cortarRoupeiro(){
    
    const pared = document.getElementById('parede');
    const ateOTet = document.getElementById('ateOTeto');
    const altur = document.getElementById('altura');
    const largur = document.getElementById('largura');
    const va = document.getElementById('vao')

    const parede = pared.value;
    const ateOTeto = ateOTet.value;
    const altura = altur.value;
    const largura = largur.value;
    const vao = va.value;
    var div = (vao - 1) * 1.5;
    


    if(largura <= 0 || altura <= 0){
        alert('Altura ou largura inválida');
    }else{
        let lateral = altura - 210;
        let base = largura - 60;
        let prat = ((base - div) / vao).toFixed(1);
        let travessaGaveta = (prat - 88);

        console.log(lateral, base, prat, travessaGaveta);

    }




    
    console.log(parede, ateOTeto, altura, largura)
}


