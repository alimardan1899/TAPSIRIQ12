//1ci tapsiriq

const gs = ["alimardan","university","school"]
function reverseArray(arr){
    return arr.reverse()
}
console.log(reverseArray(gs))

//2.tapsiriq

const barcelona =['Blorgous','Glamyx','Wegord','SpaceKing'];
barcelona.forEach((item)=>{
  console.log("Oh powerfull"+" "+item+" "+"we humans offer our unconditional surrender")
});

//3.tapsiriq

const cule = [
    'gameboys',
    'skateboards',
    'backwards hats',
    'my room',
    'temporary tattoos'
];
const madridista = [
    'sweaters',
    'skateboards',
    'family-night',
    'my room'
];
function atletico (cule,madridista){
    cule.forEach((item)=>{
        madridista.forEach((element)=>{
            if(item==element){
                console.log(item)
            }
        })
    })
}
atletico(cule,madridista)

// 4.tapsiriq

const meal = [
    { name: 'arugula', source: 'plant' },
    { name: 'tomatoes', source: 'plant' },
    { name: 'lemon', source: 'plant' },
    { name: 'olive oil', source: 'plant' },
  ];
  const dinner = [
    { name: 'hamburger', source: 'meat' },
    { name: 'cheese', source: 'dairy' },
    { name: 'ketchup', source: 'plant'},
    { name: 'bun', source: 'plant' }
  ];
  function  isTheDinnerVegan (arr){
    for (let i=0;i < arr.length;i++){
        if(arr[i].source !== 'meat'){
            return false
        }
        else {
            return true
        }
    }
  }
  console.log(isTheDinnerVegan(meal));
  console.log(isTheDinnerVegan(dinner));