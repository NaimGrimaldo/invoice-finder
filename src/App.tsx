import { useEffect, useState } from 'react'
import { RouterProvider } from "react-router"
import { getRouter } from './router'

export function App() {
	const [router, setRouter] = useState(getRouter())

	useEffect(() => {
		setRouter(getRouter())
	}, [])

	return (
		<RouterProvider router={router} />
	)
}