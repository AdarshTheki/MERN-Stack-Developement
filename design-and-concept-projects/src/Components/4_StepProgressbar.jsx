/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function StepProgressbar({ activeStep, setActiveStep, steps = [] }) {
    function handlePreviousStep() {
        setActiveStep((prev) => Math.max(prev - 1, 0));
    }

    function handleNextStep() {
        setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    }

    const styles = {
        width: `${(100 / steps.length - 1) * activeStep}%`,
    };

    return (
        <div>
            <div className='steps-progress'>
                {steps.map((item, index) => (
                    <div
                        key={item}
                        className={`step ${index === activeStep ? 'active' : ''} ${
                            index < activeStep ? 'completed' : ''
                        }`}>
                        {item} {index < activeStep ? '✔' : '✘'}
                    </div>
                ))}
            </div>
            <div style={styles} className='step-line'></div>
            <button disabled={activeStep === 0} onClick={handlePreviousStep}>
                Previous Step
            </button>
            <button disabled={activeStep === steps.length - 1} onClick={handleNextStep}>
                Next Step
            </button>
        </div>
    );
}

export default function StepProgressbarTest() {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['step1', 'step2', 'step3', 'step4', 'step5'];
    return (
        <div className='step-progressbar'>
            <StepProgressbar steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>
    );
}
