// component
import {
  AccessTimeFilled,
  AccessTimeOutlined,
  ArticleOutlined,
  ExtensionOutlined,
  HomeOutlined,
  TimeToLeave,
} from "@mui/icons-material";
import SvgColor from "../../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  /* {
    title: "Inicio",
    path: "/inicio",
    icon: <HomeOutlined />,
  },
  {
    title: "Demoras",
    path: "/demoras/inicio",
    icon: <AccessTimeOutlined />,
  },
  {
    title: "Internaciones",
    path: "/internaciones/inicio",
    icon: <ArticleOutlined />,
  },
  {
    title: "Extensiones",
    path: "/extensiones/inicio",
    icon: <ExtensionOutlined />,
  }, */
  {
    title: "Bitacoras",
    path: "/bitacoras/inicio",
    icon: <ExtensionOutlined />,
  },

  /* {
    title: "Not found",
    path: "/404",
    icon: icon("ic_disabled"),
  }, */
];

export default navConfig;
