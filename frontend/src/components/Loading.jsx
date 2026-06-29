import React from "react";

const MatchMakingLoader = () => {
  return (
    <div className="fixed inset-0 bg-[#050d25] flex items-center justify-center z-50">
      <div className="bg-[#111c3d] border border-[#243766] rounded-3xl p-10 w-[400px] text-center">

        <div className="w-20 h-20 mx-auto rounded-full border-4 border-purple-500 border-t-transparent animate-spin mb-6" />

        <h2 className="text-3xl font-bold text-white">
          Finding Match
        </h2>

        <p className="text-gray-400 mt-3">
          Searching players near your rating...
        </p>

        <div className="mt-6">
          <div className="w-full h-2 bg-[#1d2d5a] rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" />
          </div>
        </div>

        <button className="mt-8 px-6 py-3 bg-red-500 rounded-xl text-white">
          Cancel Search
        </button>

      </div>
    </div>
  );
};

export default MatchMakingLoader;