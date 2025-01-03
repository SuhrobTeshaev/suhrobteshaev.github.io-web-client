// import React from "react";
// import SalonPage from "../salon/Salon";

// interface CardProps {
//   salon: {
//     id: number;
//     avatar: string;
//     name: string;
//     canAcceptBooking: number;
//     category: string;
//     street: string;
//   };
// }

// const Card: React.FC<CardProps> = ({ salon }) => {
//   return (
//   <SalonPage salon={salon} />
//   );
// };

// const LendingPage: React.FC = () => {
//   const cards = [
//     {
//       imageSrc: "https://via.placeholder.com/150",
//       title: 'Студия красоты "Афлюту"',
//       category: "Салон красоты",
//       address: "проспект Рудаки 84 (Чайхана Рохат)",
//       isOnlineBooking: true,
//     },
//     {
//       imageSrc: "https://via.placeholder.com/150",
//       title: 'Барбершоп "Брутальный Барбер"',
//       category: "Барбершоп",
//       address: "проспект Рудаки 84 (Чайхана Рохат)",
//       isOnlineBooking: false,
//     },
//     {
//       imageSrc: "https://via.placeholder.com/150",
//       title: 'Студия красоты "Шик и блеск"',
//       category: "Салон красоты",
//       address: "проспект Рудаки 84 (Чайхана Рохат)",
//       isOnlineBooking: true,
//     },
//     {
//       imageSrc: "https://via.placeholder.com/150",
//       title: 'Студия красоты "Афлюту"',
//       category: "Салон красоты",
//       address: "проспект Рудаки 84 (Чайхана Рохат)",
//       isOnlineBooking: false,
//     },
//     {
//       imageSrc: "https://via.placeholder.com/150",
//       title: 'Барбершоп "Брутальный Барбер"',
//       category: "Барбершоп",
//       address: "проспект Рудаки 84 (Чайхана Рохат)",
//       isOnlineBooking: true,
//     },
//     {
//       imageSrc: "https://via.placeholder.com/150",
//       title: 'Студия красоты "Шик и блеск"',
//       category: "Салон красоты",
//       address: "проспект Рудаки 84 (Чайхана Рохат)",
//       isOnlineBooking: false,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-white shadow-md py-4">
//         <div className="container mx-auto px-4">
//           <h1 className="text-2xl font-bold">Красота и здоровье</h1>
//           <div className="mt-4 flex space-x-4">
//             <button className="px-4 py-2 bg-orange-500 text-white rounded">
//               Все
//             </button>
//             <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
//               Салоны красоты
//             </button>
//             <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
//               Барбершопы
//             </button>
//             <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
//               Парикмахерская
//             </button>
//           </div>
//         </div>
//       </header>
//       <main className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {/* <SalonPage /> */}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default LendingPage;
