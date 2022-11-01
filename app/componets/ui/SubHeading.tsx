import React, { FC } from 'react'
import { Text } from 'react-native'
import tw from 'tailwind-rn'
import Padding from './Padding'

const SubHeading: FC<{ text: string }> = ({ text }) => {
	return (
		<Padding>
			<Text style={tw('text-xl text-gray-800 font-bold')}>{text}</Text>
		</Padding>
	)
}

export default SubHeading
