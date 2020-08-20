function create_newItem(){
    var add= document.getElementById("item");
    var inputValue = document.getElementById("myInput");
   
    var str = `
        <div class = "content-lign">
            <input  type ="checkbox">
            <p class="writte">${inputValue.value}</p>
            <div class = "button">
                <button type="button" onclick="delete_item(event)">
                <i class="fa fa-trash-o" aria-hidden="true"></i></button>
                <button  type="button" onclick="repair_item(event)">
                <i class="fa fa-pencil" aria-hidden="true"></i></button>
            </div>
        </div>
    `;

    inputValue.value = "";
    
    add.innerHTML+=str;
    
}

function onPress_ENTER()
{
        var keyPressed = event.keyCode || event.which;
        var inputValue = document.getElementById("myInput");
        //if ENTER is pressed
        if(keyPressed==13)
        {
           if( inputValue.value=="")
           {
               alert("You must write something");
           }
           else{
            create_newItem();
           }
        }
        else
        {
            return false;
        }
}
function delete_item(event)
{
   //var d  = document.getElementById("delete_item");
//     d.parentElement.parentElement.remove();
    console.log(event.target);
    var target = event.target;
    
    if(target.tagName== 'I')
    
        {
            target.parentElement.parentElement.parentElement.remove();
        }
        else{
            if(target.tagName =='BUTTON'){
                target.parentElement.parentElement.remove();
            }
        }
}
function repair_item(event)
{
    //var inputValue = document.getElementsByClassName("writte")[].innerHTML;
    //var add = document.getElementById("myInput");
    //debugger
    //add.innerHTML+= inputValue;
    console.log(event.target);

   // var target = event.target;
}

