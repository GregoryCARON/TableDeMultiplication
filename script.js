let fNum;
let sNum;

function iif(condition, trueCondition, falseCondition) {
    if (condition) {
        return trueCondition;
    } else {
        return falseCondition;
    }
}

function loadPrefs() {
    if (typeof Storage !== 'undefined') {
        localStorage.table0 = iif(document.getElementById('0').checked === true, true, false);
        localStorage.table1 = iif(document.getElementById('1').checked === true, true, false);
        localStorage.table2 = iif(document.getElementById('2').checked === true, true, false);
        localStorage.table3 = iif(document.getElementById('3').checked === true, true, false);
        localStorage.table4 = iif(document.getElementById('4').checked === true, true, false);
        localStorage.table5 = iif(document.getElementById('5').checked === true, true, false);
        localStorage.table6 = iif(document.getElementById('6').checked === true, true, false);
        localStorage.table7 = iif(document.getElementById('7').checked === true, true, false);
        localStorage.table8 = iif(document.getElementById('8').checked === true, true, false);
        localStorage.table9 = iif(document.getElementById('9').checked === true, true, false);
        localStorage.table10 = iif(document.getElementById('10').checked === true, true, false);
    }
}

function savePrefs() {
    if (typeof Storage !== 'undefined') {
        localStorage.table0 = iif(document.getElementById('0').checked === true, true, false);
        localStorage.table1 = iif(document.getElementById('1').checked === true, true, false);
        localStorage.table2 = iif(document.getElementById('2').checked === true, true, false);
        localStorage.table3 = iif(document.getElementById('3').checked === true, true, false);
        localStorage.table4 = iif(document.getElementById('4').checked === true, true, false);
        localStorage.table5 = iif(document.getElementById('5').checked === true, true, false);
        localStorage.table6 = iif(document.getElementById('6').checked === true, true, false);
        localStorage.table7 = iif(document.getElementById('7').checked === true, true, false);
        localStorage.table8 = iif(document.getElementById('8').checked === true, true, false);
        localStorage.table9 = iif(document.getElementById('9').checked === true, true, false);
        localStorage.table10 = iif(document.getElementById('10').checked === true, true, false);
    }
}

function generateNumb() {
    let tabTable = [];
    let retVal;
    if (document.getElementById('0').checked === true) {
        tabTable.push(0);
        savePrefs();
    }
    if (document.getElementById('1').checked === true) {
        tabTable.push(1);
        savePrefs();
    }
    if (document.getElementById('2').checked === true) {
        tabTable.push(2);
        savePrefs();
    }
    if (document.getElementById('3').checked === true) {
        tabTable.push(3);
        savePrefs();
    }
    if (document.getElementById('4').checked === true) {
        tabTable.push(4);
        savePrefs();
    }
    if (document.getElementById('5').checked === true) {
        tabTable.push(5);
        savePrefs();
    }
    if (document.getElementById('6').checked === true) {
        tabTable.push(6);
        savePrefs();
    }
    if (document.getElementById('7').checked === true) {
        tabTable.push(7);
        savePrefs();
    }
    if (document.getElementById('8').checked === true) {
        tabTable.push(8);
        savePrefs();
    }
    if (document.getElementById('9').checked === true) {
        tabTable.push(9);
        savePrefs();
    }
    if (document.getElementById('10').checked === true) {
        tabTable.push(10);
        savePrefs();
    }
    if (tabTable.length > 0) {
        retVal = Math.floor(Math.random() * tabTable.length);
        console.log('éléments dans le tableau : ' + tabTable.length + ', sélectionné : ' + retVal + ', valeur : ' + parseInt(tabTable[retVal]));
        retVal = parseInt(tabTable[retVal]);
    } else {
        alert('Sélectionne au moins une table !');
        retVal = 0;
    }
    return retVal;
}

//fNum = Math.round(Math.random() * 10);
fNum = generateNumb();
sNum = Math.round(Math.random() * 10);
document.getElementById('op').innerHTML = fNum + ' x ' + sNum;
document.getElementById('champs').value = '';
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
            fNum = generateNumb();
            sNum = Math.round(Math.random() * 10);
            document.getElementById('op').innerHTML = fNum + ' x ' + sNum;
        } else {
            document.getElementById('resultat').innerHTML = document.getElementById('resultat').innerHTML + '<br><span id="pasbon">' + fNum + ' x ' + sNum + ' = ' + hNum + '</span>';
            document.getElementById('statut').innerHTML = 'Perdu !';


        }
    }

    document.getElementById('champs').value = '';
    document.getElementById('champs').focus();
}

function zero() {
    document.getElementById('resultat').innerHTML = '';
    document.getElementById('champs').value = '';
    document.getElementById('statut').innerHTML = '';
    document.getElementById('champs').focus();
}

document.getElementById('champs').addEventListener('keydown', (event) => {
    const keyName = event.key;

    switch (keyName) {
        case 'Enter':
            combien();
            break;
        case 'Delete':
            zero();
            break;
        default:
            console.log(keyName);
    }
}, true);

function demarrer() {
    document.getElementById('global').style.display = 'Block';
    document.getElementById('start').style.display = 'none';
    document.getElementById('champs').focus();
}

document.getElementById('btn').addEventListener('click', function () {
    combien();
});
document.getElementById('boot').addEventListener('click', function () {
    loadPrefs();
    demarrer();
});

document.getElementById('boot2').addEventListener('click', function() {
    //alert(calcul(5, 2, '0'));
    alert(Math.round(24,5));
});

function calcul(num1, num2, calcType) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch (calcType) {
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
            switch (randop) {
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