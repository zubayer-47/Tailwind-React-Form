import React, { useReducer } from 'react';

const initialState = {
   name: '',
   age: 0,
   email: '',
   password: '',
   error: {}
}

const reducer = (state, action) => {
   switch(action.type) {
      case 'name':
         return {
         ...state,
            name: state.name
         }
      case 'age':
         return {
            ...state,
            age: state.age
         }
      case 'email':
         return {
            ...state,
            email: state.email
         }

      case 'password':
         return {
            ...state,
            password: state.password
         }
      default:
         return {error: state.error}
   }
}

export default function App() {
   const [state, dispatch] = useReducer(reducer, initialState)

   const {name, age, email, password} = state;

   const handleChange = e => {
      dispatch({type: e.target.value})

      console.log(state);
   }

   let output;

   const handleSubmit = e => {
      e.preventDefault();

      const nameValue = e.target[0].value.trim()
      const ageValue = Number(e.target[1].value)
      const emailValue = e.target[2].value.trim().toLowerCase()
      const passwordValue = e.target[3].value.trim()
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const emailRegex = regex.test(emailValue);
      const isAdult = ageValue >= 18
      const isTruePassword = passwordValue.length > 6;

      if (nameValue && emailRegex && isAdult && isTruePassword) {
         output = (
            // <table>
            //    <thead>
            //       <tr>
            //          <th>Name</th>
            //          <th>Age</th>
            //          <th>Email</th>
            //          <th>Password</th>
            //       </tr>
            //    </thead>
            //    <tbody>
            //       <tr>
            //          <td>asdn</td>
            //          <td>jasnd</td>
            //       </tr>
            //    </tbody>
            // </table>

            <div>
               {state.name}
            </div>
         )
      } else {
         console.log("Failed"); 
      }
   
   }

   console.log(state.name);

   return (
       
      <div className='flex justify-center items-center h-screen'>

         <>
            <form className='bg-gray-100/70 p-8 rounded-md' onSubmit={handleSubmit}>
               <h1 className="text-indigo-500 text-2xl block text-center">Registration!</h1>
               <div className="block">
                  <label className='label' htmlFor="name">Name</label>
                  <input className='input' type="text" name="name" id="name" defaultValue={name} onChange={handleChange} autoComplete='off' />
               </div>

               <div className="block">
                  <label className='label' htmlFor="age">Age</label>
                  <input className='input' type="number" name="age" id="age" defaultValue={age} onChange={handleChange} />
               </div>

               <div className="block">
                  <label className='label' htmlFor="name">Email</label>
                  <input className='input' type="text" name="email" id="email" defaultValue={email} onChange={handleChange} autoComplete='off' />
               </div>

               <div className="block">
                  <label className='label' htmlFor="password">Password</label>
                  <input className='input' type="password" name="password" id="password" defaultValue={password} onChange={handleChange} />
               </div>
               <input className="block text-gray-800 cursor-pointer py-2 w-full mt-4 rounded-full bg-gray-200 hover:bg-gray-300 text-lg transition" type="submit" value="Submit" />
            </form>

            <div>
               {state.name || "HJsbd"}
            </div>
         </>

      </div>
   )
}
