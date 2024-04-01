import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const ParentingTipsComponent = () => {
  const doTips = [
    { id: 1, title: "Spend quality time with your child", description: "Engage in activities that promote bonding and communication." },
    { id: 3, title: "Set clear boundaries and expectations", description: "Consistent rules help children feel safe and understand what's expected of them." },
    { id: 5, title: "Encourage independence", description: "Support your child in learning new skills and making their own decisions." },
    { id: 7, title: "Communicate openly with your child", description: "Encourage your child to express their thoughts and feelings, and listen attentively." },
    { id: 9, title: "Lead by example", description: "Children learn by observing their parents' behavior. Be a positive role model." },
    { id: 11, title: "Be patient and understanding", description: "Parenting can be challenging, but patience and empathy go a long way in building a strong relationship with your child." },
  ];

  const dontTips = [
    { id: 2, title: "Compare your child to others", description: "Every child is unique and develops at their own pace." },
    { id: 4, title: "Overlook self-care", description: "Taking care of yourself allows you to be a better parent. Don't neglect your own needs." },
    { id: 6, title: "Use punishment as the primary discipline method", description: "Positive reinforcement and logical consequences are more effective in shaping behavior." },
    { id: 8, title: "Ignore your child's emotions", description: "Validate their feelings and help them develop healthy coping mechanisms." },
    { id: 10, title: "Avoid over-scheduling activities", description: "Allow your child time for unstructured play and relaxation. Balance is key." },
    { id: 12, title: "Don't be overly critical", description: "Focus on praising your child's efforts and accomplishments rather than pointing out flaws." },
  ];

  const [selectedTip, setSelectedTip] = useState(null);

  const handleClick = (id) => {
    setSelectedTip(selectedTip === id ? null : id);
  };

  return (
    <div className="flex flex-wrap justify-center gap-8">
      <div className="max-w-lg m-4">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">Do's</h2>
        <div className="space-y-4">
          {doTips.map((tip, index) => (
            <div key={tip.id} className={`relative ${index !== doTips.length - 1 && 'mb-4'}`}>
              <button
                className="w-full bg-green-500 text-white text-left text-2xl font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-green-600 focus:outline-none focus:bg-green-600"
                onClick={() => handleClick(tip.id)}
              >
                {tip.title}
              </button>
              <Transition
                show={selectedTip === tip.id}
                enter="transition-opacity duration-300 transform ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition-opacity duration-200 transform ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {(ref) => (
                  <div ref={ref} className="absolute bg-white w-full py-2 px-4 rounded shadow-lg top-full left-0 mt-2 z-10" onClick={()=>setSelectedTip(null)}>
                    <p className="text-lg text-gray-800">{tip.description}</p>
                  </div>
                )}
              </Transition>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-lg m-4">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">Don'ts</h2>
        <div className="space-y-4">
          {dontTips.map((tip, index) => (
            <div key={tip.id} className={`relative ${index !== dontTips.length - 1 && 'mb-4'}`}>
              <button
                className="w-full bg-red-500 text-white text-left text-2xl font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-red-600 focus:outline-none focus:bg-red-600"
                onClick={() => handleClick(tip.id)}
              >
                {tip.title}
              </button>
              <Transition
                show={selectedTip === tip.id}
                enter="transition-opacity duration-300 transform ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition-opacity duration-200 transform ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {(ref) => (
                  <div ref={ref} className="absolute bg-white w-full py-2 px-4 rounded shadow-lg top-full left-0 mt-2 z-10" onClick={()=>setSelectedTip(null)}>
                    <p className="text-lg text-gray-800">{tip.description}</p>
                  </div>
                )}
              </Transition>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParentingTipsComponent;
