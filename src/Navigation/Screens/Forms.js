import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';

const Forms = ({ navigation }) => {
  const [timeSlots, setTimeSlots] = useState([
    { id: '1', time: '10:00 AM', date: '2024-01-15', available: true },
    { id: '2', time: '02:00 PM', date: '2024-01-15', available: true },
    // Add more sample data as needed
  ]);

  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleTimeSlotPress = (id) => {
    const updatedTimeSlots = timeSlots.map((slot) =>
      slot.id === id ? { ...slot, available: !slot.available } : slot
    );
    setTimeSlots(updatedTimeSlots);
    setSelectedTimeSlot(id);
  };

  const handleFormSubmit = () => {
    if (formData.name && formData.email && selectedTimeSlot) {
      // Handle form submission logic here
      console.log('Form submitted:', { ...formData, selectedTimeSlot });
    //   navigation.navigate('Confirmation', { selectedTimeSlot });
    alert('Form Submited');

    } else {
      alert('Please fill in all fields and select a time slot.');
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        Time Slot Booking
      </Text>

      {/* List of available time slots */}
      <FlatList
        data={timeSlots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 8,
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
              backgroundColor: selectedTimeSlot === item.id ? '#e0e0e0' : 'white',
            }}
            onTouchEnd={() => handleTimeSlotPress(item.id)}
          >
            <Text>{`${item.time} - ${item.date}`}</Text>
            <Text>{item.available ? 'Available' : 'Booked'}</Text>
          </View>
        )}
      />

      {/* Booking Form */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 16 }}>
        Booking Form
      </Text>
      <TextInput
        placeholder="Name"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 8, padding: 8 }}
      />
      <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 8, padding: 8 }}
      />
      <Button title="Submit" onPress={handleFormSubmit} />
    </View>
  );
};

export default Forms;
