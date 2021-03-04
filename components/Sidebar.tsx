import {
  Box,
  Chip,
  Divider,
  Drawer,
  IconButton,
  List,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  AccountCircle,
  BuildOutlined,
  ChatOutlined,
  ChromeReaderModeOutlined,
  Close,
  CreateOutlined,
  DescriptionOutlined,
  KeyboardOutlined,
  ListAltOutlined,
  PlusOneOutlined,
} from "@material-ui/icons";
import React, { Dispatch, SetStateAction } from "react";
import { CategoryLabel } from "../constants";
import CategoryListItem from "./CategoryListItem";

type SidebarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

type ChipProps = {
  label: string;
  count: number;
};

const useStyles = makeStyles((theme) => {
  return {
    drawerContainer: {
      padding: `0 ${theme.spacing(2)}px`,
      width: theme.breakpoints.width("sm") * 0.5,
      maxWidth: theme.breakpoints.width("sm") * 0.5,
    },
    // https://stackoverflow.com/questions/53772429/material-ui-how-can-i-style-the-scrollbar-with-css-in-js
    chipBox: {
      padding: "0px 0px 16px 16px",
      display: "flex",
      flexFlow: "nowrap",
      overflowY: "scroll",
    },
    chipCount: {
      marginLeft: 4,
      color: "rgba(0, 0, 0, 0.6)",
    },
  };
});

function ChipLabel(props: ChipProps) {
  const { label, count } = props;
  const classes = useStyles();

  return (
    <>
      {label}
      <span className={classes.chipCount}>{count}</span>
    </>
  );
}

export default function Sidebar(props: SidebarProps) {
  const { open, setOpen } = props;
  const classes = useStyles();
  const onCategoryItemClick = () => setOpen(false);

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Box className={classes.drawerContainer}>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <IconButton
            style={{ padding: 0, margin: "16px 0px", alignSelf: "flex-end" }}
            onClick={() => setOpen(false)}
          >
            <Close />
          </IconButton>
          <Divider />
        </Box>
        <Box>
          <Typography style={{ paddingTop: 16 }} variant="h6">
            {"보현's blog"}
          </Typography>
          <List>
            <CategoryListItem
              onItemClick={onCategoryItemClick}
              disabled={true}
              icon={<AccountCircle />}
              label={CategoryLabel.ABOUT_ME}
            />
            <CategoryListItem
              onItemClick={onCategoryItemClick}
              icon={<BuildOutlined />}
              label={CategoryLabel.ABOUT_BLOG}
              link="/posts/vimwiki,%20nextjs로%20블로그를%20만들어보자"
            />
            <CategoryListItem
              onItemClick={onCategoryItemClick}
              disabled={true}
              icon={<DescriptionOutlined />}
              label={CategoryLabel.RESUME}
            />
          </List>
          <Divider />
          <Box>
            <Typography style={{ padding: "8px 0px" }} variant="subtitle1">
              {CategoryLabel.BY_TAGS}
            </Typography>
            <Box className={classes.chipBox}>
              {[
                { label: "example-tag", count: 10 },
                { label: "tag2", count: 9 },
                { label: "tag3", count: 8 },
                { label: "tag4", count: 7 },
                { label: "tag5", count: 6 },
              ].map((eachChip: { label: string; count: number }) => {
                return (
                  <Chip
                    variant="outlined"
                    style={{ marginRight: 8 }}
                    key={eachChip.label}
                    label={<ChipLabel label={eachChip.label} count={eachChip.count} />}
                  />
                );
              })}
            </Box>
            <Divider />
          </Box>
          <Box>
            <List>
              <CategoryListItem
                onItemClick={onCategoryItemClick}
                disabled={true}
                icon={<ListAltOutlined />}
                label={CategoryLabel.VIEW_ALL}
              />
              <CategoryListItem
                onItemClick={onCategoryItemClick}
                disabled={true}
                icon={<PlusOneOutlined />}
                label={CategoryLabel.RECENTLY_CREATED}
              />
              <CategoryListItem
                onItemClick={onCategoryItemClick}
                disabled={true}
                icon={<CreateOutlined />}
                label={CategoryLabel.RECENTLY_MODIFIED}
              />
              <CategoryListItem
                onItemClick={onCategoryItemClick}
                disabled={true}
                icon={<KeyboardOutlined />}
                label={CategoryLabel.DEVELOPMENT}
              />
              <CategoryListItem
                onItemClick={onCategoryItemClick}
                disabled={true}
                icon={<ChromeReaderModeOutlined />}
                label={CategoryLabel.READING}
              />
              <CategoryListItem
                onItemClick={onCategoryItemClick}
                disabled={true}
                icon={<ChatOutlined />}
                label={CategoryLabel.PERSONAL_LOG}
              />
            </List>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
