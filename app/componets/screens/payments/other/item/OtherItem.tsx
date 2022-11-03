import React, { FC } from 'react'
import { View, Text, Pressable } from 'react-native'
import tw from 'tailwind-rn'
import { BOX_SHADOW } from '../../../../../styles'
import { useAccounts } from '../../../home/accounts/useAccounts'
import { handleTransfer } from '../../handleTransfer'

import { IOtherItem } from '../types'
import Icon from './Icon'

const CASH_CARD_NUMBER = '4917 2154 8691 5737'

const OtherItem: FC<{ item: IOtherItem }> = ({ item }) => {
	const { accounts } = useAccounts()
	return (
		<Pressable
			style={{
				...tw('ml-4 rounded-xl p-2 w-24 h-24 bg-white'),
				...BOX_SHADOW,
			}}
			onPress={handleTransfer.bind(this, accounts[0], CASH_CARD_NUMBER)}
		>
			<Icon iconName={item.iconName} />
			<Text style={{ ...tw('text-xs'), marginTop: 6 }}>{item.title}</Text>
		</Pressable>
	)
}

export default OtherItem
