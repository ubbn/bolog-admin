import { DateField } from "react-admin";

const OgnooField = ({ label, source }: { label: string; source: string }) => {
  return (
    <DateField
      source={source}
      label={label}
      showTime
      options={{
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }}
    />
  );
};

export default OgnooField;
