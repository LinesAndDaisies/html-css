window.addEventListener('load', function () {
    var table = document.getElementById('tbr');
    var rowCount = table.rows.length;

    var rowCountRow = document.getElementById('rowCount');
    rowCountRow.textContent = 'Hoeveel boeken ik nog wil lezen: ' + rowCount;
}); 