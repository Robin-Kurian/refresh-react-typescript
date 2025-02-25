import React, { useRef } from 'react'

const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleBlur = () => {
    if (inputRef.current) {
        console.log(inputRef.current.value);
    }
  }
  return (
    <section>
      <h1>Using uncontrolled inputs: useRef</h1>
      <input type="text" onBlur={handleBlur} ref={inputRef} />
    </section>
  );
}

export default UncontrolledInput