//Add a task
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#current-user").onsubmit = function(){
        
        const li = document.createElement('li');
        let user_name = document.querySelector('#name').value;
        let new_user_html = `
                <span> ${user_name} </span>`
        
                li.innerHTML = new_user_html;
        document.querySelector("#user_name").append(li);
        return false;
    }
    

    
    
    
    
    
 
    });
    
    function myFunction() {
        var x = document.getElementById("userForm");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

    