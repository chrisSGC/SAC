import type { NextPage } from 'next';

import React, { useEffect, useState } from "react";
import EnTete from '../components/EnTete';
import EnTeteFiche from '../components/EnTeteFiche';
import ContenuFiche from '../components/ContenuFiche';

const creerCompte: NextPage = () => {
	const [contenuPage, setContenuPage] = useState({});

	useEffect(() => {
		fetch("/creerCompte.json").then((res) => res.json()).then((data) => {
			setContenuPage(data);
		});
	}, []);

	return (
		<div>
            <EnTete />
			<main className="md:container sm:px-12 mx-auto">
                <EnTeteFiche data={contenuPage.enTete} methodeUtilisee={contenuPage.methodeUtilisee} />
                <ContenuFiche data={contenuPage} />
			</main>
		</div>
	)
}

export default creerCompte;