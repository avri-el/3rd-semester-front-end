// 1. PROMISE
//a.
function helloWorld(){
    return new Promise((resolve) =>{
setTimeout(() => {
    resolve("Hello World!");
    },2000);
});
};
//b.
async function messages(){
    let msg= await helloWorld();
    console.log(msg)
}
//c.
messages();

// 2. FETCH
//a.
async function ambilDataUser2() {
    try {
        let response = await fetch("https://reqres.in/api/users")
        let users = await response.json()
        users.data.forEach((user) => {
            console.log(user.email)
        })
    } catch (error) {
        console.error(error)
    }
}

ambilDataUser2()

//ASYNC AWAIT
//a
async function ambilDataUserAs() {
    try {
        const response = await fetch('https://reqres.in/api/users');
        const users = await response.json();

        users.data.forEach((user) => {
            console.log(user.email);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

ambilDataUserAs();

//AXIOS
//a
async function ambilDataUserAx() {
    try {
        const response = await axios.get('https://reqres.in/api/users');
        const users = response.data;

        users.data.forEach((user) => {
            console.log(user.email);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

ambilDataUserAx();