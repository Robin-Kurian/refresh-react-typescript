import React, { useState } from 'react'

const ControlledInput = () => {
    const [value, setValue] = useState('')
    return (
        <section>
            <h1>Using controlled inputs: useState</h1>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </section>
    );
}

export default ControlledInput