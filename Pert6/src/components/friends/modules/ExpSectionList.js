import React from "react";
import { Text, SectionList } from "react-native";
import UserItem from "../../const-data/UserItems"; // Path sudah sesuai

const ExpSectionList = ({ Users }) => {
    const data = [{
            title: "Suggested",
            data: (Users || []).filter((user) => user.status === "Suggested"),
        },{
            title: "Followers",
            data: (Users || []).filter((user) => user.status === "Followers"),
        },
    ]

  return (
    <SectionList
      sections={data}
      renderItem={({ item }) => <UserItem item={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ color: "black", fontSize: 18, padding: 10 }}>
          {title}
        </Text>
      )}
    />
  );
};

export default ExpSectionList;