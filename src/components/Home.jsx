import { useState } from "react";
import Stepper from "./Stepper";

const Home = ( ) => {
    const [tCount, setTCount] = useState([1]);
    const [currCount, setCurrCount] = useState(1);

    const addTextBox = () => {
        // let data = tCount; 
        // data.push(currCount + 1)
        const data = [1, 2, 3, 1];
        let uniqueData = new Array();
        new Set(data).forEach(item => uniqueData.push(item))
        console.log("uniqueData: ", uniqueData);
        setCurrCount(prev => prev + 1); 
        setTCount([...tCount, currCount + 1]);
    }

    const removeTextBox = () => {
        setCurrCount(prev => prev - 1);
        setTCount([...tCount.slice(0, -1)]);
    }

    const clearTextBox = () => {
        setCurrCount(1);
        setTCount([1]);
    }

    return (
        <div>
            <h4>Home Page</h4>
            {
                tCount.map((item)=> {
                    return (
                        <div key={item}>
                            <textarea></textarea>
                        </div>
                    )
                })
            }
            <button onClick={addTextBox}>Add Text Box</button>
            <button onClick={removeTextBox}>Remove Text Box</button>
            <button onClick={clearTextBox}>Clear</button>
            <div className="stepper-wrapper">
                <Stepper />
            </div>
        </div>
    )

}

export default Home;