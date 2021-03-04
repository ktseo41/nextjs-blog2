import { ListItem, Typography } from "@material-ui/core";

type CategoryListItemProps = {
  icon: JSX.Element;
  label: string;
};

export default function CategoryListItem(props: CategoryListItemProps) {
  const { icon, label } = props;

  return (
    <ListItem>
      {icon}
      <Typography style={{ marginLeft: 16 }} variant="subtitle2">
        {label}
      </Typography>
    </ListItem>
  );
}
