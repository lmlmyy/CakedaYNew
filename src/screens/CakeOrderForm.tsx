import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import BackIcon from "../../assets/icons/allowLeft.svg";
import CalendarIcon from "../../assets/icons/calendar-icon.svg"; 
import ClockIcon from "../../assets/icons/clock-icon.svg"; 
import FormFieldWithIcon from "../components/FormFieldWithIcon";
import FormFieldWithDropdown from "../components/FormFieldWithDropdown";
import FormTextArea from "../components/FormTextArea";
import CakeTypeSelector from "../components/CakeTypeSelector";
import UploadButton from "../components/UploadButton";
import FormField from "../components/FormField";
import ActionButtons from "../components/ActionButtons";

const CakeOrderForm: React.FC = () => {
  console.log(CalendarIcon);
  const [name, setName] = React.useState("");
  const [pickupDate, setPickupDate] = React.useState("");
  const [pickupTime, setPickupTime] = React.useState("");
  const [letteringText, setLetteringText] = React.useState("");
  const [cakeSize, setCakeSize] = React.useState("");
  const [cakeShape, setCakeShape] = React.useState("");
  const [cakeFlavor, setCakeFlavor] = React.useState("");
  const [additionalNotes, setAdditionalNotes] = React.useState("");
  const [selectedCakeTypes, setSelectedCakeTypes] = React.useState<string[]>(
    [],
  );

  const handleSelectCakeType = (id: string) => {
    if (selectedCakeTypes.includes(id)) {
      setSelectedCakeTypes(selectedCakeTypes.filter((typeId) => typeId !== id));
    } else {
      setSelectedCakeTypes([...selectedCakeTypes, id]);
    }
  };

  const handleCancel = () => {
    console.log("Order cancelled");
  };

  const handleOrder = () => {
    console.log("Order submitted", {
      name,
      pickupDate,
      pickupTime,
      letteringText,
      cakeSize,
      cakeShape,
      cakeFlavor,
      additionalNotes,
      selectedCakeTypes,
    });
  };

  const handleUpload = () => {
    console.log("Upload image");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>케이크 주문하기</Text>
      </View>

      <ScrollView style={styles.formContainer}>
        <FormField
          label="이름"
          placeholder="픽업자 이름 입력"
          value={name}
          onChangeText={setName}
        />
        <FormFieldWithIcon
          label="픽업 날짜"
          placeholder="픽업 날짜 선택"
          value={pickupDate}
          onChangeText={setPickupDate}
          icon={<CalendarIcon />}
        />

        <FormFieldWithIcon
          label="픽업 시간"
          placeholder="픽업 시간 선택"
          value={pickupTime}
          onChangeText={setPickupTime}
          icon={<ClockIcon />}
        />


        <FormField
          label="레터링 문구"
          placeholder="레터링 문구(1 ~ 10글자 입력)"
          value={letteringText}
          onChangeText={setLetteringText}
        />

        <FormFieldWithDropdown
          label="사이즈"
          placeholder="케이크 사이즈 선택"
          value={cakeSize}
          onChangeText={setCakeSize}
        />

        <FormFieldWithDropdown
          label="모양"
          placeholder="케이크 모양 선택"
          value={cakeShape}
          onChangeText={setCakeShape}
        />

        <FormFieldWithDropdown
          label="시트/맛"
          placeholder="케이크 시트/맛 선택"
          value={cakeFlavor}
          onChangeText={setCakeFlavor}
        />

        <FormTextArea
          label="기타 전달사항"
          placeholder="사장님께 전달할 내용 입력"
          value={additionalNotes}
          onChangeText={setAdditionalNotes}
        />

        <View style={styles.uploadSection}>
          <Text style={styles.sectionLabel}>참고 디자인</Text>
          <UploadButton onPress={handleUpload} />
        </View>

        
      </ScrollView>
      <CakeTypeSelector
          selectedTypes={selectedCakeTypes}
          onSelectType={handleSelectCakeType}
        />
      <ActionButtons onCancel={handleCancel} onOrder={handleOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 390,
    width: "100%",
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    paddingLeft: 8,
    gap: 8,
    marginTop: 45,
    marginRight: 15,
    marginBottom: 0,
    marginLeft: 15,
  },
  headerTitle: {
    flex: 1,
    color: "#000",
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
  },
  formContainer: {
    paddingTop: 25,
    paddingBottom: 25,
  },
  uploadSection: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    paddingHorizontal: 12,
  },
  sectionLabel: {
    color: "#000",
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
});

export default CakeOrderForm;
