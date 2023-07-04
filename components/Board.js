import React from "react";
import Category from "./Category";

export default function Board() {
  const boardData = {
    categories: {
      "category-1": {
        id: "category-1",
        title: "Top 5",
        cardIds: ["card-1", "card-2", "card-3"],
      },
      "category-2": {
        id: "category-2",
        title: "Entertainment",
        cardIds: ["card-4", "card-5"],
      },
    },
    cards: {
      "card-1": {
        id: "card-1",
        youtube_url: "Card 1",
      },
      "card-2": {
        id: "card-2",
        youtube_url: "Card 2",
      },
      "card-3": {
        id: "card-3",
        youtube_url: "Card 3",
      },
      "card-4": {
        id: "card-4",
        youtube_url: "Card 4",
      },
      "card-5": {
        id: "card-5",
        youtube_url: "Card 5",
      },
    },
    categoryOrder: ["category-1", "category-2"],
  };

  return (
    <div className="w-full flex">
      {boardData.categoryOrder.map((categoryId) => {
        const category = boardData.categories[categoryId];
        const cards = category.cardIds.map((cardId) => boardData.cards[cardId]);
        return <Category category={category} cards={cards} />;
      })}
    </div>
  );
}
