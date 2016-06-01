var aantalKliks = 0;
var totalScore = 0;
var uitvoerenAantal = document.getElementById('aantal');
var uitvoerenWaardering = document.getElementById('waardering');
var deSterren = document.querySelectorAll('.geen');

function kleurSter(sterNummer, procent) {
    var naam = 's' + sterNummer;
    procent = Math.min(procent, 100);
    document.getElementById(naam).style.width = procent+'%';
}
//kleurSter(2,40);

function kleurDeSterren(waardering){
    for(var i=1; i<6; i++){
        kleurSter(i, waardering*100);
        waardering --;
    }
}

//random genereren en uitvoeren in DOM
function uitvoeren(){
    uitvoerenAantal.innerHTML = aantalKliks;
    uitvoerenWaardering.innerHTML = Math.ceil(10*totalScore/Math.max(aantalKliks,1))/10;
    kleurDeSterren(Math.ceil(10*totalScore/aantalKliks)/10)
}
uitvoeren();

function verwerkKlik() {
    aantalKliks++;
    var nummertje = this.getAttribute('data-role');
    totalScore += parseInt(nummertje);
    uitvoeren();
}
    for(var i=0; i<deSterren.length; i++){
        deSterren[i].addEventListener('click', verwerkKlik);
    }

