import { useEffect, useState } from 'react';
import './Timer.css'


const Timer = ({ setHide }) => {
    const startingTime = 60;
    const [time, setTime] = useState(startingTime);

   const playGame = () => {
       setTime (time - 1);
       setHide (false);
   }

    useEffect(() => {
        if (time !== startingTime){
            setTimeout(() => {
              if(time > 0) {
                  setTime(time - 1);
                //   Code ninside nof the "else" will run when the time has run out (AKA When "time" is equal to zero)
              } else {
                //   Updating the value for the "time" state variable by setting it back to the value for "startingTime" which causes the "Timer" component to re-render and also causes the "useEffect" function to run.
                  setTime (startingTime);
                //   Hides the list iten text/content on all the categories (AKA List Items) by adding the ".hide" CSS class to all of the them
                    setHide (true);
                    // The alert is inside another setTimeout so that it will NOT run/display before the text/content is hidden for the categories (AKA List Items)
                  setTimeout(() => {
                      alert('TIME IS UP!!!');
                    //   After the alert is complete (AKA The user clicks "OK") the categories (AKA List Items) are show again
                      setHide (false);
                  }, 100);
              }  
            }, 1000);
        }
    }, [time]);  

    return(
        <div className='Timer'>
            <div className='Timer-Top'>
                <p>TIMER</p>
                <button onClick={playGame} className='Timer-Top-Btn'>PLAY</button>
            </div>
            <div className='Timer-Display'>
                <h1 className='Timer-Display-H1'>{time}</h1>
            </div>
        </div>
    );
}
export default Timer;