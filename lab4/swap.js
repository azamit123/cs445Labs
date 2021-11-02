window.onload = function(){
    const pic1Div = document.getElementById("leftDiv");
    const pic2Div = document.getElementById("rightDiv");
    const btn = document.getElementById("btn");

    const pic1 = document.getElementById("chiwa");
    const pic2 = document.getElementById("german");

    
    btn.addEventListener("click",function(){
        const val = this.getAttribute("data-cata");
        if(val==1){
        pic1.src = "./germanshep.jpeg";
        pic2.src = "./chihuahua.jpeg";
        this.setAttribute("data-cata","2");
        }else{
            this.setAttribute("data-cata","1");
             pic1.src = "./chihuahua.jpeg";
             pic2.src = "./germanshep.jpeg";
        }
       
    });
}