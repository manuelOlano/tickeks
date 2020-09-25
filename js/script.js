const rbtIndividualI = document.getElementById('rbtSolicitudI')
const rbtIndividualP = document.getElementById('rbtSolicitudP')
const button = document.getElementById('button')
const labelindividual = document.getElementById('label_individual')
const labelpartner = document.getElementById('label_partner')
const selectSupervisor = document.getElementById('cboSupervisor')
const selectUsuario = document.getElementById('cboUsuario')

button.addEventListener('click',(e)=>{
   e.preventDefault()
   
})

window.addEventListener('load',()=>{
    rbtIndividualI.checked=true
    rbtIndividualP.checked=false
    // console.log(rbtIndividualP);
    selectSupervisor.disabled=true
    selectUsuario.disabled=true
})

labelindividual.addEventListener('click',()=>{
    
    rbtIndividualP.checked=false
    // console.log(selectSupervisor);
    selectSupervisor.disabled=true
    selectUsuario.disabled=true
})
labelpartner.addEventListener('click',()=>{
    
    rbtIndividualI.checked=false
    // console.log(rbtIndividualP);
    selectSupervisor.disabled=false
    selectUsuario.disabled=false
})