import React from 'react';


const GridSection = ({ title, image }) => {
  return (
    <div className="flex flex-col bg-slate-200 shadow-lg rounded-3xl items-center justify-center p-4">
      <div className="w-28 h-28 bg-white mb-2 rounded-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold font-mono text-center mb-1">{title}</h3>
    </div>
  );
};

const Grid = () => {
  const data = [
    {
      title: "CCTV Surveillance & Constant Monitoring",
      text: "We have CCTV cameras installed throughout our premises to ensure the safety of your child. Our staff is also constantly monitoring the children's activities.",
      image: require('../images/grid/p1.png') // Replace with your image path
    },
    {
      title: "Adherence to Safety Regulations & Regular Inspection",
      text: "We strictly adhere to all safety regulations and our premises are regularly inspected by the authorities.",
      image: require('../images/grid/p2.png') // Replace with your image path
    },
    {
      title: "360° Safety Certification & Regular Inspection",
      text: "Our center is 360° safety certified and we undergo regular inspections to ensure the safety of your child.",
      image: require('../images/grid/p3.png') // Replace with your image path
    },
    {
      title: "Background Verification & Trained Staff & Teachers",
      text: "We conduct background verification on all our staff and teachers to ensure the safety and well-being of your child. Our staff is highly trained and qualified to provide the best care for your child.",
      image: require('../images/grid/p4.png') // Replace with your image path (optional)
    },
    {
      title: "Medical & Other Emergency Preparedness",
      text: "We have a qualified medical staff on hand to handle any medical emergencies. We are also prepared for other emergencies and have a disaster management plan in place.",
      image: require('../images/grid/p5.png') // Replace with your image path (optional)
    },
    {
      title: "Child-friendly Infrastructure, Classrooms & Play Area",
      text: "Our infrastructure is designed to be child-friendly and safe. Our classrooms are well-equipped and our play area is spacious and safe.",
      image: require('../images/grid/p6.png') // Replace with your image path (optional)
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <GridSection key={item.title} {...item} />
      ))}
    </div>
  );
};

export default Grid;
