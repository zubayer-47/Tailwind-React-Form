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
            name: action.value.trim()
         }
      case 'age':
         return {
            ...state,

            age: action.value
         }
      case 'email':
         return {
            ...state,

            email: action.value.trim().toLowerCase()
         }

      case 'password':
         return {
            ...state,

            password: action.value.trim()
         }
      default:
         return {error: state.error}
   }
}


export default function App() {
   const [state, dispatch] = useReducer(reducer, initialState)

   // const [userData, setUserData] = useState([]);
   // const [isData, setIsData] = useState(false)

   const {name, age, email, password} = state;

   const handleChange = e => {
      dispatch({ type: e.target.name, value: e.target.value })
   }

   const handleSubmit = e => {
      e.preventDefault();
      
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const emailRegex = regex.test(email);
      const isAdult = Number(age) >= 18
      const isTruePassword = String(password).length > 6;
      
      if (name && emailRegex && isAdult && isTruePassword) {
         console.log(state); 
      } else {
         console.log("Failed"); 
      }
      
   }

   return (
       
      <div className='grid place-items-center min-h-screen'>
            <form className='bg-gray-100/70 p-8 rounded-md shadow-md' onSubmit={handleSubmit}>
               <h1 className="text-indigo-500 text-2xl block text-center">Registration!</h1>
               <div className="block">
                  <label className='label' htmlFor="name">Name</label>
                  <input className='input' type="text" name="name" id="name" value={name} onChange={handleChange} />
               </div>

               <div className="block">
                  <label className='label' htmlFor="age">Age</label>
                  <input className='input' type="number" name="age" id="age" value={age} onChange={handleChange} />
               </div>

               <div className="block">
                  <label className='label' htmlFor="name">Email</label>
                  <input className='input' type="text" name="email" id="email" value={email} onChange={handleChange} />
               </div>

               <div className="block">
                  <label className='label' htmlFor="password">Password</label>
                  <input className='input' type="password" name="password" id="password" value={password} onChange={handleChange} />
               </div>
               <input className="block text-gray-800 cursor-pointer py-2 w-full mt-4 rounded-full bg-gray-200 hover:bg-gray-300 text-lg transition" type="submit" value="Submit" />
            </form>

         <table className=' border bg-gray-100/70 shadow-md w-[40rem]'>
            <thead className='bg-gray-300 text-gray-800 hover:bg-gray-300/70 select-none'>
               <tr className=''>
                  <th className='border-r'>Name</th>
                  <th className='border-r'>Age</th>
                  <th className='border-r'>Email</th>
               </tr>
            </thead>
            <tbody className='text-center'>
               <tr>
                  <td className='border-r'>{name}</td>
                  <td className='border-r'>{age}</td>
                  <td className='border-r'>{email}</td>
               </tr>
            </tbody>
         </table>

      </div>
   )
}