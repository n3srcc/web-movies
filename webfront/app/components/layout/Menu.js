import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Menu({ searchTerm, setSearchTerm }) {
    const router = useRouter();

    const handleClick = () => {
        setSearchTerm('');
        router.push('/');
    };

    return (
        <nav className="flex flex-col md:flex-row items-center justify-between bg-slate-950 p-6">
            <div className="flex items-center">
                <span className="font-semibold text-xl tracking-tight text-white">WEB MOVIES</span>

            </div>
            <div className="mr-10 ml-5 mb-2 mt-2">
                <button onClick={handleClick} className="md:inline-block text-slate-300 hover:text-white ml-4">
                    Top movies
                </button>
            </div>
            <div className="flex-auto mt-4 md:mt-0">
                <input
                    type="text"
                    placeholder="Search movie..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mr-2 md:mr-0"
                />
                </div>
        </nav>
    );
}
