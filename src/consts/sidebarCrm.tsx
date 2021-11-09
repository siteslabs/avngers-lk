import PersonIcon from "@mui/icons-material/Person";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import CakeIcon from "@mui/icons-material/Cake";
import PieChartIcon from "@mui/icons-material/PieChart";

import { EUrls } from "./urls";
import { TCrmList } from "./types";

export const crmList: TCrmList[] = [
  { text: "Личный кабинет", icon: <PersonIcon />, path: EUrls.MAIN, id: 1 },
  {
    text: "Дежурство",
    icon: <CleaningServicesIcon />,
    path: EUrls.DUTY,
    id: 2,
  },
  { text: "Обед", icon: <FreeBreakfastIcon />, path: EUrls.BREAKFAST, id: 3 },
  { text: "Дни рождения", icon: <CakeIcon />, path: EUrls.BIRTHDAY, id: 4 },
  { text: "Статистика", icon: <PieChartIcon />, path: EUrls.STATISTICS, id: 5 },
];
