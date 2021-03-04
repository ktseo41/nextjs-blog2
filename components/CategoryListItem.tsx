import { ListItem, makeStyles, Typography, ButtonBase } from "@material-ui/core";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo } from "react";

type CategoryListItemProps = {
  icon: JSX.Element;
  label: string;
  disabled?: boolean;
  link?: string;
  onItemClick?: VoidFunction;
};

const useStyles = makeStyles((theme) => {
  return {
    listItem: {
      width: "100%",
      color: (props: { disabled?: boolean }) => (props.disabled ? "grey" : ""),
    },
  };
});

export default function CategoryListItem(props: CategoryListItemProps) {
  const { onItemClick, link, icon, label } = props;
  const classes = useStyles(props);
  const router = useRouter();
  let itemClickTimerId: NodeJS.Timer;

  const _onItemClick = useMemo(() => {
    return link && (() => {
      router.push(link);
      itemClickTimerId = setTimeout(() => {
        onItemClick?.()
      }, 200);
    })
  }, [link, onItemClick])

  useEffect(() => {
    return () => {
      clearTimeout(itemClickTimerId)
    }
  }, [itemClickTimerId])

  return (
    <ButtonBase className={classes.listItem}>
      <ListItem
        onClick={_onItemClick}
      >
        {icon}
        <Typography style={{ marginLeft: 16 }} variant="subtitle2">
          {label}
        </Typography>
      </ListItem>
    </ButtonBase>
  );
}
