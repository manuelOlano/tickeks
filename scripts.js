const button = document.getElementById('button')
const user = document.getElementById('obsv-texto')

button.addEventListener('click',()=>{
    
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
        for (const supervisorInfo of data) {
            const option = document.createElement('OPTION')
            option.textContent = `${supervisorInfo.Supervisor}`
            supervisor.appendChild(option)
        }
    })
    .catch(function(err) {
       console.log(err);
    });
    
 })