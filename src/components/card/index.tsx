import { ComponentPropsWithoutRef } from "react";

import { MockData } from "~/mocks/types";
import { cn } from "~/utils/class-name";

type CardProps = {
  item: MockData;
} & ComponentPropsWithoutRef<"article">;

const Card = ({ item, className, ...props }: CardProps) => {
  return (
    <article
      className={cn(
        "flex h-28 flex-col rounded-md border border-solid border-gray-200 p-4",
        className,
      )}
      {...props}
    >
      <div className="flex grow items-start justify-between">
        <p className="text-lg font-bold">{item.productName}</p>
        <p className="text-gray-300">{`$ ${item.price}`}</p>
      </div>

      <div className="text-right text-sm">
        {new Date(item.boughtDate).toLocaleString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        })}
      </div>
    </article>
  );
};

export default Card;
