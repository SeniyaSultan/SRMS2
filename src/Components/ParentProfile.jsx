import React, { useRef, useState } from 'react';
import profileImage from './ParentProfile.png';

const ProfileParent = () => {
  const [uploadedImage, setUploadedImage] = useState(profileImage);
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    alert('Logging out...');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#b7dbed] rounded-lg shadow-lg relative space-y-6 text-black mb-8"> {/* Added mb-8 for bottom margin */}
      <button 
        className="absolute top-5 right-5 bg-red-600 text-white py-2 px-3 rounded-md hover:bg-red-700 transition duration-200 shadow-md"
        onClick={handleLogout}
      >
        Logout
      </button>

      <div 
        className="flex justify-center items-center mb-4 cursor-pointer"
        onClick={handleImageClick}
      >
        <img 
          src={uploadedImage} 
          alt="Profile" 
          className="w-32 h-32 rounded-full shadow-lg object-cover transition-transform duration-200 hover:scale-105"
        />
      </div>

      <label className="block text-center text-gray-800 mb-2">Upload Image</label>
      <label className="block text-center font-bold text-2xl text-blue-700 mb-6">Parent Profile Page</label>

      <input
        type="file"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
        accept="image/*"
      />

      <form className="flex flex-col space-y-4">
        <h2 className="text-xl text-center font-semibold mb-4">Manage Profile</h2>
        
        <div className="space-y-2">
  <label className="block text-sm text-black">Password:</label> {/* Changed text color to black */}
  <input
    type="password"
    name="Password"
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 shadow-sm text-black" // Added text color to input
  />
</div>

<div className="space-y-2">
  <label className="block text-sm text-black">Phone Number:</label> {/* Changed text color to black */}
  <input
    type="tel"
    name="phone"
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 shadow-sm text-black" // Added text color to input
  />
</div>

        <button 
          type="submit" 
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 shadow-md"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfileParent;
