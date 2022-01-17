import RankedSVG from "../assets/ranked.svg";
import DuelSVG from "../assets/duel.svg";
import FunSVG from "../assets/fun.svg";
import TrainingSVG from "../assets/training.svg";
import React from "react";

type Category = {
  id: number;
  title: string;
  icon: React.FC;
};

export const categories: Category[] = [
  {
    id: 1,
    title: "Ranqueada",
    icon: RankedSVG,
  },
  {
    id: 2,
    title: "Duelo 1x1",
    icon: DuelSVG,
  },
  {
    id: 3,
    title: "Diversão",
    icon: FunSVG,
  },
  {
    id: 4,
    title: "Treino",
    icon: TrainingSVG,
  },
];
