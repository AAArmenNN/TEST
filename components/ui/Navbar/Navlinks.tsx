'use client';

import Link from 'next/link';
import { SignOut } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import Logo from '@/components/icons/Logo';
import { usePathname, useRouter } from 'next/navigation';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';
import { useState, useRef, useEffect } from 'react';
import s from './Navbar.module.css';

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = getRedirectMethod() === 'client' ? useRouter() : null;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Fermer le menu lors d'un clic en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
      <div className="flex items-center flex-1">
        <Link href="/" className={s.logo} aria-label="Logo">
          <Logo />
        </Link>

        {/* Menu responsive */}
        <nav className="ml-6 space-x-4 lg:block hidden md:flex">
          <Link href="/" className={s.link}>
            Accueil
          </Link>

          <Link href="/tarifs" className={s.link}>
            Tarifs
          </Link>

          <Link href="/compta" className={s.link}>
            Comptabilité
          </Link>

          {user && (
            <Link href="/account" className={s.link}>
              Mon compte
            </Link>
          )}
        </nav>

        {/* Bouton de menu en dessous de 1400px */}
        <button
          onClick={toggleMenu}
          className="lg:hidden ml-4 text-black font-bold focus:outline-none"
        >
          Menu
        </button>





        {/* Liste déroulante */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-full mt-2 bg-white shadow-lg p-4 rounded-md z-50 space-y-3"
          >
            <Link href="/" className={s.dropdownLink} onClick={toggleMenu}>
              Accueil
            </Link>

            <Link href="/tarifs" className={s.dropdownLink} onClick={toggleMenu}>
              Tarifs
            </Link>

            <Link href="/compta" className={s.dropdownLink} onClick={toggleMenu}>
              Comptabilité
            </Link>
            {user && (
              <Link href="/account" className={s.dropdownLink} onClick={toggleMenu}>
                Mon compte
              </Link>
            )}
          </div>
        )}
      </div>






      <div className="flex justify-end space-x-8">
        {user ? (
          <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
            <input type="hidden" name="pathName" value={usePathname()} />
            <button type="submit" className={s.link}>
              Se déconnecter
            </button>
          </form>
        ) : (
          <Link href="/signin" className={s.link}>
            Se connecter
          </Link>
        )}
      </div>
    </div>
  );
}
