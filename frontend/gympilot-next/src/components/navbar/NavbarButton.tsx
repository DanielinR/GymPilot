
export default function NavbarButton({handleClick, isOpen} : {handleClick:VoidFunction, isOpen: Boolean}){

    return(
        <div className='absolute right-0 top-1/2 z-40 -translate-y-1/2 translate-x-8'>
          <button onClick={handleClick} className='bg-neutral-700 rounded-full p-1 flex justify-center items-center hover:bg-color-primary'>
            <svg width={20} height={20} viewBox="0 0 1024 1024" className={`icon ${!isOpen ? 'rotate-180' : ''}`} version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#fff"></path></g></svg>
          </button>
        </div>
    );
}