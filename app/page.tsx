import Wrapper from '@/app/Wrapper'
import { Suspense } from 'react'

export default function Home () {
	const allItems = []
	for (let i = 0; i < 1000; i++) {
		allItems.push({
			id: i,
			text: `Item card ${i}`,
		})
	}

	return (
		<Suspense>
			<Wrapper items={allItems}/>
		</Suspense>
	)
}
