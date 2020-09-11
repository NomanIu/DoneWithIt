import React from "react";

import { StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import ListItem from "./ListItem";
import { FlatList } from "react-native-gesture-handler";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bullet",
      backgroundColor: colors.primary,
    },
  },

  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.contanier}>
        <ListItem
          title="Muhammad Noman"
          subTitle="programmingwithnoman@gmail.com"
          image={require("../assets/mosh.jpg")}
        ></ListItem>
      </View>

      <View style={styles.contanier}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  size={50}
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <ListItem 
      title="Log out"
      IconComponent={
          <Icon
          size={50}
          name="logout" backgroundColor="#ffe66d"
          />
      }
      
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  contanier: {
    marginVertical: 20,
  },
});

export default AccountScreen;
