import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import EnTete from '../components/EnTete';
import EnTeteFiche from '../components/EnTeteFiche';
import ContenuFiche from '../components/ContenuFiche';

const creerCompte: NextPage = () => {
	return (
		<div>
            <EnTete />
			<main className="md:container sm:px-12 mx-auto">
                <EnTeteFiche nom={"Créer un compte"} url={"/nouvelUtilisateur"} methodeUtilisee={"POST"} securise={true} />
                <ContenuFiche methodeUtilisee={"POST"} />
			</main>
		</div>
	)
}

export default creerCompte;