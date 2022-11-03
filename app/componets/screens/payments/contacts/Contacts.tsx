import React, { FC } from 'react'
import { View, Text, ScrollView } from 'react-native'
import tw from 'tailwind-rn'
import Loader from '../../../ui/Loader'
import SubHeading from '../../../ui/SubHeading'
import ContactItem from './ContactItem'

import { useContacts } from './useContacts'

const Contacts: FC = () => {
	const { contacts, isLoading } = useContacts()

	return (
		<View style={tw('my-8')}>
			<SubHeading text='Phone transfers' />
			{isLoading ? (
				<Loader />
			) : (
				<ScrollView
					style={tw('mt-5')}
					showsHorizontalScrollIndicator={false}
					horizontal
				>
					{contacts.map(c => (
						<ContactItem key={c._id} contact={c} />
					))}
				</ScrollView>
			)}
		</View>
	)
}

export default Contacts
