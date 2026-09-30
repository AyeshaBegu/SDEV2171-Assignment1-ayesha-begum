import { Pressable, StyleSheet, Text } from 'react-native';

export default function Button({ label, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 12,
    backgroundColor: '#5f8067',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
});