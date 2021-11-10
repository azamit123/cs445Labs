window.onload = function(){
    getData();

    document.getElementById("referesh").onclick = getData;
}



async function getData(){
    let response = await fetch("https://randomuser.me/api/?results=5");
    let data = await response.json();
    displayPage(data.results);
    
}

function displayPage(empArr){

    const employDiv = document.getElementById("employees");
    employDiv.innerHTML = "";
    for(let i=0; i< empArr.length;i++){
        let emp = empArr[i];
        let index =i;
        let template = `
                    <div class="col-4">
                        <img id="img"
                        src = "${emp.picture.large}"/>
                    </div>
                    <div class="col-8 text-end">
                        <p id="personName" class="fw-bold">${emp.name.first}  ${emp.name.last}</p>
                        <p id="phoneNumber">Phone: ${emp.phone}</p>
                        <p id="email">${emp.email}</p>

                    </div>
               
        `

        
       let row = document.createElement("div");
        row.innerHTML = template;
        row.classList = "row mb-2";
        employDiv.appendChild(row);
       
    }
     
}