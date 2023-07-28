import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type TBrand = {
	_id: string;
	displayOrder: number;
	make: string;
	imagePath: string;
};

const BrandCard = ({ brand }: { brand: TBrand }) => {
	return (
		<Link
			href={`/bestDeals/${brand.make.toLowerCase()}`}
			className="hover:scale-110 first:ml-auto last:mr-auto aspect-square object-contain w-24 h-24 lg:w-32 md:h-32 flex items-center justify-center"
		>
			<Image
				src={brand.imagePath}
				alt={brand.make}
				width={100}
				height={100}
				className="aspect-square rounded-full bg-gray-100 object-contain"
			/>
		</Link>
	);
};

const TopBrands = ({ brands }: { brands: TBrand[] | null }) => {
	return (
		<section className="topBrands w-full container py-8">
			<div className="flex items-center justify-between gap-4">
				<span className="font-poppins text-3xl font-semibold tracking-tighter">
					Top Brands
				</span>
				<Button variant="link">
					<Link
						href="/brands"
						className="flex gap-2 items-center justify-center font-poppins font-semibold tracking-tighter"
					>
						View All
						<ArrowRight size={12} />
					</Link>
				</Button>
			</div>
			<div className="flexContainer flex items-center gap-1 max-w-full w-full py-4 overflow-x-auto">
				{brands?.map((brand, index) => <BrandCard key={index} brand={brand} />)}
			</div>
		</section>
	);
};

export default TopBrands;
