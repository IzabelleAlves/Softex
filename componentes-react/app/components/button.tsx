'use client';

export function Button() {
    function handleClick() {
      alert('clicouuu!');
    }
  
    return (
      <button onClick={handleClick} className="m-3 px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75">
        Clique aqui!
      </button>
    );  
  }