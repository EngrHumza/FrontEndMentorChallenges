let numEl=document.getElementById("num")
let nameEl=document.getElementById("nam")
let dateEl=document.getElementById("dat")
let col2El=document.getElementById("col2")
let thankEl=document.getElementById("thankyou")

document.getElementById("submit").addEventListener("click", (e)=> {
    e.preventDefault()
    nameEl.textContent=document.getElementById("Name").value;
    numEl.textContent=document.getElementById("Number").value;
    // dateEl.textContent=document.getElementById("").value;
    col2El.style.display='none';
    thankEl.style.display='block';
});