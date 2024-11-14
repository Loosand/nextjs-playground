"use client"
import React from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

import { BackgroundBeams } from "@/components/ui/background-beams"
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect"
import { HeroParallax } from "@/components/ui/hero-parallax"
import { cn } from "@/lib/utils"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"

const products = [
	{
		title: "Moonbeam",
		link: "https://gomoonbeam.com",
		thumbnail: "/aaa.png",
	},
	{
		title: "Cursor",
		link: "https://cursor.so",
		thumbnail: "/aaa.png",
	},
	{
		title: "Rogue",
		link: "https://userogue.com",
		thumbnail: "/aaa.png",
	},

	{
		title: "Editorially",
		link: "https://editorially.org",
		thumbnail: "/aaa.png",
	},
	{
		title: "Editrix AI",
		link: "https://editrix.ai",
		thumbnail: "/aaa.png",
	},
	{
		title: "Pixel Perfect",
		link: "https://app.pixelperfect.quest",
		thumbnail: "/aaa.png",
	},

	{
		title: "Algochurn",
		link: "https://algochurn.com",
		thumbnail: "/aaa.png",
	},
	{
		title: "Aceternity UI",
		link: "https://ui.aceternity.com",
		thumbnail: "/aaa.png",
	},
	{
		title: "Tailwind Master Kit",
		link: "https://tailwindmasterkit.com",
		thumbnail: "/aaa.png",
	},
	{
		title: "SmartBridge",
		link: "https://smartbridgetech.com",
		thumbnail: "/aaa.png",
	},
	{
		title: "Renderwork Studio",
		link: "https://renderwork.studio",
		thumbnail: "/aaa.png",
	},

	{
		title: "Creme Digital",
		link: "https://cremedigital.com",
		thumbnail: "/aaa.png",
	},
	{
		title: "Golden Bells Academy",
		link: "https://goldenbellsacademy.com",
		thumbnail: "/aaa.png",
	},
	{
		title: "Invoker Labs",
		link: "https://invoker.lol",
		thumbnail: "/aaa.png",
	},
	{
		title: "E Free Invoice",
		link: "https://efreeinvoice.com",
		thumbnail: "/aaa.png",
	},
]

export function AppleCardsCarouselDemo() {
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} />
	))

	return (
		<div className="size-full py-20">
			<h2 className="mx-auto max-w-7xl pl-4 font-sans text-xl font-bold text-neutral-800 dark:text-neutral-200 md:text-5xl">
				Get to know your iSad.
			</h2>
			<Carousel items={cards} />
		</div>
	)
}

const DummyContent = () => {
	return (
		<>
			{[...new Array(3).fill(1)].map((_, index) => {
				return (
					<div
						key={"dummy-content" + index}
						className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 dark:bg-neutral-800 md:p-14">
						<p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 dark:text-neutral-400 md:text-2xl">
							<span className="font-bold text-neutral-700 dark:text-neutral-200">
								The first rule of Apple club is that you boast about Apple club.
							</span>{" "}
							Keep a journal, quickly jot down a grocery list, and take amazing
							class notes. Want to convert those notes to text? No problem.
							Langotiya jeetu ka mara hua yaar is ready to capture every
							thought.
						</p>
						<Image
							src="https://assets.aceternity.com/macbook.png"
							alt="Macbook mockup from Aceternity UI"
							height="500"
							width="500"
							className="mx-auto size-full object-contain md:size-1/2"
						/>
					</div>
				)
			})}
		</>
	)
}

const data = [
	{
		category: "Artificial Intelligence",
		title: "You can do more with AI.",
		src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
	{
		category: "Productivity",
		title: "Enhance your productivity.",
		src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
	{
		category: "Product",
		title: "Launching the new Apple Vision Pro.",
		src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},

	{
		category: "Product",
		title: "Maps for your iPhone 15 Pro Max.",
		src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
	{
		category: "iOS",
		title: "Photography just got better.",
		src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
	{
		category: "Hiring",
		title: "Hiring for a Staff Software Engineer",
		src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
]

export default function Page() {
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} />
	))
	const ref = React.useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	})

	const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2])
	const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2])
	const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2])
	const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2])
	const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2])

	return (
		<main>
			<HeroParallax products={products} />

			<LampContainer>
				<motion.h1
					initial={{ opacity: 0.5, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
					Build lamps <br /> the right way
				</motion.h1>
			</LampContainer>

			<div
				className="relative h-[400vh] w-full text-clip rounded-md bg-black pt-40 dark:border dark:border-white/[0.1]"
				ref={ref}>
				<GoogleGeminiEffect
					pathLengths={[
						pathLengthFirst,
						pathLengthSecond,
						pathLengthThird,
						pathLengthFourth,
						pathLengthFifth,
					]}
				/>
			</div>

			<div className="size-full py-20">
				<h2 className="mx-auto max-w-7xl pl-4 font-sans text-xl font-bold text-neutral-800 dark:text-neutral-200 md:text-5xl">
					Get to know your iSad.
				</h2>
				<Carousel items={cards} />
			</div>

			<div className="relative flex h-[40rem] w-full flex-col items-center justify-center rounded-md bg-neutral-950 antialiased">
				<div className="mx-auto max-w-2xl p-4">
					<h1 className="relative z-10 bg-gradient-to-b from-neutral-200  to-neutral-600 bg-clip-text text-center font-sans text-lg  font-bold text-transparent md:text-7xl">
						Join the waitlist
					</h1>
					<p></p>
					<p className="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-500">
						Welcome to MailJet, the best transactional email service on the web.
						We provide reliable, scalable, and customizable email solutions for
						your business. Whether you&apos;re sending order confirmations,
						password reset emails, or promotional campaigns, MailJet has got you
						covered.
					</p>
					<input
						type="text"
						placeholder="hi@manuarora.in"
						className="relative z-10 mt-4 w-full rounded-lg  border border-neutral-800 bg-neutral-950 placeholder:text-neutral-700  focus:ring-2 focus:ring-teal-500"
					/>
				</div>
				<BackgroundBeams />
			</div>
		</main>
	)
}

export const LampContainer = ({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) => {
	return (
		<div
			className={cn(
				"relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
				className
			)}>
			<div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center ">
				<motion.div
					initial={{ opacity: 0.5, width: "15rem" }}
					whileInView={{ opacity: 1, width: "30rem" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className="bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]">
					<div className="absolute  bottom-0 left-0 z-20 h-40 w-full bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]" />
					<div className="absolute  bottom-0 left-0 z-20 h-full  w-40 bg-slate-950 [mask-image:linear-gradient(to_right,white,transparent)]" />
				</motion.div>
				<motion.div
					initial={{ opacity: 0.5, width: "15rem" }}
					whileInView={{ opacity: 1, width: "30rem" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					style={{
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
					}}
					className="bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]">
					<div className="absolute  bottom-0 right-0 z-20 h-full  w-40 bg-slate-950 [mask-image:linear-gradient(to_left,white,transparent)]" />
					<div className="absolute  bottom-0 right-0 z-20 h-40 w-full bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]" />
				</motion.div>
				<div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
				<div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
				<div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
				<motion.div
					initial={{ width: "8rem" }}
					whileInView={{ width: "16rem" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="absolute inset-auto z-30 h-36 w-64 -translate-y-24 rounded-full bg-cyan-400 blur-2xl"></motion.div>
				<motion.div
					initial={{ width: "15rem" }}
					whileInView={{ width: "30rem" }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-28 bg-cyan-400 "></motion.div>

				<div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
			</div>

			<div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
				{children}
			</div>
		</div>
	)
}
