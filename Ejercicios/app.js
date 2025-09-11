const obtenerUsuarios=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>mostrarUsuarios(data))
        .catch(error=>console.log('Error:',error));
};

const mostrarUsuarios = (users)=>{
    const userUl = document.getElementById('users');
    userUl.innerHTML='';
    users.forEach(user=>{
        const li = document.createElement('li');
        li.textContent = user.name;
        userUl.appendChild(li);
    });
};
obtenerUsuarios();