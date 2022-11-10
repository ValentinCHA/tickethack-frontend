
document.querySelector('#btn-search').addEventListener('click', function() {
    const departure = document.querySelector('#departure').value;
    const arrival = document.querySelector('#arrival').value;
    const date = document.querySelector('#date').value;
    //console.log(departure, arrival, date)
    
    fetch(`http://localhost:3000/travels/search/${departure}/${arrival}/${date}`)
    .then(response => response.json())
    .then(data => {
        //console.log(data.dbData.length,"DEPARTURE =>", data.dbData[0].departure);
        if (data.dbData.length === 0) {
            
            document.querySelector('#array').innerHTML = `
            <center>
                <img class="train" src="./images/notfound.png" />
                <div id="line"></div>
                <h3>No trip found</h3>
            </center>
            
            `
        } else {
            document.querySelector('#degage').style.display = "none"
            for (let i= 0 ; i < data.dbData.length; i++) {
            document.querySelector('#array').innerHTML += `
            <section class="resultDb" id=${data.dbData[i]._id}>
            <div id="itineraire">${data.dbData[i].departure} > ${data.dbData[i].arrival}</div>
            <div id="heure">${data.dbData[i].date.slice(11,16)}</div>
            <div id="prix">${data.dbData[i].price}€</div>
            <button type="button" class="book">Book</button>
        </section>

            `
        }}

        for (let j =0; j < document.querySelectorAll('.book').length ; j++) {
            
                document.querySelectorAll('.book')[j].addEventListener('click', function() {
                    window.location.assign("cart.html")
                    console.log("TEST AVANT FETCH");
                    console.log(this.parentNode.id)
                    const id = this.parentNode.id
                    fetch('http://localhost:3000/cart/display', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ id }),
                    }).then(response => response.json())
                    .then(data => {
                        console.log(data);
                    })
                })
               
        }

    })
})

console.log("TEST AVANT BOOK");



console.log("test apres book");