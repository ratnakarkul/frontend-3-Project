let chn=document.getElementById("change");
let newpass=document.getElementById("new");
    
let opass;
    let sam=document.getElementById("matchuser");
   
      let msg=document.createElement("div");
let body=document.getElementById("source");
body.append(msg);
let data = JSON.parse(localStorage.getItem('data'));
let old1=document.getElementById("old");

var not=0;
    function same()
    {


       
        let pass1=old1.value;
       
    let count=0;
   data.forEach(element => {
       

      if(element!=null)
      {
       if(element.password==pass1)
       {
           msg.innerHTML="now change";
  msg.style.color="blue";count=1;
  opass=old1.value;
  old1.value="";
       }
    } 

     })

     if(count===0)
     {
         msg.innerHTML="password match failed";;
         msg.style.color="blue";
     }

      
    }

function correct()
{
    let npass=newpass.value;

    let pass1=opass;
   

let div=document.createElement("div");
body.append(div);
let count=0;
data.forEach(item => {
   

  if(item!=null)
  {
   if(item.password==pass1)
   {
       item.password=npass;

    div.innerHTML="changed";
    div.style.color="red";
    newpass.value="";
   }
} 

 })



 




}


chn.addEventListener("click",correct);
sam.addEventListener("click",same);
