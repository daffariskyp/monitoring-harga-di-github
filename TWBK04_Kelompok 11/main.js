
//untuk format koma tiap 3 digit
//https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//untuk fetch dan buat table dari API
//https://www.youtube.com/watch?v=ru_YWeOh2kU&t=56s
//https://stackoverflow.com/questions/69425477/fetch-api-data-to-html-table
//https://stackoverflow.com/questions/6268679/best-way-to-get-the-key-of-a-key-value-javascript-object
var myObj = []	
	
$.ajax({
    method:'GET',
    url:'https://indodax.com/api/tickers',
    success:function(response){
        myObj = response.tickers
        buildTable(myObj)
        console.log(myObj)
    }
})

function buildTable(tickers){
    var table = document.getElementById('myTable')
    
    var n = 0;
    for (var i in tickers){
        var row = `<tr>
                        <td><a href="htmlpercrypto/${Object.keys(tickers)[n]}.html" target="_blank"> ${Object.keys(tickers)[n]}</a></td>						
                        <td>Rp.${numberWithCommas(tickers[i].high)}</td>
                        <td>Rp.${numberWithCommas(tickers[i].low)}</td>
                        <td>Rp.${numberWithCommas(tickers[i].buy)}</td>
                  </tr>`
        table.innerHTML += row
        n++
    }
}

//untuk buat list 2 kolom
//https://stackoverflow.com/questions/6268679/best-way-to-get-the-key-of-a-key-value-javascript-object
(function($){
    var initialContainer = $('.columns'),
        columnItems = $('.columns li'),
        columns = null,
        column = 1; // account for initial column
    function updateColumns(){
        column = 0;
        columnItems.each(function(idx, el){
            if (idx !== 0 && idx > (columnItems.length / columns.length) + (column * idx)){
                column += 1;
            }
            $(columns.get(column)).append(el);
        });
    }
    function setupColumns(){
        columnItems.detach();
        while (column++ < initialContainer.data('columns')){
            initialContainer.clone().insertBefore(initialContainer);
            column++;
        }
        columns = $('.columns');
    }

    $(function(){
        setupColumns();
        updateColumns();
    });
})(jQuery);



