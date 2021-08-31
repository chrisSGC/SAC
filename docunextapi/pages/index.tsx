import type { NextPage } from 'next';
import EnTete from '../components/EnTete';

const Home: NextPage = () => {
	return (
		<div>
			<EnTete />
			<main className="md:container mx-auto">
				<h1 className="text-6xl font-bold">API Bois version 1.0</h1>
				<p>Cette documentation a pour but de vous presenter les differents appels possibles avec l'API Bois. Cette API est destinee a gerer l'ESP d'un four a bois.</p>
			</main>
		</div>
	)
}

export default Home;