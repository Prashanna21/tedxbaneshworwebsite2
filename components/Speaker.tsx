import React from 'react';

const Speaker = () => {
  return (
    <div className="text-center h-screen bg-white py-36">
      <h2 className="text-3xl font-bold mb-8 text-black-c1 py-10">Meet Our Speaker</h2>
      <div className="flex justify-center items-center gap-8">
        <div className="w-48 h-48 bg-gray-300 flex items-center justify-center rounded-lg">
          <span>Photo</span>
        </div>
        <div className="w-60 h-60 bg-gray-300 flex items-center justify-center rounded-lg">
          <span>Photo</span>
        </div>
        <div className="w-48 h-48 bg-gray-300 flex items-center justify-center rounded-lg">
          <span>Photo</span>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
