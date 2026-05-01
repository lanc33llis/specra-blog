type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className="mr-3 h-9 w-9 rounded-xl border border-border"
        alt={name}
      />
      <div>
        <div className="text-sm font-medium text-foreground">{name}</div>
        <div className="text-sm text-muted-foreground">Specra</div>
      </div>
    </div>
  );
};

export default Avatar;
