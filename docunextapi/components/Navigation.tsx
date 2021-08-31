import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../public/logoSAC.PNG';
import { useRouter } from 'next/router';
import ItemNavigation from './ItemNavigation';
import ItemNavigationMobile from './ItemNavigationMobile';

const Navigation = () => {
    const router = useRouter();
    const [showMe, setShowMe] = useState(false);

    const toggle = () => {
        setShowMe(!showMe);
    }

    return ( 
        <div>
            <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div>
                                <a href="#" className="flex items-center py-4 px-2">
                                    <Image src={logo} alt="Logo" height={50} width={100} className="mr-2" />
                                    <span className="font-semibold text-gray-500 text-lg">Documentation API Bois</span>
                                </a>
                            </div>
                            <div className="hidden md:flex items-center space-x-1">
                                <ItemNavigation lien={"/"} titre={"Accueil"} />
                                <ItemNavigation lien={"/creerCompte"} titre={"Créer un compte"} />
                                <ItemNavigation lien={"/connexion"} titre={"Connexion"} />
                                <ItemNavigation lien={"/verifierCompte"} titre={"Vérifier un compte"} />
                                <ItemNavigation lien={"/typesBois"} titre={"Types de bois"} />
                                <ItemNavigation lien={"/ficheBois"} titre={"Fiche de type de bois"} />
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button onClick={toggle} className="outline-none mobile-menu-button">
                                <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                    x-show="!showMenu"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div style={{display: showMe?"block":"none"}} className="mobile-menu">
                    <ul className="">
                        <li><ItemNavigationMobile lien={"/"} titre={"Accueil"} /></li>
                        <li><ItemNavigationMobile lien={"/creerCompte"} titre={"Créer un compte"} /></li>
                        <li><ItemNavigationMobile lien={"/connexion"} titre={"Connexion"} /></li>
                        <li><ItemNavigationMobile lien={"/verifierCompte"} titre={"Vérifier un compte"} /></li>
                        <li><ItemNavigationMobile lien={"/typesBois"} titre={"Types de bois"} /></li>
                        <li><ItemNavigationMobile lien={"/ficheBois"} titre={"Fiche de type de bois"} /></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;