import { View, Text, Linking, Button } from "react-native"
import tailwind from "twrnc"

const cardStyles = tailwind`
  border rounded-full w-42 h-42 flex justify-center items-center
`

export default function Card({ label, dial }) {
  const handlePress = () => {
    try {
      const encodedDial = encodeURIComponent(dial)
      console.log("Attempting to dial", encodedDial)
      Linking.openURL(`tel:${encodedDial}`)
      console.log("Dial went through")
    } catch (error) {
      console.log("Error while dialing", error)
    }
  };
  return (
    <View  onPress={handlePress} style={cardStyles}>
    <Text>{label}</Text>
    </View>
  )
}
