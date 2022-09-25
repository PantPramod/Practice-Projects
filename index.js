// Write a function to check wheather an input is string or not.


function checkIsString(enteredInput){
    console.log(Object.prototype.toString.call(enteredInput))
    console.log(typeof enteredInput)
    return Object.prototype.toString.call(enteredInput) === '[object String]'?true:false  
    
}


// console.log(checkIsString("asdf"))
// console.log( checkIsString(12))
// console.log( checkIsString(true))
// console.log(checkIsString([1234, 2345]))

// console.log(checkIsString(checkIsString()))


// Write a javascript function to split a string and convert in into an array of words.

function stringToArray(str){
   return str.split(' ')
}


// console.log(stringToArray("my name is pramod"))


//Write a JavaScript function to extract a specified number of characters from a string

function getNcharacter(str, n){
    if(typeof str=== "string"){
        console.log(str.substr(0,n))
    }
    
}

// getNcharacter("asdssfdfdf", 10)



//Write a JavaScript function to convert a string in abbreviated form


function convertToAbbreviatedForm(str){
          
   const arrOfWords= str.split(' ')
   
   if(arrOfWords.length===1){
    return str
   }
   
   for(let i=1; i<arrOfWords.length; i++){
     
        arrOfWords[i] = `${arrOfWords[i][0]}.`
      
   }
   return arrOfWords.join(" ")
}

// console.log(convertToAbbreviatedForm("Bhupesh"))


//Write a JavaScript function to hide email addresses to protect from unauthorized user


const protectEmail=(email)=>{
        
  console.log(`${email.slice(0, email.indexOf('@')/2)}...${email.slice(email.indexOf('@'))}`)
//   console.log(email.slice(email.indexOf('@')))     
}


// protectEmail("pramod@gmail.com")


// Write a JavaScript function to parameterize a string.


function parameterizedString(str){
//   return    str.toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-"); 
 return  str.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-")
}


// console.log(parameterizedString("Hello @How Are You"))

//Write a JavaScript function to capitalize the first letter of a string.


function capatilizeFirstLetterofAllWords(str){
    const arrOfWords = str.split(' ');
     return    arrOfWords.map((word)=> word[0].toUpperCase()+ word.slice(1)).join(' ')

}

// console.log(capatilizeFirstLetterofAllWords("my name is pramod"))

//Write a JavaScript function to check whether an `input` is an array or not

function checkIsArray(input){
    
    return toString.call(input)==="[object Array]"

}

let a= checkIsArray({})

// console.log(a)

//Write a JavaScript function to clone an array

function cloneArray(input){
     return JSON.parse(JSON.stringify(input)) ;
     
}

// console.log(cloneArray(["A", "B", "C", "D"])) 


//Write a JavaScript function to get the first element of an array. 
//Passing a parameter 'n' will return the first 'n' elements of the array.

const getElement=(arr, n)=>{
    if(n<0){
        return []
    }
    return n===undefined?arr[0]===undefined?"empty arr":arr[0]:arr.slice(0,n)
}

// console.log(getElement([1,2 ,3 ,4,5,6,7],-5))





//Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

const getLastElements=(arr, n)=>{
  if(n===undefined) return arr[arr.length-1]
  
  else return arr.slice(-n)
}

// console.log(getLastElements([1,2,3,4,5,6], 10))



// Write a simple JavaScript program to join all elements of the following array into a string.

//Sample array : myColor = ["Red", "Green", "White", "Black"];

function joinArrayIntoString(arr){
        return arr.join(' ')   
}

// console.log(joinArrayIntoString(["My", "name", "is", "Pramod"]))


//Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

function insertDashesBetweenEvenNumbers(input){
   const arr= input.split('')
   console.log(arr)
   const length= arr.length
   for(let i=0; i<length; i++){
      if(+arr[i]%2== +arr[i+1]%2){
        arr[i]=arr[i]+"-"
      }
   }
   console.log(arr.join(''))
}

// insertDashesBetweenEvenNumbers("0254681352689")

//Write a JavaScript program to sort the items of an array

function sortItemsOfArray(){
   
    

}



// console.log(arr2);

//Write a JavaScript program to find the most frequent item of an array.

const newArr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const list={}
for(let i=0; i<newArr.length; i++){
    if(list[newArr[i]]==undefined){
        list[newArr[i]] =1
    }else{
        list[newArr[i]] = list[newArr[i]]+1 
    }
           
}

// console.log(list)

// console.log(Object.values(list))
let maxx= Object.values(list)[0]
let indexofmax;
for(let i=0; i<Object.values(list).length; i++){
    if(Object.values(list)[i]> maxx)
    maxx=Object.values(list)[i]
    indexofmax=i
}


// console.log(Object.keys(list)[indexofmax] ,maxx +" times")


//Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

function swapCase(str){
    const cv=[]
    for(let i=0; i<str.length; i++){
        // console.log("===>",str[i].charCodeAt(0))
        if(str[i].charCodeAt(0)>=65 && str[i].charCodeAt(0)<=90){
            cv.push(str[i].toLowerCase())
        }else if(str[i].charCodeAt(0)>=97 && str[i].charCodeAt(0)<=122){
            cv.push(str[i].toUpperCase())
        }else{
            cv.push(str[i])
        }
    
    }
    return cv.join('')
}



// console.log(swapCase('The Quick Brown Fox'))

