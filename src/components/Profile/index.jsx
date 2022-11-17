import style from "./profile.module.scss";
import { HeartOutlined, UserOutlined } from "@ant-design/icons";
const menuItems = [
  {
    key: "favorite",
    icon: HeartOutlined,
    name: "Secilmis Elanlar",
    url: "/favorites",
  },
  {
    key: "subscribe",
    icon: UserOutlined,
    name: "Abune-kateqoriyalar",
    url: "/subscribes",
  },
];
export const Profile = () => {
  return (
    <div className={style.profile}>
      <span className={style.profile__title}>Sizin JobSearch</span>
      <ul className={style.profile__menu}>
        {menuItems.map(({ key, icon: Icon, name, url }) => {
          const active = window.location.href.includes(url);
          return (
            <li
              key={key} 
              className={
                active
                  ? style.profile__menu__itemActive
                  : style.profile__menu__item
              }
            >
              <a href={url} className={style.profile__menu__link}>
                <Icon className={style.profile__menu__link__icon} />
                <span className={style.profile__menu__link__text}>{name}</span>
                <span className={style.profile__menu__link__count}>0</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
