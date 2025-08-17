// import service1 from '../assets/componets-bg/ourservice1.png';
// import service2 from '../assets/componets-bg/ourservice2.png';
// import service3 from '../assets/componets-bg/ourservice3.png';
// import service4 from '../assets/componets-bg/ourservice4.png';
// import service5 from '../assets/componets-bg/ourservice5.png';
// import service6 from '../assets/componets-bg/ourservice6.png';
// import service7 from '../assets/componets-bg/ourservice7.png';
// import service8 from '../assets/componets-bg/ourservice8.png';

// export default function ServicesSection() {
//   return (
//     <section className='relative z-30 pt-16'>
//       <div className='text-center py-16 px-8'>
//         <h1 className='font-bebas text-6xl pt-28 text-app-white'>
//           Where Precision Isn't a Feature 
//           <span className='text-custom-red'> It's the Standard </span>
//         </h1>
//         <h3 className='mt-4 text-lg text-gray-300'>
//           Your trusted partner for cutting-edge services and solutions
//         </h3>

//         {/* Services Section */}
//         <div className="grid grid-cols-4 gap-8 mt-16">
//           {[ 
//             { img: service1, title: 'Service 1' },
//             { img: service2, title: 'Service 2' },
//             { img: service3, title: 'Service 3' },
//             { img: service4, title: 'Service 4' },
//             { img: service5, title: 'Service 5' },
//             { img: service6, title: 'Service 6' },
//             { img: service7, title: 'Service 7' },
//             { img: service8, title: 'Service 8' }
//           ].map((service, idx) => (
//             <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
//               <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
//               <div className="p-4 text-white text-center">{service.title}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import service1 from '../assets/componets-bg/ourservice1.png';
// import service2 from '../assets/componets-bg/ourservice2.png';
// import service3 from '../assets/componets-bg/ourservice3.png';
// import service4 from '../assets/componets-bg/ourservice4.png';
// import service5 from '../assets/componets-bg/ourservice5.png';
// import service6 from '../assets/componets-bg/ourservice6.png';
// import service7 from '../assets/componets-bg/ourservice7.png';
// import service8 from '../assets/componets-bg/ourservice8.png';
// import { useNavigate } from 'react-router-dom';

// export default function ServicesSection() {
//   const navigate = useNavigate();

//   const services = [
//     { 
//       img: service1, 
//       title: 'PAINT PROTECTION FILM',
//       description: 'Premium self-healing PPF for cars & superbikes. Protect paint from chips, scratches, road debris & daily wear'
//     },
//     { 
//       img: service2, 
//       title: 'GRAPHENE COATING',
//       description: 'Advanced graphene-infused coating providing superior protection and unmatched gloss'
//     },
//     { 
//       img: service3, 
//       title: 'INTERIOR DETAILING',
//       description: 'Complete interior rejuvenation including deep cleaning, conditioning and odor elimination'
//     },
//     { 
//       img: service4, 
//       title: 'CERAMIC COATING',
//       description: 'Professional-grade ceramic protection creating a hydrophobic surface that repels contaminants'
//     },
//     { 
//       img: service5, 
//       title: 'EXTERIOR DETAILING',
//       description: 'Full exterior restoration including paint correction, trim restoration and wheel detailing'
//     },
//     { 
//       img: service6, 
//       title: 'BIKE DETAILING',
//       description: 'Specialized motorcycle detailing service designed for premium two-wheelers'
//     },
//     { 
//       img: service7, 
//       title: 'LEATHER COATING',
//       description: 'Advanced protection for automotive leather preventing cracks and maintaining suppleness'
//     },
//     { 
//       img: service8, 
//       title: 'WASH & WAX',
//       description: 'Premium hand wash followed by high-quality wax application for showroom shine'
//     }
//   ];

//   const handleServiceClick = (title) => {
//     const slug = title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');
//     navigate(`/toolbar?tab=${slug}`);
//   };

//   return (
//     <section className='relative z-30 pt-16'>
//       <div className='text-center py-16 px-8'>
//         <h1 className='font-bebas text-6xl pt-28 text-app-white'>
//            Where Precision Isn't a Feature 
//            <span className='text-custom-red'> It's the Standard </span>
//          </h1>
//          <h3 className='mt-4 text-lg text-gray-300'>
//            Your trusted partner for cutting-edge services and solutions
//          </h3>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16 px-4">
//           {services.map((service, idx) => (
//             <div 
//               key={idx}
//               onClick={() => handleServiceClick(service.title)}
//               className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 hover:scale-105"
//             >
//               {/* Service Image */}
//               <img 
//                 src={service.img} 
//                 alt={service.title} 
//                 className="w-full h-56 object-cover transition-opacity duration-300 group-hover:opacity-20"
//               />
              
//               {/* Visible Title */}
//               <div className="absolute inset-x-0 top-4">
//                 <h3 className="text-white font-bold text-xl text-center px-2">
//                   {service.title}
//                 </h3>
//               </div>
              
//               {/* Hover Overlay */}
//               <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="text-center px-4">
//                   {/* <h3 className="text-white font-bold text-xl mb-2">
//                     {service.title}
//                   </h3> */}
//                   <p className="text-gray-200 text-sm">
//                     {service.description}
//                   </p>
//                 </div>
//               </div>
              
//               {/* Bottom Gradient */}
//               {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// ServicesSection.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// import service1 from '../assets/componets-bg/ourservice1.png';
// import service2 from '../assets/componets-bg/ourservice2.png';
// import service3 from '../assets/componets-bg/ourservice3.png';
// import service4 from '../assets/componets-bg/ourservice4.png';
// import service5 from '../assets/componets-bg/ourservice5.png';
// import service6 from '../assets/componets-bg/ourservice6.png';
// import service7 from '../assets/componets-bg/ourservice7.png';
// import service8 from '../assets/componets-bg/ourservice8.png';

// export default function ServicesSection({
//   columns = 4,                 // number of columns in the grid
//   cardHeight = '26rem',        // height of each card (accepts any valid CSS size)
//   cardWidth = undefined        // optional max width per card (e.g. '420px') or undefined
// }) {
//   const navigate = useNavigate();

//   const services = [
//     { img: service1, title: 'PAINT PROTECTION FILM', desc: 'Premium self-healing PPF for cars & superbikes. Protect paint from chips, scratches, road debris & daily wear.' },
//     { img: service2, title: 'GRAPHENE COATING', desc: 'Sample hover text for Graphene Coating.' },
//     { img: service3, title: 'INTERIOR DETAILING', desc: 'Sample hover text for Interior Detailing.' },
//     { img: service4, title: 'CERAMIC COATING', desc: 'Sample hover text for Ceramic Coating.' },
//     { img: service5, title: 'EXTERIOR DETAILING', desc: 'Sample hover text for Exterior Detailing.' },
//     { img: service6, title: 'BIKE DETAILING', desc: 'Sample hover text for Bike Detailing.' },
//     { img: service7, title: 'LEATHER COATING', desc: 'Sample hover text for Leather Coating.' },
//     { img: service8, title: 'WASH & WAX', desc: 'Sample hover text for Wash & Wax.' },
//   ];

//   const gridStyle = { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` };

//   return (
//     <section className="relative z-30 pt-16">
//       <div className="text-center py-16 px-8">
//         <h1 className="font-bebas text-6xl pt-28 text-app-white">
//           Where Precision Isn't a Feature
//           <span className="text-custom-red"> It's the Standard </span>
//         </h1>
//         <h3 className="mt-4 text-lg text-gray-300">
//           Every surface. Every curve. Every ride. We treat your machine like a masterpiece.
//         </h3>

//         <div className="mt-16 grid gap-8" style={gridStyle}>
//           {services.map((s, i) => (
//             <div
//               key={i}
//               role="button"
//               tabIndex={0}
//               onClick={() => navigate(`/toolbar?tab=${encodeURIComponent(s.title)}`)}
//               onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/toolbar?tab=${encodeURIComponent(s.title)}`); }}
//               className="relative group cursor-pointer overflow-hidden rounded-md"
//               style={{ height: cardHeight, maxWidth: cardWidth }}
//               aria-label={s.title}
//             >
//               {/* Image */}
//               <img
//                 src={s.img}
//                 alt={s.title}
//                 className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
//               />

//               {/* subtle gradient so the bottom title is readable by default */}
//               <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90"></div>

//               {/* Default small/bottom title (visible before hover) */}
//               <div className="absolute left-6 bottom-6 z-20 pointer-events-none transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4">
//                 <h3 className="font-bebas text-[2.6rem] leading-none tracking-tighter text-white drop-shadow-lg uppercase">
//                   {s.title}
//                 </h3>
//               </div>

//               {/* Hover overlay: darken + large title + description + arrow */}
//               <div className="absolute inset-0 z-30 flex items-end p-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
//                 <div className="max-w-[60%]">
//                   <h2 className="font-bebas text-[3.4rem] leading-tight text-white mb-3 drop-shadow-lg uppercase">
//                     {s.title}
//                   </h2>
//                   <p className="text-white text-lg mb-6">
//                     {s.desc}
//                   </p>
//                   <div className="text-white text-3xl">→</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ServicesSection({
  columns = 4,
  cardHeight = '26rem',
  cardWidth = undefined
}) {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://ocd-deploy.onrender.com/services') // 🔹 your API endpoint
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error('Error fetching services:', err));
  }, []);

  const gridStyle = { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` };

  return (
    <section className="relative z-30 pt-16">
      <div className="text-center py-16 px-8">
        <h1 className="font-bebas text-6xl pt-28 text-app-white">
          Where Precision Isn't a Feature
          <span className="text-custom-red"> It's the Standard </span>
        </h1>
        <h3 className="mt-4 text-lg text-gray-300">
          Every surface. Every curve. Every ride. We treat your machine like a masterpiece.
        </h3>

        <div className="mt-16 grid gap-8" style={gridStyle}>
          {services.map((s) => (
            <div
              key={s.id}
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/toolbar/${s.id}`)} // 🔹 Pass ID in URL
              onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/toolbar/${s.id}`); }}
              className="relative group cursor-pointer overflow-hidden rounded-md"
              style={{ height: cardHeight, maxWidth: cardWidth }}
              aria-label={s.name}
            >
              <img
                src={s.image_home}
                alt={s.name}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90"></div>

              {/* Default title */}
              <div className="absolute left-6 bottom-6 z-20 pointer-events-none transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4">
                <h3 className="font-bebas text-[2.6rem] leading-none tracking-tighter text-white drop-shadow-lg uppercase">
                  {s.name}
                </h3>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 z-30 flex items-end p-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                <div className="max-w-[60%]">
                  <h2 className="font-bebas text-[3.4rem] leading-tight text-white mb-3 drop-shadow-lg uppercase">
                    {s.name}
                  </h2>
                  <p className="text-white text-lg mb-6">
                    {s.description}
                  </p>
                  <div className="text-white text-3xl">→</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
