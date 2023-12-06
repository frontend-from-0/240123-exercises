// ## Exercise 9: Multiple Buttons
// Create a component with multiple buttons. Change the background color of the component based on which button is clicked.

export const Ex9 = () => {

    function handleClickYellow () {
        document.getElementById('root').style.backgroundColor = "yellow";
        console.log("Button Clicked!")
    }

    function handleClickRed () {
        document.getElementById('root').style.backgroundColor = "red";
        console.log("Button Clicked!")
    }

    function handleClickBlue () {
        document.getElementById('root').style.backgroundColor = "blue";
        console.log("Button Clicked!")
    }

    function handleClickGreen () {
        document.getElementById('root').style.backgroundColor = "green";
        console.log("Button Clicked!")
    }

    function handleClickOriginal () {
        document.getElementById('root').style.backgroundColor = "white";
        console.log("Button Clicked!")
    }

    return (
        <div>
            <button onClick={handleClickYellow} style = {{backgroundColor:'yellow'}}>Yellow Background</button>
            <button onClick={handleClickRed} style = {{backgroundColor:'red'}}>Red Background</button>
            <button onClick={handleClickBlue} style = {{backgroundColor:'blue', color: 'white'}}>Blue Background</button>
            <button onClick={handleClickGreen} style = {{backgroundColor:'green'}}>Green Background</button>
            <button onClick={handleClickOriginal}>Original Background</button>
        </div>
    )
};