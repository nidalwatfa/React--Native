import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'; 
import CustomButton from './CustomButton';
import { UserContext } from './UserContext';

const HomeScreen = ({ navigation }) => {
  // استخدام Context للحصول على البيانات وحالة التحميل والخطأ
  const { users, isLoading, error } = useContext(UserContext); 

  const renderItem = ({ item }) => (
    <View style={styles.userCard}>
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userEmail}>{item.email}</Text>
      <CustomButton
        title="عرض التفاصيل"
        onPress={() => navigation.navigate('Details', { userName: item.name, userId: item.id })} 
      />
    </View>
  );

  // عرض شاشة التحميل
  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text style={styles.loadingText}>يتم تحميل بيانات المستخدمين...</Text>
      </View>
    );
  }

  // عرض شاشة الخطأ
  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>حدث خطأ: {error}</Text>
        <Text style={styles.errorText}>يرجى التأكد من اتصالك بالإنترنت.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>قائمة المستخدمين (من Context) 🚀</Text>
      
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
      
      {/* زر عائم للانتقال إلى شاشة الإضافة */}
      <View style={styles.fabContainer}> 
        <CustomButton
            title="➕ إضافة مستخدم"
            onPress={() => navigation.navigate('Add')} 
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: 10,
  },
  centerContainer: { // ستايل جديد لحالة التحميل والخطأ
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: '#3498db',
  },
  errorText: {
    fontSize: 18,
    color: '#e74c3c',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#2c3e50',
  },
  listContent: {
    paddingHorizontal: 10,
    paddingBottom: 80, 
  },
  userCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#3498db',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#34495e',
  },
  userEmail: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 10, 
  },
});

export default HomeScreen;
