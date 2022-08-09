const Badge = ({ text }: { text: string }) => {
  return (
    <div className='cursor-pointer flex py-2 px-6 rounded-lg min-w-[50px] max-w-[150px] text-gray-600 tracking-wide font-[500] transition-color duration-100 hover:text-blue-600'>
      {text}
    </div>
  )
}

export default Badge