interface ButtonBurguerProps {
    toOpen: () => void;
}

const Buttonburguer = ({ toOpen }: ButtonBurguerProps) => {
    return (
        <button onClick={toOpen} className="px-2 py-1 bg-slate-300 shadow text-gray-700 rounded-md fixed top-7 right-7">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
    );
};

export default Buttonburguer;