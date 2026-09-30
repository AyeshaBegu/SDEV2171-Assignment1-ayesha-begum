import { useState } from 'react';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../components/button';

const sleepQualityOptions = ['Excellent', 'Good', 'Fair', 'Poor'];

export default function SleepLogScreen() {
  const router = useRouter();
  const [date, setDate] = useState('2026-09-25');
  const [timeToBed, setTimeToBed] = useState('10:45 PM');
  const [timeAwake, setTimeAwake] = useState('7:00 AM');
  const [sleepQuality, setSleepQuality] = useState('');

  function handleBack() {
    router.back();
  }

  return (
    <View style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Text style={styles.eyebrow}>Sleep Tracker</Text>
          <Text style={styles.title}>Sleep log entry</Text>
          <Text style={styles.intro}>Log last night’s sleep details.</Text>

          <View style={styles.section}>
            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Date</Text>
              <TextInput style={styles.input} value={date} onChangeText={setDate} placeholder="Select date" />
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Time to bed</Text>
              <TextInput style={styles.input} value={timeToBed} onChangeText={setTimeToBed} placeholder="Time to bed" />
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Time awake</Text>
              <TextInput style={styles.input} value={timeAwake} onChangeText={setTimeAwake} placeholder="Time awake" />
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Quality of sleep</Text>
              <View style={styles.optionRow}>
                {sleepQualityOptions.map((option) => (
                  <Pressable
                    key={option}
                    style={[styles.optionChip, sleepQuality === option && styles.selectedOptionChip]}
                    onPress={() => setSleepQuality(option)}
                  >
                    <Text style={styles.optionText}>{option}</Text>
                  </Pressable>
                ))}
              </View>
            </View>

            <Button label="Back to Home" onPress={handleBack} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#dfeadf',
  },
  scrollContent: {
    padding: 24,
    paddingTop: 42,
  },
  container: {
    gap: 18,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#3f5f49',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111827',
    lineHeight: 36,
  },
  intro: {
    fontSize: 15,
    lineHeight: 23,
    color: '#4b5563',
  },
  section: {
    padding: 18,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    gap: 12,
  },
  fieldGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#374151',
  },
  input: {
    borderWidth: 1,
    borderColor: '#dfe7f4',
    borderRadius: 14,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: '#f8fafc',
    fontSize: 16,
    color: '#0f172a',
  },
  optionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  optionChip: {
    backgroundColor: '#eaf1ff',
    borderRadius: 999,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
  },
  selectedOptionChip: {
    backgroundColor: '#c7d2fe',
  },
  optionText: {
    color: '#1d4ed8',
    fontWeight: '600',
    fontSize: 13,
  },
});
