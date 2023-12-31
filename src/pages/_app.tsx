import '@/styles/globals.css';
import {
	DehydratedState,
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Provider, useAtomValue } from 'jotai';
import { DevTools } from 'jotai-devtools';
import { DefaultSeo } from 'next-seo';
import { QCOptions, SEO } from '@/config/_index';
import Head from 'next/head';
import { Inter, Poppins } from 'next/font/google';
import UserInit from '@/lib/providers/UserInit';
import loadingAtom from '@/store/loading';
import { Portal } from '@/components/Pages/_app/Portal';
import dynamic from 'next/dynamic';

const ToastContainer = dynamic(
	() => import('@/components/Pages/_app/ToastContainer'),
	{
		ssr: false,
	},
);

const Navbar = dynamic(() => import('@/components/Navbar'), {
	ssr: false,
});

const Footer = dynamic(() => import('@/components/Footer'), {
	ssr: false,
});

const GlobalLoading = dynamic(
	() => import('@/components/Popups/GlobalLoading'),
	{
		ssr: false,
	},
);

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
	variable: '--font-poppins',
	display: 'swap',
});

const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '400', '800'],
	variable: '--font-inter',
	display: 'swap',
});

export default function App({
	Component,
	pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
	const [queryClient] = useState(() => new QueryClient(QCOptions));
	const isLoading = useAtomValue(loadingAtom);
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>
					<Provider>
						<DevTools theme="dark" />
						<Head>
							<meta
								name="viewport"
								content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
							/>
						</Head>
						<UserInit />
						<main
							className={`${poppins.variable} ${inter.variable} font-poppins`}
						>
							<Navbar />
							{isLoading && <GlobalLoading />}
							<Component {...pageProps} />
							<Footer />
						</main>
						<DefaultSeo {...SEO} />
					</Provider>
				</Hydrate>
			</QueryClientProvider>
			<Portal>
				<ToastContainer />
			</Portal>
		</>
	);
}
