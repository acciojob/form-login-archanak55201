const button=document.querySelector("input[name=submit]");

function getFormvalue() {
    const fname=document.getElementsByTagName("input");
   
	alert(fname[0].value+" "+fname[1].value);

} 


button.addEventListener("click",getFormvalue());
