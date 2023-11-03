'use client'

import { useQueryState } from 'next-usequerystate'
import { Suspense } from 'react'

function Filter () {
	const [search, setSearch] = useQueryState('items')

	const checked = search
		? [1, 2, 3].map(item => search.split(',').includes(item.toString()))
		: [false, false, false]

	function changeHandler (index: number) {
		const newChecked = [...checked]
		newChecked[index] = !checked[index]
		setSearch([1, 2, 3].filter(item => newChecked[item - 1]).join(','))
	}

	return (
		<header>
			<Suspense>
				<label>
					1 <input type="checkbox" checked={checked[0]}
					         onChange={() => changeHandler(0)}/>
				</label><br/>
				<label>
					2 <input type="checkbox" checked={checked[1]}
					         onChange={() => changeHandler(1)}/>
				</label><br/>
				<label>
					3 <input type="checkbox" checked={checked[2]}
					         onChange={() => changeHandler(2)}/>
				</label>
			</Suspense>
		</header>
	)
}

export default Filter
