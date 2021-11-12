const {from} = rxjs;
window.onload = function(){
    document.getElementById("btn").onclick = function(){
        let input = document.getElementById("input1").value;
                 return getData(input); 
    } 
}

async function getData(numberOfEmp){
    let response = await fetch('https://randomuser.me/api/?results='+ numberOfEmp);
    let data = await response.json();
    renderPage(data.results);
};

function renderPage(empArr){
   const empDiv = document.getElementById("employees");
   empDiv.innerHTML = " ";

   from(empArr).subscribe(emp =>{
        let template = 
                    `<div class="col-4">
                        <p id="personName" class="fw-bold">${emp.name.first}  ${emp.name.last}</p>
                    </div>
                    <div class="col-8 text-end">
                       <p class="fw-bold">Location</>
                        <p>${emp.location.street.number} ${emp.location.street.name}</p>
                        <p>${emp.location.city} ${emp.location.state} ${emp.location.country} ${emp.location.postcode}</p>

                    </div>
                    <hr>
                    `

        let row = document.createElement("div");
        row.innerHTML = template;
        row.classList = "row mb-2";
        empDiv.appendChild(row);
               
   }); 
}