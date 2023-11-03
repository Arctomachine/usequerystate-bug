'use client'

import Filter from '@/app/Filter'
import { useQueryState } from 'next-usequerystate'
import Link from 'next/link'

function Wrapper ({ items }: {
	items: {
		id: number
		text: string
	}[]
}) {
	const [search] = useQueryState('items')

	const filteredItems =
		search
			? items.filter(item => search.split(',')
				.every(searchItem => item.text.includes(searchItem)))
			: items

	return (
		<>
			<Filter/>
			<main>
				{filteredItems.map(item => {
					/**
					 * BUG HERE
					 *
					 * If <Link> has prefetch={true} (default, so can omit), then it bugs.
					 * If <Link> has prefetch={false}, then it works.
					 * */
					return (
						<Link href={`/${item.id}`} prefetch={true} key={item.id}>
							<div>
								{item.text}
							</div>
						</Link>
					)
				})}
			</main>
		</>
	)
}

export default Wrapper
