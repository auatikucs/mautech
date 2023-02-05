export const loadAllFac=()=>{
   return fetch('https://mau-web-server.fly.dev/admin/get-all-faculties-schools-college')
    .then(res => {
        res.json()
            .then(data => {  
            })
    }).catch(err=>{

    })
}