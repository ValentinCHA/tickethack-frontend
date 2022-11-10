fetch('http://localhost:3000/cart')
.then(response => response.json())
.then(data => {
    console.log(data.data[0].arrival)
    if (data.data.length > 0) {
        document.querySelector('#Mycart').innerHTML += `
        <div id="array2">
        <h6 id="totalPrice">Total: <span class="prix">103€</span></h6>
            <button type="button" id="btn-purchase">Purchase</button>
        </div>`
        document.querySelector('#degage2').style.display = "none"
        for (let i =0; i< data.data.length; i++) {
            document.querySelector('#Mycart').innerHTML += `
            <h2>My cart</h2>
                    <div id="array1">
                        
                            <div class="itinéraire"> ${data.data[i].departure} > ${data.data[i].arrival}</div>
                            <div class="heure">${data.data[i].date.slice(11,16)}</div>
                            <div class="prix">${data.data[i].price}€</div>
                            <div class="delete">✖</div>
                        
                    </div>


            `
        }
    }
})