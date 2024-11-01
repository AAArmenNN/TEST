'use client';

import Button from '@/components/ui/Button';
import LogoCloud from '@/components/ui/LogoCloud';
import type { Tables } from '@/types_db';
import { getStripe } from '@/utils/stripe/client';
import { checkoutWithStripe } from '@/utils/stripe/server';
import { getErrorRedirect } from '@/utils/helpers';
import { User } from '@supabase/supabase-js';
import cn from 'classnames';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

type Product = Tables<'products'>;
type Price = Tables<'prices'>;
interface ProductWithPrices extends Product {
  prices: Price[];
}

interface Props {
  user: User | null | undefined;
  products: ProductWithPrices[];
}

export default function Pricing({ user, products }: Props) {
  const router = useRouter();
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const currentPath = usePathname();

  const handleStripeCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);

    if (!user) {
      setPriceIdLoading(undefined);
      return router.push('/signin/signup');
    }

    const { errorRedirect, sessionId } = await checkoutWithStripe(price, currentPath);

    if (errorRedirect) {
      setPriceIdLoading(undefined);
      return router.push(errorRedirect);
    }

    if (!sessionId) {
      setPriceIdLoading(undefined);
      return router.push(
        getErrorRedirect(currentPath, 'An unknown error occurred.', 'Please try again later or contact a system administrator.')
      );
    }

    const stripe = await getStripe();
    stripe?.redirectToCheckout({ sessionId });

    setPriceIdLoading(undefined);
  };

  // Filtrer les produits avec abonnement mensuel
  const filteredProducts = products.filter((product) =>
    product.prices.some(price => price.interval === null || price.interval === 'month')
  );

  if (!filteredProducts.length) {
    return (
      <section className="bg-black">
        <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
          <p className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Aucun produit trouvé.
          </p>
        </div>
        <LogoCloud />
      </section>
    );
  } else {
    return (
      <section className="bg-orangeclair">
        <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-extrabold text-zinc-700 sm:text-6xl">
              Choisir une offre
            </h1>
            <p className="max-w-2xl font-bold mt-5 text-xl text-zinc-600 sm:text-2xl">
              Gagnez du TEMPS et des POINTS à l'examen ! 🏆
            </p>
          </div>




          <div className="mt-12 flex flex-wrap justify-center gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
            {filteredProducts.map((product) => {
              const price = product.prices.find(
                (price) => price.interval === null || price.interval === 'month' // Inclure les prix sans intervalle et avec intervalle mensuel
              );

              if (!price) return null;

              const priceString = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: price.currency!,
                minimumFractionDigits: 0
              }).format((price?.unit_amount || 0) / 100);

              return (
                <div
                  key={product.id}
                  className={cn(
                    'flex flex-col rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900',
                    'flex-1',
                    'basis-1/2', // Deux cartes par ligne sur écrans plus petits
                    'max-w-xs',
                    'sm:basis-1/3' // Une carte par ligne sur écrans plus larges
                  )}
                >
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold leading-6 text-white">
                      {product.name}
                    </h2>
                    <p className="mt-4 text-zinc-300">{product.description}</p>
                    <p className="mt-8">
                      <span className="text-5xl font-extrabold white">
                        {priceString}
                      </span>
                      <span className="text-base font-medium text-zinc-100">
                        {price.interval === 'month' ? ' / mois' : ' (Produit unique)'}
                      </span>
                    </p>
                    <Button
                      variant="slim"
                      type="button"
                      loading={priceIdLoading === price.id}
                      onClick={() => handleStripeCheckout(price)}
                      className="block w-full py-2 mt-8 text-sm font-semibold text-center text-black rounded-md hover:bg-zinc-800"
                    >
                      Choisir cette offre
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
