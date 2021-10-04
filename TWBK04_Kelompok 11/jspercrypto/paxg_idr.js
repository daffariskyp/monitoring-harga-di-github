function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var myObj = []	
	
$.ajax({
    method:'GET',
    url:'https://indodax.com/api/paxg_idr/ticker',
    success:function(response){
        myObj = response.ticker
        buildTable(myObj)
        console.log(myObj)
    }
})

function buildTable(ticker){
    var table = document.getElementById('myTable')
    
    var row = `<tr>					
                    <td>Rp.${numberWithCommas(ticker.high)}</td>
                    <td>Rp.${numberWithCommas(ticker.low)}</td>
                    <td>${ticker.vol_paxg}</td>
                    <td>Rp.${numberWithCommas(ticker.vol_idr)}</td>
                    <td>Rp.${numberWithCommas(ticker.last)}</td>
                    <td>Rp.${numberWithCommas(ticker.buy)}</td>
                    <td>Rp.${numberWithCommas(ticker.sell)}</td>
                </tr>`
    table.innerHTML += row 
}