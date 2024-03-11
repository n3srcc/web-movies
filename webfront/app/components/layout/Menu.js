import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Menu({ searchTerm, setSearchTerm }) {
    const router = useRouter();

    const handleClick = () => {
        setSearchTerm('');
        router.push('/');
    };
    return (
        <nav className="flex items-center justify-between flex-wrap bg-slate-950 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">WEB MOVIES</span>
            </div>
            <div className="lg:w-auto text-sm flex-grow lg:flex lg:items-center justify-center lg:justify-end">
                <button onClick={handleClick} className="block mt-4 lg:inline-block lg:mt-0 text-slate-300 hover:text-white mr-10">
                    Top movies
                </button>
                <input
                    type="text"
                    placeholder="search movie..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
        </nav>
    );
}
