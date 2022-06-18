import Typewriter from "typewriter-effect";
import '../styles/app.css';


function TypewriterMod(props){
    return (
        <div className="nav-greeting">
            <Typewriter options={{loop: true}}
                onInit={(typewriter) =>
                    {
                        typewriter
                        .typeString(props.msg1)
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(props.msg2)
                        .pauseFor(2000)
                        .deleteAll()
                        .start();
                    }   
                }

                
            />
        </div>
    )
}

export {TypewriterMod};