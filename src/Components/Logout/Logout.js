// import React, { useEffect } from 'react'
// import { onAuthStateChanged, signOut } from "firebase/auth"
// import { auth } from '../../Data/main'
// export default function Logout() {

//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             console.log('user', user)
//             // const usersec = document.getElementsByClassName('prfile');
//             if (user) {
//                 // usersec.innerHTML = `
//                 // <P> hell ${user.email}</p>
//                 // <btton className ="logout"> logout</button>
//                 // `
//                 alert('dina')
//             }
//             else {
//                 // usersec.innerHTML = ``
//                 alert('ahmed')
//             }

//         })

//     }, [])

//     const handleLogout = async () => {
//         try {
//             await signOut(auth)
//             console.log('user logout')
//         } catch (error) {
//             console.log(error.massage)
//         }
//     }


//     return (
//         <div>
//             <div className='prfile'>
//                 <button className='logout' onClick={handleLogout} > logout</button>
//             </div>
//         </div>
//     )
// }










