import { View } from 'react-native';
import Card from './components/Card';
import tailwind from 'twrnc';

const password = "9154"

const quickDials = [
  {
    label: "1",
    dial: "*145*7*1*1234#"
  },
  {
    label: "2",
    dial: "*555#"
  }
]

const defaultViewStyles = tailwind`
  flex flex-col items-center justify-center h-full
  gap-12 w-full
`
export default function App() {
  return (
    <View style={defaultViewStyles}>
      {
        quickDials.map(quickdial => {
          return (
            <Card key={quickdial.label} label={quickdial.label} dial={quickdial.dial} />
          )
        })
      }
    </View>
  );
}
