import React from 'react'

class Welcome extends React.Component{
    render(){
        const todoList = ['react','redux']
        return(
            <div>
                <h1>hello react</h1>
                <ul>
                    {
                        todoList.map(item=>
                            <li>{item}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
export default Welcome