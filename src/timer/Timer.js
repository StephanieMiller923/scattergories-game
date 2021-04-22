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
                  playGame ();
              } else {
                  setTime (startingTime);
                    setHide (true);
                  setTimeout(() => {
                      alert('TIME IS UP!!!');
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