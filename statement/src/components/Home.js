import React from 'react'
import { useForm } from 'react-hook-form';
function Home() {
    const [inputValue, setInputValue] = React.useState("");

      const onChangeHandler = event => {
        setInputValue(event.target.value);
      };
  return (
    <div background="https://wallpaperaccess.com/full/1143632.jpg">
        
        <div className='register'>
            <label for="username">Username:</label>
            <input
            type="text"
            id="username"
            name="username"
            onChange={onChangeHandler}
            value={inputValue}
            placeholder="Any unique name"
            />
        </div>
        <div className='register'>
            <label for="name">Name:</label>
            <input
            type="text"
            id="name"
            name="name"
            onChange={onChangeHandler}
            value={inputValue}
            placeholder="Enter your name"
            />
        </div>
        <div className='register'>
            <label for="username">DOB:</label>
            <input
            type="Date"
            id="DOB"
            name="DOB"
            onChange={onChangeHandler}
            value={inputValue}
            placeholder="Any unique name"
            />
        </div>
        <div className='register'>
        <p>Enter your age:</p>
        <input
        type="text"
        name="age"
        onChange={onChangeHandler}
        value={inputValue}
      />
        </div>
        <div className='register'>
        <p>Enter your email:</p>
        <input
        type="text"
        name="email"
        onChange={onChangeHandler}
        value={inputValue}
      />
        </div>
        <div className='register'>
        <p>Mobile:</p>
        <input
        type="text"
        name="mobile"
        onChange={onChangeHandler}
        value={inputValue}
      />
        </div>
        <div className='register'>
        <p>Social Security:</p>
        <input
        type="text"
        name="aadhar"
        onChange={onChangeHandler}
        value={inputValue}
      />
        </div>
        <div className='register'>
        <p>Address:</p>
        <input
        type="text"
        name="mobile"
        onChange={onChangeHandler}
        value={inputValue}
      />
        </div>
    </div>
  )
}

export default Home