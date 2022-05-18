function loadEvent() {


    fetch("./public/data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data)

      document.getElementById("root").insertAdjacentHTML('beforeend', `
        <header>
            <p id="caption">New York Times Best Sellers</p>
            <button class="material-icons menu">menu</button>
        </header>
      `)

      data.cards.map(({title, sub, text}, i ) => document.getElementById('root').insertAdjacentHTML('beforeend', `
        <div>
            <div class="bookcard">  
                <p class="number">${i+1}</p>
                <p class="author">${sub}</p>
                <p class="name">${title}</p>         
                <p class="description">${text}</p>
            </div>
            <button class="details-button">read more <span class="material-icons arrow">arrow_forward</span></button>
        </div>
                 
        
        `))
      
    }).catch(function(err) {
        console.log('Fetch problem show: ' + err.message);
      });
}

window.addEventListener("load", loadEvent);