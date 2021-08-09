import React from "react";
import { ScrollView, View } from "react-native";
import { List, Divider, Avatar } from "react-native-paper";
import Colors from "../../../../../../globals/colors";
import Styles from "../../../../../../styles";
import {
  WYRE_DATA_SUBMISSION_OPEN,
  WYRE_DATA_SUBMISSION_PENDING,
} from "../../../../../../utils/constants/services";

export const WyreServiceAccountOverviewRender = function () {
  return (
    <ScrollView style={Styles.flexBackground}>
      <List.Subheader>{"Submitted personal information"}</List.Subheader>
      {this.WYRE_ACCOUNT_PERSONAL_INFO_FORM_ORDER.map((formKey, index) => {
        const form = this.WYRE_ACCOUNT_PERSONAL_INFO_SCHEMA[formKey];
        const valueField = this.renderValueField(formKey);
        const title = valueField == null ? null : valueField.title;
        const status = this.getProfileFieldStatus(formKey);

        return (
          <React.Fragment key={index}>
            <Divider />
            <List.Item
              title={title == null ? form.placeholder : title}
              description={form.label}
              titleStyle={{
                color:
                  title == null ? Colors.verusDarkGray : Colors.quaternaryColor,
              }}
              right={(props) => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {status == null ||
                  status == WYRE_DATA_SUBMISSION_OPEN ? null : status ==
                    WYRE_DATA_SUBMISSION_PENDING ? (
                    <List.Icon
                      {...props}
                      color={Colors.infoButtonColor}
                      icon={"timer-sand"}
                      size={20}
                    />
                  ) : (
                    <List.Icon
                      {...props}
                      color={Colors.verusGreenColor}
                      icon={"check"}
                      size={20}
                    />
                  )}
                  <List.Icon {...props} icon={"chevron-right"} size={20} />
                </View>
              )}
              onPress={() =>
                this.openAccountData(
                  this.WYRE_ACCOUNT_PERSONAL_INFO_SCHEMA[formKey]
                )
              }
            />
          </React.Fragment>
        );
      })}
      <Divider />
      <List.Subheader>{"Submitted documents"}</List.Subheader>
      {this.WYRE_ACCOUNT_DOCUMENTS_FORM_ORDER.map((formKey, index) => {
        const form = this.WYRE_ACCOUNT_DOCUMENTS_SCHEMA[formKey];
        const title =
          this.state.documentRenders[formKey] == null ||
          this.state.documentRenders[formKey].documentIds == null ||
          this.state.documentRenders[formKey].documentIds.length == 0
            ? null
            : `${this.state.documentRenders[formKey].documentIds.length} ${
                this.state.documentRenders[formKey].documentIds.length == 1
                  ? "image"
                  : "images"
              }`;
        const status = this.getProfileFieldStatus(formKey);

        return (
          <React.Fragment key={index}>
            <Divider />
            <List.Item
              title={title == null ? form.placeholder : title}
              description={form.label}
              titleStyle={{
                color:
                  title == null ? Colors.verusDarkGray : Colors.quaternaryColor,
              }}
              left={(props) => {
                return this.state.documentRenders[formKey] == null ? null : (
                  <Avatar.Image
                    {...props}
                    size={96}
                    source={{
                      uri: this.state.documentRenders[formKey].uri,
                    }}
                  />
                );
              }}
              right={(props) => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {status == null ||
                  status == WYRE_DATA_SUBMISSION_OPEN ? null : status ==
                    WYRE_DATA_SUBMISSION_PENDING ? (
                    <List.Icon
                      {...props}
                      color={Colors.infoButtonColor}
                      icon={"timer-sand"}
                      size={20}
                    />
                  ) : (
                    <List.Icon
                      {...props}
                      color={Colors.verusGreenColor}
                      icon={"check"}
                      size={20}
                    />
                  )}
                  <List.Icon {...props} icon={"chevron-right"} size={20} />
                </View>
              )}
              onPress={() =>
                this.openAccountData(
                  this.WYRE_ACCOUNT_DOCUMENTS_SCHEMA[formKey]
                )
              }
            />
          </React.Fragment>
        );
      })}
      <Divider />
    </ScrollView>
  );
};