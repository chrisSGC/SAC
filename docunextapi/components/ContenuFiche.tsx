import Head from 'next/head';

/*                    <ul className="list-reset flex flex-col">
                        <li className=" rounded-t relative -mb-px block border p-4 border-grey">Cras justo odio</li>
                        <li className="relative -mb-px block border p-4 border-grey">Dapibus ac facilisis in</li>
                        <li className="relative -mb-px block border p-4 border-grey">Morbi leo risus</li>
                        <li className="relative -mb-px block border p-4 border-grey">Porta ac consectetur ac</li>
                        <li className="rounded-b relative block border p-4 border-grey">Vestibulum at eros</li>
                    </ul>*/

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
                <div className="my-2"><span className="font-bold">Media type:</span> Application/json</div>
                <div className="my-2"><span className="font-bold">Type:</span> Object</div>
                <div className="mt-2"><span className="font-bold">Propriétés:</span></div>
                <div className="w-1/4 mb-2">
                    <ul className="list-reset flex flex-col">
                        <li className=" rounded-t relative -mb-px block border p-4 border-grey"><span className="font-bold">nomCompte:</span> <span className="italic">required (string)</span></li>
                        <li className="rounded-b relative block border p-4 border-grey"><span className="font-bold">motDePasse:</span> <span className="italic">required (string)</span></li>
                    </ul>
                </div>
                <div className="mt-2"><span className="font-bold">Exemple:</span></div>
                <div className="bg-gray-300 rounded py-2 px-2 my-2">
                    <div className="font-mono">
                        &#123;<br />
                        nomCompte : 'John Cena',<br />
                        motDePasse : 'SaintPampamSurMer'<br />
                        &#125;
                    </div>
                </div>
                <hr className="my-6" />
            </div>
		</div>
	)
}

export default ContenuFiche;