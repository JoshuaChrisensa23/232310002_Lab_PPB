import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const ItemUser = ({ item }) => {
    const gen =
        item.gender === "M"
          ? "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
          : "https://www.pngall.com/wp-content/uploads/5/Profile-Female-PNG.png";
    
      const but =
        item.status === "Followers"
          ? "Followed"
          : "Follow";
    
      const follows = item.status === "Suggested" ? "Anjay Ngefollow" : "Parah Kau Unfollow";
      return (
        <View style={styles.search_container}>
          <View style={styles.search_account}>
            <Image
              source={{
                uri: gen
              }}
              style={styles.story_ava}
            />
            <View>
              <Text
                style={{ ...styles.story_name, fontWeight: "bold", color: "white" }}
              >
                {item.name}
              </Text>
              <Text style={{ ...styles.story_name, color: "white" }}>
                {item.fullname}
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity activeOpacity={0.6} style={styles.btn_follow} onPress={() => alert(follows)}>
              <Text style={styles.story_name}>{but}</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    search_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
      },
      search_account: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      },
      story_ava: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: "#f0f8ff",
        marginRight: 15,
      },
      story_name: {
        fontSize: 16,
        textAlign: "left",
      },
      btn_follow: {
        backgroundColor: "purple",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
      },
})

export default ItemUser;
