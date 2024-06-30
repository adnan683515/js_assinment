




// console.log(document.getElementById("product-div").innerText)

const press = () => {

    const input_label = document.getElementById("input-ladar");
    const value = input_label.value;
    fetching(value)
    document.getElementById("input-ladar").value = ""

}



const fetching = (val) => {

    fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${val}`)
        .then(res => res.json())
        .then(Data => display(Data));
}

fetching('a')


const display = (data) => {

    const main_container = document.getElementById("product-div");

    data['player'].forEach(obj => {
        // console.log(obj)

        const div1 = document.createElement("div");
        div1.classList.add("main-sub-div")
        div1.classList.add('col-sm-12')
        div1.classList.add("col-lg-3")
        div1.classList.add("col-md-4")


        const div_img = document.createElement("div")
        div_img.classList.add("chobi-div")

        const div_txt = document.createElement('div');
        div_txt.classList.add("all-text")

        div_img.innerHTML = `
        
        <img class="pic" src="${obj.strThumb}" />
        `
        div_txt.innerHTML = `
        
        <p><b>Id:</b> ${obj.idPlayer}</p>
        <h6><b>Date of Birth:</b> ${obj.dateBorn} </h6>
        <p><b>Gender: </b>${obj.strGender} </p>
        <p><b>Nationality: </b> ${obj.strNationality} </p>
        <p><b>Description:</b> ${obj.strDescriptionEN.slice(0, 16)}</p>
        
        <div class="row ">
            <div class=" col-lg-12 col-md-12 col-sm-12">
                <button onclick="cart('${obj.strThumb}','${obj.idPlayer}','${obj.dateBorn}','${obj.strNationality}')" class="btn-add">Add to cart</button>     
            </div>
        
            <div clas=" col-lg-12 col-md-12 col-sm-12" >
                <button onclick="deal('${obj.idPlayer}')" class="btn btn-primary" data-bs-target="#modalID" data-bs-toggle="modal">Details</button>
            </div>
        </div>
        `

        div1.appendChild(div_img)
        div1.appendChild(div_txt)

        main_container.appendChild(div1)

    });
}

const cart = (pic, id, dateBorn, Nationality) => {


    const card_count = document.getElementById("card-number").innerText;

    let convertedCount = parseInt(card_count);
    convertedCount = convertedCount + 1;
    document.getElementById("card-number").innerText = convertedCount;

    if (card_count < 11) {

        const main_container = document.getElementById("cart-container")




        const main_div = document.createElement("div")
        main_div.classList.add("cart-main-main-div")
        main_div.classList.add('col-lg-3')
        main_div.classList.add('col-md-3')
        main_div.classList.add("col-sm-12")




        const div1 = document.createElement("div");
        div1.classList.add("chobi-div")

        div1.innerHTML = `
        <img class="pic" src="${pic}" />
    `

        const div2 = document.createElement("div");
        div2.classList.add("all-text")

        div2.innerHTML = `
        <p><b>Id:</b> ${id}</p>
        <h6><b>Date of Birth:</b> ${dateBorn} </h6>
         <p><b>Nationality: </b> ${Nationality} </p>
    
    `

        main_div.appendChild(div1)
        main_div.appendChild(div2)


        main_container.appendChild(main_div)


    }
    else {

        alert("Your can't select!")
    }


}







const ft_main_container = document.getElementById("main-ft-div")

const div_ft = document.createElement("div")
div_ft.classList.add("col-sm-12")
div_ft.classList.add("col-md-12")
div_ft.classList.add("col-lg-12")
div_ft.classList.add('text-center')
div_ft.style.padding = '10px'

div_ft.innerHTML = `
<p>Contact me <i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-facebook-messenger"></i> <i class="fa-brands fa-whatsapp"></i></p> 
<hr>
<p><b>Email:</b>golamfaruk@560.com</p>
<p><b>Number:</b>018123134</p>
<p><b>Address:</b>Noakhali,Bashurhat</p>


`
ft_main_container.appendChild(div_ft)


const deal = (idd) => {

    fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${idd}`)
    .then(res => res.json())
    .then(data => pop(data))
    

}

const pop = (data) =>{


    const obj = data["players"][0];
    
   
    const pop_div = document.getElementById("modal-body");
    pop_div.classList.add("popup")

    const div = document.createElement("div")
    div.classList.add('deal-div')


    const div_img = document.createElement("div");

    const div_txt = document.createElement("div")

    div_img.innerHTML = `
        <img class="pic" src="${obj.strThumb}"/>
    
    `
    div_txt.innerHTML = `
    
        <p><b>Description:</b> <br>${obj.strDescriptionEN.slice(0,30)}</p>
        <p><b>Country:</b> ${obj.strNationality} </p>
        <p><b>Id:</b> ${obj.idPlayer} </p>
    
    `

    div.appendChild(div_img)
    div.appendChild(div_txt)

    pop_div.appendChild(div)



}


/*

const pop_div = document.getElementById("modal-body");
    pop_div.classList.add("popup")

    const div = document.createElement("div")
    div.classList.add('deal-div')


    const div_img = document.createElement("div");

    const div_txt = document.createElement("div")

    div_img.innerHTML = `
        <img class="pic" src="${chobi}"/>
    
    `
    div_txt.innerHTML = `
    
        <p><b>Description:</b> <br>${des}</p>
        <p><b>Country:</b> ${Nationality} </p>
        <p><b>Id:</b> ${id} </p>
    
    `

    div.appendChild(div_img)
    div.appendChild(div_txt)

    pop_div.appendChild(div)

*/