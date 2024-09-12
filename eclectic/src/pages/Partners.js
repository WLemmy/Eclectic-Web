import React from 'react';

const partners = [
  {
    id: 1,
    name: 'Sikika-Ke',
    description: 'Sikika-Ke is a leading provider of innovative solutions in technology and consulting.',
  },
  {
    id: 2,
    name: 'TechnoPro Limited',
    description: 'TechnoPro Limited specializes in advanced tech solutions and professional services.',
  },
  {
    id: 3,
    name: 'Macro Limited',
    description: 'Macro Limited offers a broad range of IT and software solutions tailored to diverse industries.',
  },
];

const Partners = () => {
  return (
    <div className='bg-gray-100 py-8'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold text-center mb-6'>Our Partners</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {partners.map(partner => (
            <div
              key={partner.id}
              className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center'
            >
              <h2 className='text-xl font-semibold mb-2'>{partner.name}</h2>
              <p className='text-base font-light'>{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
