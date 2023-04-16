
const handleSubmit = (e) => {
   console.log(e);
   
   const container = document.querySelector('.container');
   container.style.display= 'none';

   const nextContainer = document.querySelector('.nextContainer');
   nextContainer.style.display= 'flex';

   document.getElementById('select').innerHTML = `${e}`
  
}


