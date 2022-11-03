import React, { FC, useState } from 'react'
import { View, TextInput, Pressable, Alert } from 'react-native'
import tw from 'tailwind-rn'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useAuth } from '../../../hooks/useAuth'
import { db } from '../../../firebase'

const Field: FC = () => {
	const { user } = useAuth()
	const [message, setMessage] = useState('')

	const handleSendMessage = async () => {
		try {
			await addDoc(collection(db, 'messages'), {
				timestamp: serverTimestamp(),
				userId: user?.uid,
				text: message,
			})
		} catch (error: any) {
			Alert.alert('Err add new msg: ', error)
		} finally {
			setMessage('')
		}
	}

	return (
		<View style={tw('mt-3 flex-row items-center justify-between py-1')}>
			<TextInput
				placeholder='Enter your message'
				onChangeText={setMessage}
				value={message}
				showSoftInputOnFocus={false}
				autoCapitalize='none'
				style={tw('bg-gray-100 rounded-xl p-3 w-5/6 h-10 rounded-2xl')}
			/>
			<Pressable onPress={handleSendMessage}>
				<MaterialCommunityIcons
					name='send-circle-outline'
					size={42}
					style={tw('text-blue-300')}
				/>
			</Pressable>
		</View>
	)
}

export default Field
