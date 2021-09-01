import React from "react";

const EnTeteFiche = ({data, methodeUtilisee}) => {
	if (data) {
		var nom = data.nom;
		var url = data.url;
		var securise = data.securise;
		var securisePar = data.securisePar;
	}

	const badge = methodeUtilisee === "POST" ? "inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-green-100 bg-green-700 rounded": "inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded";

	return (
		<div>
			<h2 className="text-4xl font-bold mt-4">{nom}</h2>
			<h4 className="text-2xl font-semibold my-2">URL d'appel</h4>
			<div className="bg-gray-300 rounded flex justify-between py-2 px-2 my-2">
				<div className="font-mono">{url}</div>
				<div><span className={badge}>{methodeUtilisee}</span></div>
			</div>
			{securise === "true" ? <div className="my-4 overflow-hidden leading-normal rounded-lg" role="alert"><p className="px-4 py-3 font-bold text-yellow-100 bg-yellow-800">Systême sécurisé</p><p className="px-4 py-3 text-yellow-700 bg-yellow-100 ">Ce systême est sécurisé par <span className="font-bold hover:underline">{securisePar}</span>.</p></div> : ''}
		</div>
	)
}

export default EnTeteFiche;