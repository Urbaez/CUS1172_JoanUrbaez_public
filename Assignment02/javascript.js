//Add a task
document.addEventListener("DOMContentLoaded", function(){
document.querySelector("#new-task").onsubmit = function(){
    
    const li = document.createElement('li');
    let task_text = document.querySelector('#task').value;
    let priority = document.querySelector('#priority').value;
    let new_task_html = `
            <span> ${task_text} </span>

            <span>-- ${priority} Task </span>
            <button class ="remove"> Remove </button>;
            
            <button class="complete"> ✓ </button>`
    
            li.innerHTML = new_task_html;
    document.querySelector("#tasks_list").append(li);
    document.querySelector("#task").value = '';
    return false;
}





//Remove and Complete
document.addEventListener('click', function(event){
     element = event.target;
     if (element.className === 'remove'){
        element.parentElement.remove();
     }
     if (element.className === "complete"){
         element.parentElement.style.cssText = 'text-decoration:line-through';
     }
})
});

/*

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#form').onsubmit = function() {
        let msg = document.querySelector("#message").value;
        alert(msg);
        return  false;
    }
    document.querySelector("#abutton").onclick=function() {
        let msg = document.querySelector("#message").value;
        alert(msg);
    }
})



document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#red').onclick = function() {
        document.querySelector('#tasks').style.color = 'red';
    }

})

*/
