// import hooks useState, useRef
import { useState, useRef } from 'react'
import './Todo.css'

// Create a functional component which is stateless (function based) 
// The other type is stateful component which is class based. 
// React uses functional components which are easier syntax


const Todo = () => {
    // add useRef hook to add functionality to input field
    // stores the reference to the input field in input variable
    const input = useRef()

    const buttonId = useRef()

    // useState() is a React hook
    // state is a way to have default values rendered for how screen loads
    const [state, setState]= useState([
        {name: 'hello', id: `hello${Math.random() * 5}`},
        {name: 'goodbye', id: `goodbye${Math.random() * 5}`}
    ])

    // 
    const handleSubmit = (e) => {
        e.preventDefault()
        const value = input.current.value
        // in vanilla js we would use event.target.value to get the value from the input field
        // console.log(value) and type in hello in input, console shows hello. click add, shows 2 hello, 3 hello, etc

        // add something to the array by changing the prev state with a new input value & unique new id
        setState(prevState => [...prevState, {name: value, id: `${value}-${Math.random() * 5}`}])
        //refresh input box to make it empty after item is added
        input.current.value = ''

    }


    const removeItem = (event) => {
        console.log(buttonId.current.value)
        const newState = state.filter(item => item.id !== event.target.value)
        setState(newState)

    }

    // loop through the objects in useState above
    const list = state.map(item=> {
        return (
            <li key={item.id}>
                <p>{item.name}</p>
                <button onClick= {(e)=> removeItem(e)} value={item.id} ref={buttonId}>X</button>
            </li>
        )
    })

    // Generate an input field and a Button that says 'Add'
    // Generate a <ul> area that shows the items from useState, which have been looped through and stored in the list variable above
    // Add functionality to the input and buttons
    // React forms come with onSubmit prop which is triggered with click or enter
    return (
    <section>
        
        <form onSubmit={handleSubmit}>
            <input type='text' ref= {input}/>
            <button type ='submit'>
                Add 
            </button>
        </form>
        <div>
            <ul>
                {list}
            </ul>
            
        </div>
    </section>
    )

}

export default Todo;