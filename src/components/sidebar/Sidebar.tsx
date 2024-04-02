import { motion } from 'framer-motion';

interface SidebarProps {
    toClose: () => void;
}

const Sidebar = ({ toClose }: SidebarProps) => {

    return (
        <div className='fixed inset-0 z-50 overflow-hidden'>
            <div className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
            <section className='absolute inset-y-0 pl-10 max-w-full flex'>
                <div className='w-screen max-w-m p-6 flex justify-end'>
                    <motion.div
                        initial={{
                            x: 500
                        }}
                        animate={{
                            x: 0
                        }}
                        transition={{
                            duration: .9,
                            type: 'spring'
                        }}
                        className='h-full flex flex-col py-3 bg-gray-200 shadow-xl rounded-2xl min-w-80 max-w-2xl'>
                        <div className='flex items-end justify-between px-4'>
                            <h2 className='text-xl font-semibold text-black'>Menu</h2>
                            <button onClick={toClose} className='text-gray-500 hover:text-gray-700'>
                                <span className='sr-only'>Close</span>
                                <svg className='h-8 w-8' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                                </svg>
                            </button>
                        </div>
                        {/* <div className='mt-4 px-4'>
                            <input type='text' placeholder='Search post here' className='w-full p-2 border border-gray-300 rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300' />
                        </div> */}
                        <div className='mt-4 px-1 border-b mx-2'>
                            <p className='text-gray-400 mb-2'>Results</p>
                        </div>
                        <div className='flex flex-col gap-2 mt-4 ml-4 mr-1 h-full overflow-auto'>
                            {/* Cards go here */}
                            <div className='px-2 py-1 bg-gray-700 rounded-md scale-95 hover:scale-100 transition-all'>
                                <p className='text-white text-lg'>Cosa 1</p>
                                <p className='text-gray-400 text-sm'>Descripción</p>
                            </div>
                            <div className='px-2 py-1 bg-gray-700 rounded-md scale-95 hover:scale-100  transition-all'>
                                <p className='text-white text-lg'>Cosa 2</p>
                                <p className='text-gray-400 text-sm'>Descripción</p>
                            </div>
                            <div className='px-2 py-1 bg-gray-700 rounded-md scale-95 hover:scale-100  transition-all'>
                                <p className='text-white text-lg'>Cosa 3</p>
                                <p className='text-gray-400 text-sm'>Descripción</p>
                            </div>
                            <div className='px-2 py-1 bg-gray-700 rounded-md scale-95 hover:scale-100  transition-all'>
                                <p className='text-white text-lg'>Cosa 4</p>
                                <p className='text-gray-400 text-sm'>Descripción</p>
                            </div>
                        </div>
                        {/* <div className='mt-6 px-4'>
                            <button className='flex justify-center items-center bg-black text-white rounded-md text-sm p-2 gap-1'>
                                Filters
                            </button>
                        </div> */}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Sidebar;