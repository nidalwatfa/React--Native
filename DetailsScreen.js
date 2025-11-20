import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

const DetailsScreen = ({ navigation, route }) => {
  // استقبال البيانات الممررة عبر route.params
  // إذا لم يتم تمرير البيانات، سيتم تعيينها إلى كائن فارغ {}
  const { userName, userId } = route.params || {}; 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>تفاصيل المستخدم</Text>
      
      <View style={styles.detailCard}>
        <Text style={styles.label}>اسم المستخدم:</Text>
        <Text style={styles.value}>{userName}</Text>
      </View>

      <Text style={styles.infoText}>
        (ID) يمكنك الآن جلب تفاصيل إضافية لهذا المستخدم
      </Text>
      
      {/* زر للعودة إلى القائمة */}
      <CustomButton
        title="العودة إلى القائمة"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f6f8',
    alignItems: 'center',
    paddingTop: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 30,
  },
  detailCard: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3498db',
    marginBottom: 5,
  },
  value: {
    fontSize: 20,
    color: '#2c3e50',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
    paddingBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default DetailsScreen;
