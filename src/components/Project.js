import React from 'react';

function Project () {
  return (
    <div className='bg-black' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h1 className='mx-auto mob:p-2 text-slate-900 text-bold text-4xl laptop:text-6xl w-full' style={{ transform: 'translate(0px, 0px)', opacity: 1 }}>Projeler</h1>
        <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10">
          <div className='cursor-pointer relative'></div>
        </div>
      </div>
    </div>
  );
}

export default Project;
