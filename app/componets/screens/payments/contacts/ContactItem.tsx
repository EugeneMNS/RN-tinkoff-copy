import React, { FC } from 'react'
import { Text, Pressable } from 'react-native'
import tw from 'tailwind-rn'

import Avatar from '../../../ui/Avatar'
import { useAccounts } from '../../home/accounts/useAccounts'
import { handleTransfer } from '../handleTransfer'
import { IContact } from './types'

const ContactItem: FC<{ contact: IContact }> = ({ contact }) => {
	const { accounts } = useAccounts()

	return (
		<Pressable
			style={tw('ml-4 mr-1 items-center')}
			onPress={handleTransfer.bind(this, accounts[0], contact.cardNumber)}
		>
			<Avatar name={contact.displayName} size='large' />
			<Text style={tw('mt-1 text-xs')}>{contact.displayName}</Text>
		</Pressable>
	)
}

export default ContactItem
