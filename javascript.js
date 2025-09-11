function obtenerPosts(){
    return new Promise((resolve, reject)=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            if(!response.ok){
                throw new Error("Error en la llamda a la API");
            }
            return response.json();
        })
        .then(data=>resolve(data))
        .catch(error=>reject(error));
    });
}

obtenerPosts()
    .then(posts => {
        console.log('Posts Obtenidos:', posts);
    })
    .catch(error=>{
        console.log('Error: ', error);
    })