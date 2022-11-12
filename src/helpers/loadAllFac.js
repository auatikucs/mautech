export const loadAllFac=()=>{
   return fetch('https://new-modibbo-adama.herokuapp.com/admin/get-all-faculties-schools-college')
    .then(res => {
        res.json()
            .then(data => {  
            })
    }).catch(err=>{

    })
}