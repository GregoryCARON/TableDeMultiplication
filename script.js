let fNum = Math.round(Math.random() * 10);
let sNum = Math.round(Math.random() * 10);
document.getElementById('op').innerHTML = fNum + ' x ' + sNum;
document.getElementById('champs').value ='';
document.getElementById('statut').innerHTML = '';
document.getElementById('champs').focus();

function combien() {
    let rNum = fNum * sNum;
    let hNum = document.getElementById('champs').value;
    hNum = parseInt(hNum);
    if (document.getElementById('champs').value !== '') {
        if (!Number.isInteger(hNum)) {
            document.getElementById('champs').value = '';
            return false;
        }
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
document.getElementById('boot').addEventListener('click', function() {
    demarrer();
});
document.getElementById('boot2').addEventListener('click', function() {
    alert(calcul(5, 2, '0'));
});

function calcul(num1, num2, calcType) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch(calcType) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
        default:
            var operateurs = ['+', '-', '*', '/'];
            var randop = Math.floor(Math.random() * (operateurs.length));
            console.log(randop);
            switch(randop) {
                case 0:
                    return num1 + num2;
                    break;
                case 1:
                    return num1 - num2;
                    break;
                case 2:
                    return num1 * num2;
                    break;
                case 3:
                    return num1 / num2;
                    break;
                default:
                    return 0;
            }

    }
}