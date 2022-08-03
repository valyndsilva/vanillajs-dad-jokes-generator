// https://icanhazdadjoke.com/api
// Use Fetch API, make an HTTP Request to a 3rd paty API to get dad jokes.
// Axios is preffered over fetch API. But Fetch API is built into the browser and doesn't require any additional installs or cdn.
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);
generateJoke();

// // Using .then():
// function generateJoke(){
//     const config = {
//         headers:{
//             "Accept":"application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config) 
//     .then((res) => res.json())
//     // .then((data) => console.log(data))
//     .then((data) => {
//         jokeEl.innerHTML = data.joke; // data is the Object
//     })
// }

// Using Async/Await:
    async function generateJoke(){
    const config = {
        headers:{
            "Accept":"application/json"
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config) //ufetch returns a promise so use await
    const data = await res.json(); // res.json returns a promise so we need to await
    jokeEl.innerHTML = data.joke; // data is the Object
    
}