import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AccordionItem = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCollapse} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text>{isCollapsed ? '+' : '-'}</Text>
      </TouchableOpacity>
      {!isCollapsed && <Text style={styles.content}>{content}</Text>}
    </View>
  );
};

const Accordion = () => {
  return (
    <View style={styles.container}>
      <AccordionItem
        title="1 JOHN 4:8"
        content="God is Love"
      />
      <AccordionItem
        title="PROVERBS 13:17"
        content="A wicked messenger falleth into mischief: buta faithful ambassador is health."
      />
      <AccordionItem
        title="PROVERBS 13:17"
        content="A faithful witness will not lie: but a false witness will utter lies."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
});

export default Accordion;

