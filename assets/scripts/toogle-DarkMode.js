const botaoMudar = document.querySelector ("#alterador");

        function Alterar (){
            

            const body =document.querySelector("body");
            const nomeModo = document.querySelector("#nomeModo");

            if (botaoMudar.checked==true){
                body.style.background = "#000000" ;  
                body.style.color = "#FFFFFF";
                nomeModo.innerHTML = 'Light Mode'
         
            }
            else {
                body.style.background = "#FFFFFF";
                body.style.color = "#000000";
                nomeModo.innerHTML = 'Dark Mode'
            }
        }
        botaoMudar.addEventListener("click", Alterar)
