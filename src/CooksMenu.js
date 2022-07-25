// import * as React from 'react';
import { Card, CardContent } from '@mui/material';
import { Title } from 'react-admin';

// const CooksMenu = () => (
//   <Card
//     sx={{
//       mt: 3,
//       ml: 1,
//       mr: 1,
//       boxShadow: 3,
//       borderRadius: 2,
//     }}
//   >
//     <Title title="CooksMenu" />
//     <CardContent>Menu</CardContent>
//   </Card>
// );

// export default CooksMenu;

// import React, { useState, useEffect } from 'react';

// // import firebase from 'firebase';
// import firebase from 'firebase/compat/app';

// const firebaseConfig1 = {
//   apiKey: 'AIzaSyDQXMsyejsUgPj-1ZPIyL9YMKdhZ280Mwo',
//   authDomain: 'cinema-schedule-7bfa4.firebaseapp.com',
//   databaseURL: 'https://cinema-schedule-7bfa4.firebaseio.com',
//   projectId: 'cinema-schedule-7bfa4',
//   storageBucket: 'cinema-schedule-7bfa4.appspot.com',
//   messagingSenderId: '215540682675',
//   appId: '1:215540682675:web:6e6e792cb9f041ae8e05c6',
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig1);
// const database = firebase.firestore();

const CooksMenu = () => {
//   const [cinemas, setCinemas] = useState([]);
//   const [selectedCinema, setSelectedCinema] = useState();
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState();

//   const selectCinema = (cinema) => {
//     setSelectedCinema(cinema);
//     database
//       .collection('cinemas')
//       .doc(cinema.id)
//       .collection('movies')
//       .get()
//       .then((response) => {
//         const fetchedMovies = [];
//         response.forEach((document) => {
//           const fetchedMovie = {
//             id: document.id,
//             ...document.data(),
//           };
//           fetchedMovies.push(fetchedMovie);
//         });
//         setMovies(fetchedMovies);
//       })
//       .catch((error) => {
//         setError(error);
//       });
//   };

//   const timestampToString = (timestamp) => {
//     return Date(timestamp).toString();
//   };

//   useEffect(() => {
//     database
//       .collection('cinemas')
//       .get()
//       .then((response) => {
//         const fetchedCinemas = [];
//         response.docs.forEach((document) => {
//           const fetchedCinema = {
//             id: document.id,
//             ...document.data(),
//           };
//           fetchedCinemas.push(fetchedCinema);
//         });
//         setCinemas(fetchedCinemas);
//       })
//       .catch((error) => {
//         setError(error);
//       });
//   }, []);

//   return (
//     <div>
//       {error ? <p>Ops, there is an error :(</p> : null}
//       <ul>
//         {cinemas.map((cinema) => (
//           <li key={cinema.id} onClick={() => selectCinema(cinema)}>
//             <b>{cinema.name}</b> in {cinema.city} has {cinema.total_seats} total
//             seats
//           </li>
//         ))}
//       </ul>
//       {selectedCinema ? (
//         <ul>
//           {movies.map((movie) => (
//             <li key={movie.id}>
//               <b>{movie.name}</b> | {movie.genre} | {movie.runtime} |{' '}
//               {timestampToString(movie.release_date)}
//             </li>
//           ))}
//         </ul>
//       ) : null}
//     </div>
//   );
};

export default CooksMenu;
