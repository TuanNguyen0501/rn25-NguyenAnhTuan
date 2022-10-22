import React, { useState } from "react";

interface IForms {}

function Form(props: IForms) {
  const [text, setText] = useState("");
  const [check, setIsChecked] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault;
    console.log(text, check);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  const handleOnChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setIsChecked(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Save in value */}
        <input type="text" onChange={handleOnChange} value={text} />
        <input type="password" name="" id="" />
        {/* Save in checked */}
        <input
          type="checkbox"
          name="checkbox1"
          onChange={handleOnChange2}
          value={check}
        />
        <input
          type="checkbox"
          name="checkbox1"
          onChange={handleOnChange2}
          value={check}
        />
        <input
          type="checkbox"
          name="checkbox1"
          onChange={handleOnChange2}
          value={check}
        />
        <input
          type="radio"
          name="radio1"
          onChange={handleOnChange2}
          value={check}
        />
        <input
          type="radio"
          name="radio1"
          onChange={handleOnChange2}
          value={check}
        />
        <input
          type="radio"
          name="radio1"
          onChange={handleOnChange2}
          value={check}
        />
        <input type="submit" />
      </form>
    </>
  );
}

export default Form;
