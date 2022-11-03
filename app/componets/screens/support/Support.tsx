import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import Padding from '../../ui/Padding'
import Field from './Field'
import Header from './Header'
import Message from './Message'
import { useMessages } from './useMessages'
import Layout from "../../layouts/Layout";

const Support: FC = () => {
	const { messages } = useMessages()

	return (
		<Layout isScrollView={false}>
			<Padding>
				<Header />
				<ScrollView style={{ height: '83%' }}>
					{messages.map(msg => (
						<Message key={msg._id} message={msg} />
					))}
				</ScrollView>
				<Field />
			</Padding>
		</Layout>
	)
}

export default Support
