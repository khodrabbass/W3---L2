import React from 'react';

function App() {
    const click1 = () => {
        alert("You Click me");
    };
     return (
     <div>
            <button onClick={click1}>
                Click Me!
            </button>
        </div>
    );
}
export default App;