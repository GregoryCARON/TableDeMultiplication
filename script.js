let fNum = Math.round(Math.random() * 10);
let sNum = Math.round(Math.random() * 10);
document.getElementById('op').innerHTML = fNum + ' x ' + sNum;
document.getElementById('champs').value ='';
document.getElementById('statut').innerHTML = '';
document.getElementById('champs').focus();

function combien() {
    let rNum = fNum * sNum;
    let hNum = document.getElementById('champs').value;
    hNum = Number(hNum);
    if (document.getElementById('champs').value !== '') {
        if (hNum === rNum) {
            document.getElementById('resultat').innerHTML = document.getElementById('resultat').innerHTML + '<br><span id="bon">' + fNum + ' x ' + sNum + ' = ' + rNum + '</span>';
            document.getElementById('statut').innerHTML = 'Gagné !';
            fNum = Math.round(Math.random() * 10);
            sNum = Math.round(Math.random() * 10);
            document.getElementById('op').innerHTML = fNum + ' x ' + sNum;
        } else {
            document.getElementById('resultat').innerHTML = document.getElementById('resultat').innerHTML + '<br><span id="pasbon">' + fNum + ' x ' + sNum + ' = ' + hNum + '</span>';
            document.getElementById('statut').innerHTML = 'Perdu !';

        }
    }
    document.getElementById('champs').value ='';
    document.getElementById('champs').focus();
}
function zero() {
    document.getElementById('resultat').innerHTML = '';
    document.getElementById('champs').value = '';
    document.getElementById('statut').innerHTML = '';
    document.getElementById('champs').focus();
}

document.getElementById('champs').addEventListener('keypress', (event) => {
    const keyName = event.key;
    switch(keyName) {
        case 'Enter':
            combien();
            break;
        default:
            console.log(keyName);
            break;
    }
});

function demarrer() {
    document.getElementById('global').style.display = 'Block';
    document.getElementById('start').style.display = 'none';
    document.getElementById('champs').focus();
}
document.getElementById('btn').addEventListener('click', function() {
    combien();
});