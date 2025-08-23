import React from 'react';

const LocationSearchPanel = (props) => {
  const locations = [
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ"
  ];

  return (
    <div className="p-4">
      {locations.map((location, index) => (
        <div 
          onClick={() => {
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }}
          key={index}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
