import "./ProgressLayout.css";
import { useState } from "react";

function ProgressLayout({ steps, stepIndex }) {
    return (
        <div className="progress">
            <div className="progress-view">
                <ol>
                    {
                        steps.map((step, index) => {
                            return (
                                <li key={step.name} className={stepIndex === index ? "section-categories" : "section-categories invisible"}>
                                    {`${index + 1}. ${step.name}`}
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
            <main>
                {steps[stepIndex].view}
            </main>
        </div>
    )
}

export default ProgressLayout;