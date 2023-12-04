window.addEventListener('load', function () {
    var table = document.getElementById('mijnboeken');
    var rowCount = table.rows.length * 2;

    var rowCountRow = document.getElementById('rowCount');
    rowCountRow.textContent = 'Hoeveel boeken ik heb: ' + rowCount;
}); 

