
const AddButton = document.querySelector("#addbutton")
const InputBox = document.querySelector("input")
const MyUl = document.querySelector("ul")


//Logic to continuosly check whether something is present in the
// input box or not

emptyCheckLogic()

function emptyCheckLogic()
{
    if(InputBox.value === "")
    {
        AddButton.setAttribute("disabled", true)
    }
    else
    {
        AddButton.removeAttribute("disabled")
    }
}

InputBox.addEventListener("input", function()
{
    emptyCheckLogic()
})


function Deletedata(myLi , DeleteButton)
{
    DeleteButton.addEventListener("click", function()
    {
        //Logic to delete the entire li
       myLi.remove()
    })
}


function complete(completebutton)
{
    completebutton.addEventListener('click' , function()
{
    completebutton.style.color = "green"
})
}

function editdata(myLi , enteredTask , Editbutton)
{
    
Editbutton.addEventListener("click" , function()
{

      
    myLi.innerHTML = `<input id="changeditem" type ="text"/><i class="fa-solid fa-check" id="saveanswer"></i><i class="fa-solid fa-xmark" id='ignore'></i>`

    const Savebutton = myLi.querySelector('#saveanswer')

    const changedbox = myLi.querySelector('#changeditem')

    const dontsave = myLi.querySelector('#ignore')

   
    dontsave.addEventListener('click' , function()
    {
        myLi.innerHTML = `${enteredTask} <i style="margin-left: 10px;" class="fa-solid fa-pen-to-square" id ="edit"></i><i style="margin-left: 10px;" class="fa-solid fa-trash" id="deletebutton"></i><i style="margin-left: 10px;" class="fa-solid fa-check" id="completed"></i>`

MyUl.appendChild(myLi)

const Editbutton  = myLi.querySelector('#edit')

editdata(myLi , enteredTask , Editbutton)


const DeleteButton = myLi.querySelector("#deletebutton")

Deletedata(myLi , DeleteButton)

const completebutton = myLi.querySelector("#completed")

complete(completebutton)


    })
    




    Savebutton.addEventListener("click" , function()
    {
        const data = changedbox.value

        // console.log(data)
            
            myLi.innerHTML = `${data}<i style="margin-left: 10px;" class="fa-solid fa-pen-to-square" id ="edit"></i><i style="margin-left: 10px;" class="fa-solid fa-trash" id="deletebutton"></i><i style="margin-left: 10px;" class="fa-solid fa-check" id="completed"></i>`
            MyUl.appendChild(myLi)

            const Editbutton  = myLi.querySelector('#edit')

editdata(myLi , enteredTask , Editbutton)


            const DeleteButton = myLi.querySelector("#deletebutton")
             
            Deletedata(myLi,DeleteButton)

            const completebutton = myLi.querySelector("#completed")

complete(completebutton)
            


    })


    
})
}


AddButton.addEventListener("click", function()
{
        

        let enteredTask = InputBox.value

        let myLi = document.createElement("li")//<li></li>
        myLi.innerHTML = `${enteredTask}<i style="margin-left: 10px;" class="fa-solid fa-pen-to-square" id ="edit"></i><i style="margin-left: 10px;" class="fa-solid fa-trash" id="deletebutton"></i><i style="margin-left: 10px;" class="fa-solid fa-check" id="completed"></i>`
    
        MyUl.appendChild(myLi)
    
        InputBox.value = ""

        emptyCheckLogic()

        
const Editbutton  = myLi.querySelector('#edit')

editdata(myLi , enteredTask , Editbutton)


const DeleteButton = myLi.querySelector("#deletebutton")

        Deletedata(myLi , DeleteButton)
       
const completebutton = myLi.querySelector("#completed")

complete(completebutton)


       

})

{/* <li> Playing <button>Delete</button> </li> */}

