const button= document.getElementById("number-div");
const li=document.querySelectorAll("li");
const result=document.getElementById("screen");

for(let i=0;i<li.length;i++){
    li[i].addEventListener("click",function(){
        if(this.innerHTML == "="){
            result.innerHTML =eval(result.innerHTML);
        }else{

            if(this.innerHTML == "÷"){
                result.innerHTML += "/"; 
            }else if(this.innerHTML == "x"){
                result.innerHTML += "*";
            }else if(this.innerHTML == "C"){
                result.innerHTML = "";
            }else if(this.innerHTML == "√"){
                result.innerHTML = Math.sqrt(result.innerHTML);

            }else if(this.innerHTML =="^"){
                result.innerHTML = result.innerHTML * result.innerHTML;

            }else{
                result.innerHTML+=this.innerHTML;
            }
                
            
            



            
        }

    });
}