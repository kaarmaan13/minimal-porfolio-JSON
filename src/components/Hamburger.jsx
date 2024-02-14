import { useState } from 'react'

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-600 dark:text-gray-400"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 6l16 0"></path>
    <path d="M4 12l16 0"></path>
    <path d="M4 18l16 0"></path>
  </svg>
)

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-600 dark:text-gray-400"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M18 6l-12 12"></path>
    <path d="M6 6l12 12"></path>
  </svg>
)

const Navigation = () => {
  return (
    <nav
      className='flex sm:hidden fixed bottom-28 right-6 flex-col px-8 gap-y-2 py-3 gap-x-10 text-sm backdrop-blur font-medium rounded-lg bg-gray-100/70 text-black/70 dark:bg-gray-800 dark:text-gray-200 justify-center items-center'
    >
      <a
        className='opacity-80 hover:no-underline hover:opacity-100'
        href='#experiencia'>Experiencia</a
      >
      <a
        className='opacity-80 hover:no-underline hover:opacity-100'
        href='#proyectos'>Proyectos</a
      >
      <a
        className='opacity-80 hover:no-underline hover:opacity-100'
        href='#sobre-mi'>Sobre mí</a
      >
      <a
        className='opacity-80 hover:no-underline hover:opacity-100'
        href='/cv'
        target='_blank'>CV</a
      >
    </nav>
  )
}

export const Hamburger = () => {
  const [open, setOpen ] = useState(false)

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true)
  }

  return (
    <>
      <button className='fixed block sm:hidden bottom-6 right-6 p-2 rounded-full text-gray-200 bg-gray-100/70 text-black/70 dark:bg-gray-800 dark:text-gray-200' onClick={handleClick}>
        {
          open ? <CloseIcon /> : <MenuIcon />
        }
      </button>
      {
        open ? <Navigation /> : ''
      }
    </>
  )
}