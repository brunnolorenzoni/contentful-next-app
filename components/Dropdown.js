import { Transition } from '@tailwindui/react'

const Dropdown = ({ children, show, className, style }) => {

  return (
    <Transition 
      show={show}
      className={`p-2 m-2 absolute opacity-90 right-0 z-0 bg-gray-700 shadow-xl rounded ${className || ''}`} 
      style={style || {}}
    >
      {children}
    </Transition>
  )

};

export default Dropdown;