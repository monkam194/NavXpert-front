import React, { useState } from "react";

const PerturbationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [perturbationReason, setPerturbationReason] = useState("");

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPerturbationReason("");
  };

  const handleSubmit = () => {
    console.log("Reason for perturbation:", perturbationReason);
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className="px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition"
        onClick={handleButtonClick}
      >
        Signaler une perturbation
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-[400px] w-full">
            <h4 className="text-xl font-bold mb-4">Raison de la perturbation</h4>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Entrez la raison"
              value={perturbationReason}
              onChange={(e) => setPerturbationReason(e.target.value)}
            />
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={handleCloseModal}
              >
                Annuler
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleSubmit}
              >
                Soumettre
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerturbationModal;
