import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../components/button';

const stats = [
  { label: '7-day sleep duration', value: '48h 50m' },
  { label: 'Avg quality', value: '8.4/10' },
  { label: 'Avg time to bed', value: '10:48 PM' },
  { label: 'Avg wake time', value: '7:12 AM' },
  { label: 'Sleep consistency', value: '82%' },
  { label: 'Recovery score', value: '87' },
];

export default function SleepStatsScreen() {
  const router = useRouter();

  function handleBack() {
    router.back();
  }

  return (
    <View style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Text style={styles.eyebrow}>Sleep Tracker</Text>
          <Text style={styles.title}>Sleep statistics</Text>
          <Text style={styles.intro}>Last 7 days overview</Text>

          <View style={styles.grid}>
            {stats.map((item) => (
              <View key={item.label} style={styles.statCard}>
                <Text style={styles.statLabel}>{item.label}</Text>
                <Text style={styles.statValue}>{item.value}</Text>
              </View>
            ))}
          </View>

          <Button label="Back to Home" onPress={handleBack} />
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 18,
    minHeight: 120,
    justifyContent: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 10,
  },
  statValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0f172a',
  },
});
