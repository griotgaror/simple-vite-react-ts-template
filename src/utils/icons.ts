import * as FaIcon from 'react-icons/fa6';

export const icons = {
    iconX: FaIcon.FaXmark,
    iconCheck: FaIcon.FaCheck,
    iconDots: FaIcon.FaEllipsis,
    iconSearch: FaIcon.FaMagnifyingGlass,
    iconUser: FaIcon.FaUser,
    iconBack: FaIcon.FaArrowLeft,
    iconDropdown: FaIcon.FaChevronDown,
    iconAdd: FaIcon.FaPlus,
    iconInfo: FaIcon.FaInfo,
    iconCalendar: FaIcon.FaCalendarDays,
    iconClock: FaIcon.FaClock,
    iconImage: FaIcon.FaImage,
};

export type IconVariants = keyof typeof icons;
