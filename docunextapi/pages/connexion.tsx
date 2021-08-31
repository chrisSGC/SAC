import type { NextPage } from 'next';
import EnTete from '../components/EnTete';
import EnTeteFiche from '../components/EnTeteFiche';
import ContenuFicheC from '../components/ContenuFicheC';

const connexion: NextPage = () => {
	return (
		<div>
            <EnTete />
			<main className="md:container sm:px-12 mx-auto">
                <EnTeteFiche nom={"Se connecter"} url={"/connexion"} methodeUtilisee={"POST"} securise={true} />
                <ContenuFicheC methodeUtilisee={"POST"} />
			</main>
		</div>
	)
}

export default connexion;