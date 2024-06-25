import React from "react";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

const TIMEZONE_OPTIONS = [
  { value: "-12:00", label: "(GMT -12:00) Eniwetok, Kwajalein" },
  { value: "-11:00", label: "(GMT -11:00) Ilha de Midway, Samoa" },
  { value: "-10:00", label: "(GMT -10:00) Havaí" },
  { value: "-09:50", label: "(GMT -9:30) Taiohae" },
  { value: "-09:00", label: "(GMT -9:00) Alasca" },
  { value: "-08:00", label: "(GMT -8:00) Horário do Pacífico (EUA e Canadá)" },
  {
    value: "-07:00",
    label: "(GMT -7:00) Horário das Montanhas (EUA e Canadá)",
  },
  {
    value: "-06:00",
    label: "(GMT -6:00) Horário Central (EUA e Canadá), Cidade do México",
  },
  {
    value: "-05:00",
    label: "(GMT -5:00) Horário do Leste (EUA e Canadá), Bogotá, Lima",
  },
  { value: "-04:50", label: "(GMT -4:30) Caracas" },
  {
    value: "-04:00",
    label: "(GMT -4:00) Horário do Atlântico (Canadá), Caracas, La Paz",
  },
  { value: "-03:50", label: "(GMT -3:30) Terra Nova" },
  { value: "-03:00", label: "(GMT -3:00) Brasil, Buenos Aires, Georgetown" },
  { value: "-02:00", label: "(GMT -2:00) Atlântico Médio" },
  { value: "-01:00", label: "(GMT -1:00) Açores, Ilhas Verde" },
  {
    value: "+00:00",
    label: "(GMT) Horário da Europa Ocidental, Londres, Lisboa, Casablanca",
  },
  { value: "+01:00", label: "(GMT +1:00) Bruxelas, Copenhague, Madrid, Paris" },
  { value: "+02:00", label: "(GMT +2:00) Kaliningrado, África do Sul" },
  {
    value: "+03:00",
    label: "(GMT +3:00) Bagdá, Riad, Moscou, São Petersburgo",
  },
  { value: "+03:50", label: "(GMT +3:30) Teerã" },
  { value: "+04:00", label: "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi" },
  { value: "+04:50", label: "(GMT +4:30) Cabul" },
  {
    value: "+05:00",
    label: "(GMT +5:00) Ecaterimburgo, Islamabad, Karachi, Tashkent",
  },
  { value: "+05:50", label: "(GMT +5:30) Bombaim, Calcutá, Madras, Nova Deli" },
  { value: "+05:75", label: "(GMT +5:45) Catmandu, Pokhara" },
  { value: "+06:00", label: "(GMT +6:00) Almaty, Daca, Colombo" },
  { value: "+06:50", label: "(GMT +6:30) Yangon, Mandal" },
  { value: "+07:00", label: "(GMT +7:00) Bangkok, Hanoi, Jakarta" },
  {
    value: "+08:00",
    label: "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong",
  },
  { value: "+08:75", label: "(GMT +8:45) Eucla" },
  {
    value: "+09:00",
    label: "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
  },
  { value: "+09:50", label: "(GMT +9:30) Adelaide, Darwin" },
  {
    value: "+10:00",
    label: "(GMT +10:00) Eastern Australia, Guam, Vladivostok",
  },
  { value: "+10:50", label: "(GMT +10:30) Lord Howe Island" },
  {
    value: "+11:00",
    label: "(GMT +11:00) Magadan, Solomon Islands, New Caledonia",
  },
  { value: "+11:50", label: "(GMT +11:30) Norfolk Island" },
  {
    value: "+12:00",
    label: "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka",
  },
  { value: "+12:75", label: "(GMT +12:45) Chatham Islands" },
  { value: "+13:00", label: "(GMT +13:00) Apia, Nukualofa" },
  { value: "+14:00", label: "(GMT +14:00) Line Islands, Tokelau" },
];

const TimezoneSelector = ({ onChange, value, title }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {!title && (
        <Typography
          variant="caption"
          gutterBottom
          color="inherit"
          sx={{ mb: 0 }}
        >
          Fuso horário
        </Typography>
      )}
      <Select
        native
        value={value}
        displayEmpty
        size="small"
        onChange={(e) => onChange(e.target.value)}
        sx={{
          fontSize: "12px",
          color: "#fff",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.1)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.2)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.15)",
          },
          ".MuiSelect-icon": { color: "#fff" },
          "& .MuiMenuItem-root": {
            color: "#fff",

            padding: "2px",
          },
        }}
      >
        {TIMEZONE_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default TimezoneSelector;
