import Head from 'next/head';

/*                    <ul className="list-reset flex flex-col">
                        <li className=" rounded-t relative -mb-px block border p-4 border-grey">Cras justo odio</li>
                        <li className="relative -mb-px block border p-4 border-grey">Dapibus ac facilisis in</li>
                        <li className="relative -mb-px block border p-4 border-grey">Morbi leo risus</li>
                        <li className="relative -mb-px block border p-4 border-grey">Porta ac consectetur ac</li>
                        <li className="rounded-b relative block border p-4 border-grey">Vestibulum at eros</li>
                    </ul>*/

const ContenuFicheC = ({methodeUtilisee}) => {
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
                        <p>Permet à un utilisateur de s'authentifier.</p>
                        <p>Le nom de compte <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 bg-gray-700 rounded">nomCompte</span> désigne le nom sous lequel l'utilisateur se connectera, c'est le même que celui renseigné lors de la création du compte et le mot de passe <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 bg-gray-700 rounded">motDePasse</span> sera utilisé pour valider son authentification.Là encore, c'est le même que celui renseigné lors de la création du compte.</p>
                        <p><span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-500 rounded">Méthode synchrone</span></p>
                    </div>
                </div>
                <div className="my-2"><span className="font-bold">Media type:</span> Application/json</div>
                <div className="my-2"><span className="font-bold">Type:</span> Object</div>
                <div className="mt-2"><span className="font-bold">Propriétés:</span></div>
                <div className="w-1/4 mb-2">
                    <ul className="list-reset flex flex-col">
                        <li className=" rounded-t relative -mb-px block border p-4 border-gray"><span className="font-bold">nomCompte:</span> <span className="italic">required (string)</span></li>
                        <li className="rounded-b relative block border p-4 border-gray"><span className="font-bold">motDePasse:</span> <span className="italic">required (string)</span></li>
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
                <hr className="my-6 bg-gray-500 border-gray-500 border-1" />
            </div>
			<div>
                <h4 className="text-2xl font-semibold my-2">Reponse</h4>
                <details>
                    <summary className="text-xl font-semibold my-2">HTTP Code Status <span className="text-green-500">200</span></summary>
                    <p>Connexion au compte réalisée avec succès.</p>
                    <h5 className="text-xl font-semibold my-2">Body</h5>
                    <div className="my-2"><span className="font-bold">Media type:</span> Application/json</div>
                    <div className="my-2"><span className="font-bold">Type:</span> Object</div>
                    <div className="mt-2"><span className="font-bold">Propriétés:</span></div>
                    <div className="w-1/4 mb-2">
                        <ul className="list-reset flex flex-col">
                            <li className=" rounded-t relative -mb-px block border p-4 border-grey"><span className="font-bold">code:</span> <span className="italic">required (int)</span></li>
                            <li className="rounded-b relative block border p-4 border-grey"><span className="font-bold">token:</span> <span className="italic">required (string) Permet de garder en mémoire l'utilisateur connecté à l'application. Sert aussi à faire les vérifications d'authentification.</span></li>
                        </ul>
                    </div>
                    <div className="mt-2"><span className="font-bold">Exemple:</span></div>
                    <div className="bg-gray-300 rounded py-2 px-2 my-2">
                        <div className="font-mono">
                            &#123;<br />
                            code : 200,<br />
                            token : "&sDbemdY#EJgQJbSy@7%E5SH8"<br />
                            &#125;
                        </div>
                    </div>
                </details>
                <details className="mb-6">
                    <summary className="text-xl font-semibold my-2">HTTP Code Status <span className="text-red-500">400</span></summary>
                    <p>Une erreur est survenue pendant la tentative de connexion.</p>
                    <h5 className="text-xl font-semibold my-2">Body</h5>
                    <div className="my-2"><span className="font-bold">Media type:</span> Application/json</div>
                    <div className="my-2"><span className="font-bold">Type:</span> Object</div>
                    <div className="mt-2"><span className="font-bold">Propriétés:</span></div>
                    <div className="w-1/4 mb-2">
                        <ul className="list-reset flex flex-col">
                            <li className=" rounded-t relative -mb-px block border p-4 border-grey"><span className="font-bold">code:</span> <span className="italic">required (int)</span></li>
                            <li className="rounded-b relative block border p-4 border-grey"><span className="font-bold">status:</span> <span className="italic">required (string)</span></li>
                        </ul>
                    </div>
                    <div className="mt-2"><span className="font-bold">Exemple:</span></div>
                    <div className="bg-gray-300 rounded py-2 px-2 my-2">
                        <div className="font-mono">
                            &#123;<br />
                            code : 400,<br />
                            status : "Erreur d'identifiants."<br />
                            &#125;
                        </div>
                    </div>
                </details>
            </div>
		</div>
	)
}

export default ContenuFicheC;