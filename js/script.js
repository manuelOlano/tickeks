const rbtIndividualI = document.getElementById('rbtSolicitudI')
const rbtIndividualP = document.getElementById('rbtSolicitudP')
const button = document.getElementById('button')
const labelindividual = document.getElementById('label_individual')
const labelpartner = document.getElementById('label_partner')
const selectSupervisor = document.getElementById('cboSupervisor')
const selectUsuario = document.getElementById('cboUsuario')
const radioPartner = document.getElementById('rbtSolicitudP')

const limpiarSelectSupv = ()=>{
    const supervisor = document.getElementById('cboSupervisor')
    for(let i=supervisor.length-1; i >= 0; i--){
        
        supervisor.removeChild(supervisor.children[i])
        
    }
}
const limpiarUsuarios = ()=>{
    const itemUsuarios = document.getElementById('cboUsuario')
    for(let i=itemUsuarios.length-1; i > 0; i--){        
        itemUsuarios.removeChild(itemUsuarios.children[i])        
    }
}

const obetenerSupervisor = ()=>{
    
    const data = new FormData();
    data.append('usuario', 'cmier');
    data.append('tipo', 'Individual');
    // data.append('dato3', 'EscuelaIT');
    fetch('nuevo.php', {
       method: 'POST',
       body: data
    })
    .then(res => res.json())
    .then(data => {
        const supervisor = document.getElementById('cboSupervisor')
        // supervisor.removeChild(supervisor.children[0])
        for (const supervisorInfo of data) {
            const option = document.createElement('OPTION')
            option.textContent = `${supervisorInfo.Supervisor}`
            option.setAttribute('value',`${supervisorInfo.Supervisor}`)
            supervisor.appendChild(option)
        }
    })
    .catch(function(err) {
       console.log(err);
    });
}

const listaSupervisor=()=>{
    const data = new FormData();
   
    data.append('tipo', 'partner');
    // data.append('dato3', 'EscuelaIT');
    fetch('nuevo.php', {
       method: 'POST',
       body: data
    })
    .then(res => res.json())
    .then(data => {
        const supervisor = document.getElementById('cboSupervisor')
        // supervisor.removeChild(supervisor.children[0])
        const firts= document.createElement('OPTION')
        firts.textContent='Seleccionar'
        firts.setAttribute('value','-')
        supervisor.appendChild(firts)
        for (const supervisorInfo of data) {
            const option = document.createElement('OPTION')
            option.textContent = `${supervisorInfo.Supervisor}`
            option.setAttribute('value',`${supervisorInfo.Supervisor}`)
            supervisor.appendChild(option)
        }
    })
    .catch(function(err) {
       console.log(err);
    });
}

window.addEventListener('load',()=>{
    rbtIndividualI.checked=true
    rbtIndividualP.checked=false
    // console.log(rbtIndividualP);
    selectSupervisor.disabled=true
    selectUsuario.disabled=true

    // traer datos desde PHP en este caso solo el supervisor
    obetenerSupervisor()
    
})

labelindividual.addEventListener('click',()=>{
    
    rbtIndividualP.checked=false
    // console.log(selectSupervisor);
    selectSupervisor.disabled=true
    selectUsuario.disabled=true
    
    limpiarSelectSupv()
    limpiarUsuarios()
    obetenerSupervisor()
})
radioPartner.addEventListener('click',()=>{
    
    rbtIndividualI.checked=false
    // console.log(rbtIndividualP);
    selectSupervisor.disabled=false
    selectUsuario.disabled=false

    limpiarSelectSupv()
   
    listaSupervisor()
})

const buscaUsuarios = ()=>{
    const supervisor = selectSupervisor.children[selectSupervisor.selectedIndex].value
    const data = new FormData()
    data.append('superv',supervisor)
    data.append('tipo','buscaUser')
    fetch('nuevo.php',{
        method: 'POST',
        body: data
    }).then(res=>res.json())
      .then(data=>{
        const sltdUsuario = document.getElementById('cboUsuario')
        // const usuarios = document.createElement('OPTION')
          if(data.length <= 0){
            const usuarios = document.createElement('OPTION')
            usuarios.textContent='NoExisteDatos'
            sltdUsuario.style.border = '1px solid red'
            sltdUsuario.style.fontSize = '12px'
            sltdUsuario.disabled = true
            usuarios.setAttribute('selected','true')
            sltdUsuario.appendChild(usuarios)
          }else{
              for (const userInfo of data) {
                const usuarios = document.createElement('OPTION')
                  usuarios.textContent = `${userInfo.IdUsuario}`
                  usuarios.setAttribute('value',`${userInfo.IdUsuario}`)
                  sltdUsuario.appendChild(usuarios)
              }
          }
          
      })
}

selectSupervisor.addEventListener('change',()=>{
    limpiarUsuarios()
    buscaUsuarios()
})