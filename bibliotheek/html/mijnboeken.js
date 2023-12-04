window.addEventListener('load', function () { //wacht totdat je pagina volledig is geladen, en voert dan de actie uit
    var table = document.getElementById('mijnboeken'); //hiermee word het id 'mijnboeken' gezocht en toegewezen aan de variabele table
    var rowCount = table.rows.length * 2; // berekent het aantal rijen in de tabel en vermenigvuldigd het met twee

    var rowCountRow = document.getElementById('rowCount'); //hiermee word het id 'rowCount' gezocht en toegewezen aan de variabele rowCountRow
    rowCountRow.textContent = 'Hoeveel boeken ik heb: ' + rowCount; //Hier staat de tekst wat word weergegeven met het aantal berekende rijen
}); 

