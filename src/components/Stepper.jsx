import { Fragment, useState } from 'react'


const Stepper = () => {
    const [steps, setSteps] = useState(['Customer Info', 'Shopping Info', 'Payment', 'Delievered']);
    const [activeStep, setActiveStep] = useState(0);
    const [widthData, setWidthData] = useState(0);

    const nextStep = () => {
        setActiveStep(activeStep + 1);
        setWidthData((prev) => prev + 190);
    }

    return (
        <div className='steppers'>
            <h4>Stepper</h4>
            <div className='stepper-container'>
                {
                    steps.map((step, index) => {
                        return (
                            <Fragment key={step}>
                                <div className='stepper-display'>
                                    <div className={`stepText
                                    ${activeStep > index && ' stepper-completed'}`}>
                                        <span>{activeStep > index ? '✔' : index + 1 }</span>
                                    </div>
                                    <div className='stepNumber'>{step}</div>   
                                </div>
                            </Fragment>
                        )
                    })
                }
                <div className='stepper-line'>
                    <div style={{
                        width: `${widthData}px`,
                    }} className='stepper-line-active'></div>
                </div>
            </div>
            <div className='stepper-btn-wrapper'>
                <button onClick={nextStep} disabled={activeStep >= steps.length}>
                    {activeStep < steps.length - 1 ? 'Next' : 'Complete'}
                </button>  
            </div>
              
        </div>
    )
}


export default Stepper;