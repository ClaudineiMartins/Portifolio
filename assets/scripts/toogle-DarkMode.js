const botaoMudar = document.querySelector ("#alterador");

        function Alterar (){
            

            const body =document.querySelector("body");
            const sections = document.querySelectorAll(".js-Altera-Bg");
            const textos=document.querySelectorAll(".js-altera-color");
            const nomeModo = document.querySelector("#nomeModo"); //Mostra se esta em dark ou ligh na pagina//
            
            if (botaoMudar.checked==true){
               
                body.style.background = "#0D0D0D" ;  
                body.style.color = "#FFFFFF";
                nomeModo.innerHTML = 'Light Mode';
                sections.forEach(section => {
                    section.style.background = "#1A1A1A";
                  });


                textos.forEach(texto=> {
                    texto.style.color ="#FFFFFF"
                });
                  
                  
                  
         
            }
            else {
                body.style.background = "#FFFFFF";
                body.style.color = "#000000";
                nomeModo.innerHTML = 'Dark Mode';
                sections.forEach(section => {
                    section.style.background = "#F0F2F4";
                  });
                  textos.forEach(texto=> {
                    texto.style.color ="var(--cinza_Opaco)"
                }); 
                  
            }
        }
        botaoMudar.addEventListener("click", Alterar)
