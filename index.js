let name = prompt('What is your name?')
let userName = ['ramiz', 'amin', 'jaxongir', 'kamran', 'bob', 'jordan']

if(userName.includes(name)) {
    let idx = userName.indexOf(name);

        userName.splice(idx, 1)
        alert(`Имя '${name}' удалено из списка.`);
console.log(userName);
} else {
    alert(`Имя '${name}' не найдено в списке.`);

}