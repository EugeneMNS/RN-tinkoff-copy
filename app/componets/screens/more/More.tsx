import React, { FC } from 'react'
import { Text } from 'react-native'
import tw from 'tailwind-rn'

import Heading from '../../ui/Heading'
import Padding from '../../ui/Padding'
import Currencies from './currencies/Currencies'
import Menu from './menu/Menu'
import Layout from "../../layouts/Layout";

const More: FC = () => {
	return (
		<Layout>
			<Heading text='More' />
			<Padding>
				<Currencies />
				<Menu />
				<Text style={tw('text-center text-gray-500 opacity-50 my-4')}>
					Version 5.20.6
				</Text>
			</Padding>
		</Layout>
	)
}

export default More
