
// const laptop = {
//     model: "xxx",
//     color: "silver & black"
// }
// console.log(laptop.color);

// let language="javascript";
// document.write(language);
// console.log(language);


//array and loops----------------------------------------------------------------------------------------------------------------


const actors = [ 
    {     
    name: 'actor 1',
    payment: 100
    },
    {     
    name: 'actor 2',
    payment: 150
    } ,
    {     
    name: 'actor 3', 
    payment: 200
    }
];

for(let i=0; i<actors.length; i++){
    console.log(actors[i])

    console.log(actors.length); 
}
console.log(actors.length); 

//----------------------------------------------------------------------------------------------
    //function to deduct 10 rs fromo all actors
    
    for(let i=0; i<actors.length; i++){
        actors[i].payment=actors[i].payment -10;   //overacting k 10 rs kaat liye
    }    
    console.log(actors);
//----------------------------------------------------------------------------------------------
    //for each loop

    actors.forEach((actor)=> {
        console.log(actor);

    })

//to deduct 10 rs using for each loop
    actors.forEach((actor)=> {
       actor.payment=actor.payment-10;
    })
console.log(actors);


//----------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------