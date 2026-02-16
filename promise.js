// const promiseone = new Promise((resolve, reject) =>{
//     const age = 18
//     if(age > 15){
//         async function result(){
//            const val = await fetch('https://api.github.com/users/hiteshchoudhary')
//            return val
//         }
//         resolve(result())
//     }
//     reject('i am rejected')
// })

// promiseone
//         .then((result) => {
//             return result.json()
//         })
//         .then((res) => {
//             console.log(res.followers)
//         })
//         .catch((value) => console.log(value))

// function Car(name, release){
//     this.name = name
//     this.release = release
// }

// Car.prototype.speed = function(){
//     console.log(`${this.name} is very fast!!`)
// }

// const farari = new Car('farari', 1920);

// farari.speed()


// const title = 'Kanojyo to Himitsu to Koimoyou';
// const baseUrl = 'https://api.mangadex.org';
// async function data(){
//     let resp = await fetch(`${baseUrl}/manga`,{
//         method: 'GET'
//     })
//     resp = await resp.json()
//     console.log(resp.data[0].attributes);
// };

// data();


const title = "Mahouka Koukou no Rettousei: Yoru no Tobari ni Yami wa Hirameku";
const baseUrl = "https://api.mangadex.org";

async function data(){
    const url = new URL(`${baseUrl}/manga`)
    url.searchParams.append("id", title);

    const resp = await fetch(url);
    const data = await resp.json();

    console.log(data)
}
data()
// const val = data()
// console.log(val)