import {
  Clock3,
  Swords,
  Crosshair,
  UserPlus,
  Trophy,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export const menuItems = [
  {
    id: 1,
    title: "10 min (Rapid)",
    icon: Clock3,
    rightIcon: ChevronDown,
    type: "dropdown",
  },
  {
    id: 2,
    title: "Start Game",
    icon: Swords,
    type: "primary",
  },
  {
    id: 3,
    title: "Custom Challenge",
    icon: Crosshair,
    rightIcon: ChevronRight,
    type: "secondary",
  },
  {
    id: 4,
    title: "Play a Friend",
    icon: UserPlus,
    rightIcon: ChevronRight,
    type: "secondary",
  },
  {
    id: 5,
    title: "Tournaments",
    icon: Trophy,
    rightIcon: ChevronRight,
    type: "secondary",
  },
];