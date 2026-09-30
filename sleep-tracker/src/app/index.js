import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../components/button';

export default function HomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.safeArea}>
            <StatusBar style="dark" />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.container}>
                    <Text style={styles.eyebrow}>Sleep Tracker</Text>
                    <Text style={styles.title}>Better Sleep, Healthier Tomorrow.</Text>
                    <Text style={styles.intro}>
                        Track your Sleep Quality for better health.
                    </Text>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Navigation</Text>
                        <Text style={styles.sectionBody}>
                            Log your sleep details or view your weekly statistics.
                        </Text>

                        <Button label="Go to Sleep Log" onPress={() => router.push('/sleep-log')} />
                        <Button label="View Statistics" onPress={() => router.push('/sleep-stats')} />
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
        lineHeight: 36,
        color: '#1f2937',
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
    sectionTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#111827',
    },
    sectionBody: {
        fontSize: 14,
        lineHeight: 21,
        color: '#4b5563',
    },
});
