type CardProps = {
  card: {
    id: number;
    title: string;
    url: string;
  };
};

const Card = ({ card }: CardProps) => {
  return (
    <div
      key={card.id}
      className="group relative h-[500px] w-full md:w-[400px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="p-8 text-6xl font-black text-white uppercase bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export { Card };
