window.addEventListener('load', function () { //wacht totdat je pagina volledig is geladen, en voert dan de actie uit
    var table = document.getElementById('tbr'); //hiermee word het id 'tbr' gezocht en toegewezen aan de variabele table
    var rowCount = table.rows.length; // berekent het aantal rijen in de tabel

    var rowCountRow = document.getElementById('rowCount'); //hiermee word het id 'rowCount' gezocht en toegewezen aan de variabele rowCountRow
    rowCountRow.textContent = 'Hoeveel boeken ik nog wil lezen: ' + rowCount; //Hier staat de tekst wat word weergegeven met het aantal berekende rijen
}); 

