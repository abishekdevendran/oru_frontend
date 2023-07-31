import useResponsive from '@/hooks/useResponsive';
import Image from 'next/image';
import React from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const formSchema = z.object({
	email: z.string().email(),
});

const Footer = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
		},
	});
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}
	return (
		<footer className="w-full">
			{useResponsive('lg') && (
				<div className="downloadApp w-full h-80 flex items-center justify-end bg-[#EDEFFC]">
					<span className="flex flex-col items-center justify-center h-full ml-12 mr-24">
						<span className="font-poppins font-bold text-2xl lg:text-3xl text-center leading-tight tracking-tight">
							Get the OruPhones App
						</span>
						<span className="h-1/2 w-full flex items-center justify-between">
							<Image
								src="/assets/Footer/playStore.svg"
								alt="Footer Vector"
								width="0"
								height="0"
								sizes="100vw"
								className="w-1/2 p-4 h-auto"
							/>
							<Image
								src="/assets/Footer/appStore.svg"
								alt="Footer Vector"
								width="0"
								height="0"
								sizes="100vw"
								className="w-1/2 p-4 h-auto"
							/>
						</span>
					</span>
					<span className="w-fit h-full flex justify-end">
						<Image
							src="/assets/Footer/vector.svg"
							alt="Footer Vector"
							width="0"
							height="0"
							sizes="100vw"
							className="w-auto h-full"
						/>
					</span>
				</div>
			)}
			<div className="newsLetter w-full py-16 flex flex-col gap-4 items-center justify-center bg-primary">
				<span className="container font-poppins font-bold text-2xl lg:text-3xl w-4/5 lg:w-2/5 text-center leading-tight tracking-tight">
					Get Notified About Our Latest Offers and Price Drops
				</span>
				<span className="font-poppins font-medium lg:text-lg w-4/5 lg:w-2/5 text-center leading-tight tracking-tight">
					Sign up for our newsletter and stay updated
				</span>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<span className="relative w-32">
											<Input
												placeholder="abc@123.com"
												{...field}
												className="w-full rounded-full"
											/>
											<Button
												type="submit"
												className="absolute right-0 top-0 rounded-full"
												variant={'secondary'}
											>
												Submit
											</Button>
										</span>
									</FormControl>
									<FormDescription>
										Your email will not be shared with anyone else.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</div>
			<div className="bg-secondary w-full h-96 relative">
				<div className="container h-full flex items-center justify-center">
					<span className="iconContainer flex gap-2">
						<span className="icon bg-white rounded-full aspect-square p-1">
							<Facebook size={24} className="bg-white m-1 aspect-square" />
						</span>
						<span className="icon bg-white rounded-full aspect-square p-1">
							<Instagram size={24} className="bg-white m-1 aspect-square" />
						</span>
						<span className="icon bg-white rounded-full aspect-square p-1">
							<Linkedin size={24} className="bg-white m-1 aspect-square" />
						</span>
						<span className="icon bg-white rounded-full aspect-square p-1">
							<Youtube size={24} className="bg-white m-1 aspect-square" />
						</span>
						<span className="icon bg-white rounded-full aspect-square p-1">
							<Twitter size={24} className="bg-white m-1 aspect-square" />
						</span>
					</span>
					<span className="absolute bottom-0 w-full text-center font-poppins text-sm tracking-tighter text-primary">
						© OruPhones {new Date().getFullYear()}
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
