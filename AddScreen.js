import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import CustomButton from './CustomButton';

const AddScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddUser = () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert('خطأ', 'الرجاء إدخال الاسم والبريد الإلكتروني.');
      return;
    }
    
    // هذا هو منطق الإضافة الوهمي
    Alert.alert(
      'تم الإضافة بنجاح (وهمياً)',
      `تم إدخال: ${name} و ${email}.`,
      [{ text: 'حسنًا', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <KeyboardAvoidingView 
      style={styles.flexContainer} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Text style={styles.header}>إضافة مستخدم جديد ➕</Text>

        <Text style={styles.label}>الاسم الكامل:</Text>
        <TextInput
          style={styles.input}
          placeholder="أدخل الاسم"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>البريد الإلكتروني:</Text>
        <TextInput
          style={styles.input}
          placeholder="أدخل البريد الإلكتروني"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        
        <CustomButton 
          title="إضافة المستخدم" 
          onPress={handleAddUser}
        />
        
        <CustomButton 
          title="إلغاء والعودة" 
          onPress={() => navigation.goBack()}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 30,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '5%',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 15,
    marginBottom: 5,
    color: '#2c3e50',
  },
  input: {
    width: '90%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#ecf0f1',
  },
});

export default AddScreen;
