// console.log('random Ueser')
const loadUser = () => {
    // console.log('load user')
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayUsers(data.results))
}


const displayUsers = users => {
    console.log(users);
    const userContainer = document.getElementById('user-container');
    for(const user of users){
        // console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <h3>Users Name: ${user.name.first} ${user.name.last} ${user.name.title}</h3>
            <p>Users Location: ${user.location.city} ${user.location.country}</p>
            <p>Users Email: ${user.email}</p>
        `;
        userContainer.appendChild(userDiv);
    }
}

loadUser();
