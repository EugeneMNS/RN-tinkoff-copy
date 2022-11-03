import React, { FC } from 'react'
import { View, Text, ScrollView } from 'react-native'
import tw from 'tailwind-rn'
import Loader from '../../../ui/Loader'
import StoryItem from './StoryItem'

import { useStories } from './useStories'

const Stories: FC = () => {
	const { stories, isLoading } = useStories()

	return (
		<View style={tw('my-7')}>
			{isLoading ? (
				<Loader />
			) : (
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{stories.map(story => (
						<StoryItem key={story._id} story={story} />
					))}
				</ScrollView>
			)}
		</View>
	)
}

export default Stories
