import React from 'react'

function BlueButton({ onClick, label}) {
  return (
     <button className=" px-4 py-3 rounded-xl bg-linear-to-r from-indigo-300 to-indigo-700 text-black font-semibold hover:from-indigo-200 hover:to-indigo-600 transition" onClick={onClick}>
        {label}
      </button>
  )
}

export default BlueButton