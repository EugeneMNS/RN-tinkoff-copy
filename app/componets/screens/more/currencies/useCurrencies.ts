import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'

import { ICurrency } from './types'
import { URL } from './API'

export const useCurrencies = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [currencies, setCurrencies] = useState<ICurrency[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${URL}&base_currency=BYN`)
				const result = await response.json()

				setCurrencies([
					{
						name: 'USD',
						value: (1 / result.data.USD.value).toFixed(3),
					},
					{
						name: 'EUR',
						value: (1 / result.data.EUR.value).toFixed(3),
					},
					{
						name: 'GBP',
						value: (1 / result.data.GBP.value).toFixed(3),
					},
				])
			} catch (error: any) {
				Alert.alert('Fetch currencies', error.message)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [])

	return { isLoading, currencies }
}
