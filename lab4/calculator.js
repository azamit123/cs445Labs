 window.onload = function(){
                
                document.getElementById("btn").onclick = function(event){
                    const firstNum = document.getElementById("ope1").value;
                    const secNum = document.getElementById("ope2").value;
                    const result = document.getElementById("result");
                    event.preventDefault();
                    result.value = Number(firstNum) + Number(secNum);
                }

            }