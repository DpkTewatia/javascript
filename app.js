
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
    //for of loop
    for(let actor of actors) {
        console.log(actor);
    }

    // to deduct 10 rs using for of loop
    for(let actor of actors) {
        actor.payment=actor.payment-10;
        
    }
    console.log(actors);

//----------------------------------------------------------------------------------------------
    //filter

    const students =[
        {
            firstname:"deepak",
            marks: 82
        },
        {
            firstname:"ravi",
            marks: 23
        },
        {
            firstname:"sanju",
            marks: 95
        },
        {
            firstname:"sunil",
            marks: 35
        }
    ]

    students.filter((student)=>{
        console.log(student);
    })

//----------------------------------------------------------------------------------------------
    // filter failed student marks less than 35
    
    const failed = students.filter((student)=>{
        if (student.marks<=35){
            return true;
        } else{
            return false; 
        }
    });

    console.log(failed);


//----------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------