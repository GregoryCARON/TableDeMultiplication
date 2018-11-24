function generateNumb() {
    let tabTable = [];
    let retVal;
    if (document.getElementById('0').checked == true) {
        tabTable.push('0');
    }
    if (document.getElementById('1').checked == true) {
        tabTable.push('1');
    }
    if (document.getElementById('2').checked == true) {
        tabTable.push('2');
    }
    if (document.getElementById('3').checked == true) {
        tabTable.push('3');
    }
    if (document.getElementById('4').checked == true) {
        tabTable.push('4');
    }
    if (document.getElementById('5').checked == true) {
        tabTable.push('5');
    }
    if (document.getElementById('6').checked == true) {
        tabTable.push('6');
    }
    if (document.getElementById('7').checked == true) {
        tabTable.push('7');
    }
    if (document.getElementById('8').checked == true) {
        tabTable.push('8');
    }
    if (document.getElementById('9').checked == true) {
        tabTable.push('9');
    }
    if (document.getElementById('10').checked == true) {
        tabTable.push('10');
    }
    if (tabTable.length > 0) {
        retVal = Math.floor(Math.random() * tabTable.length);
        retVal = parseInt(tabTable[retVal]);
        console.log('éléments dans le tableau : ' + tabTable.length + ', sélectionné : ' + retVal + ', valeur : ' + tabTable[retVal]);
    } else {
        alert('Sélectionne au moins une table !');
        retVal = 0;
    }
    savePrefs();
    return retVal;
}