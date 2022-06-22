const input=document.getElementById('name');
function results()
{
  if (input.value==="") 
  {
  alert("Please enter your name!");  
  }
  else
  {
    document.getElementById('final').innerHTML='Hello '+input.value+ ' ,welcome to the bootcamp!';
  }
}