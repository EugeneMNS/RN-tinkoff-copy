import React, { FC } from 'react'
import { View, ScrollView } from 'react-native'
import tw from 'tailwind-rn'

import SubHeading from '../../../ui/SubHeading'
import { otherItems } from './data'
import OtherItem from './item/OtherItem'

const Other: FC = () => {
	return (
		<View>
			<SubHeading text='Important transfers' />
			<ScrollView
				style={tw('py-5')}
				showsHorizontalScrollIndicator={false}
				horizontal
			>
				{otherItems.map(item => (
					<OtherItem key={item.title} item={item} />
				))}
			</ScrollView>
		</View>
	)
}

export default Other
