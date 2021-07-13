// console.log(document.getElementById('title'));
// console.log(document instanceof HTMLDocument);
document.addEventListener("DOMContentLoaded",
    function (event) {
        function sayhello(event){
            console.log(this);
           var ele= document.getElementById("name").value;
           
           var message="<h2>Yours "+ele+"</h2>";
           document.getElementById("content").innerHTML = message;
        
           if(ele === "Nobody"){
               var title=document.querySelector("#title").textContent;
               title +=" No shit!";
               document.querySelector("h1").textContent=title;
           }
        };
        
        //
        document.querySelector("button").addEventListener("click",sayhello);
        document.querySelector("body").addEventListener("mousemove",
            function (event){
                if (event.shiftKey === true) {
                    console.log("x: " + event.clientX);
                    console.log("y: " + event.clientY);
                }
            }
        );
        
        
    }
    );

// document.querySelector("button").onclick=sayhello;