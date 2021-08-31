import Head from 'next/head';

const ContenuFiche = ({methodeUtilisee}) => {
	const badge = methodeUtilisee === "POST" ? "inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-green-100 bg-green-700 rounded": "inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded";

	return (
		<div>
            <Head>
                <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
            </Head>
			<div>
                <h4 className="text-2xl font-semibold my-2">Requête</h4>
                <h5 className="text-xl font-semibold my-2">Body</h5>
                <div className="flex">
                    <div className="w-1/6"><span className={badge}>{methodeUtilisee}</span></div>
                    <div className="w-5/6">
                        <p>Permet de créer un nouveau compte utilisateur.</p>
                        <p>Le nom de compte <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-grey-100 bg-grey-700 rounded">nomCompte</span> désigne le nom sous lequel l'utilisateur se connectera et le mot de passe <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-grey-100 bg-grey-700 rounded">motDePasse</span> sera utilisé pour valider son authentification.</p>
                        <p><span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-yellow-100 bg-yellow-500 rounded">Méthode asynchrone</span></p>
                    </div>
                </div>
            </div>
		</div>
	)
}

export default ContenuFiche;