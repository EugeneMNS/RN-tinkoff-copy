import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { FC } from 'react'
import { View, Text, Alert } from 'react-native'
import tw from 'tailwind-rn'
import { db } from '../../../../firebase'
import { useAuth } from '../../../../hooks/useAuth'
import { getRandomCardNumber } from '../../../../utils/getRandomCardNumber'
import Button from '../../../ui/Button'

import Padding from '../../../ui/Padding'
import { asyncAlert } from './asyncAlert'

const ApplyNewProduct: FC = () => {
	const { user } = useAuth()

	const registerHandler = async () => {
		try {
			const currency = await asyncAlert({
				title: 'Currency',
				msg: 'Select account currency:',
				buttons: {
					text: 'RUB',
					resolveValue: 'RUB',
					textSecond: 'USD',
					resolveValueSecond: 'USD',
				},
			})

			const cardType = await asyncAlert({
				title: 'Card type',
				msg: 'Select card type:',
				buttons: {
					text: 'Black',
					resolveValue: 'Tinkoff Black',
					textSecond: 'All airlines',
					resolveValueSecond: 'Tinkoff All Airlines',
				},
			})

			await addDoc(collection(db, 'accounts'), {
				timestamp: serverTimestamp(),
				userId: user?.uid,
				balance: 0,
				cardNumber: getRandomCardNumber(),
				currency,
				name: cardType,
			})
		} catch (error: any) {
			Alert.alert('Error apply new product', error)
		}
	}

	return (
		<Padding style={tw('mt-6')}>
			<Button onPress={registerHandler} title='Apply for a new product' />
		</Padding>
	)
}

export default ApplyNewProduct
