import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}


// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUSer="amanvermaofficial"

const ReactElement = React.createElement(
    'a',
    {href:"https://google.com",target:'_blank'},
    "Visit Google Hello",
    anotherUSer
)//injected by babbel

ReactDOM.createRoot(document.getElementById('root')).render(
    //every react use a bundler(babble)-bth work,syntax ko sudharna
       <App /> //MyApp() 

    //    ReactElement
)
