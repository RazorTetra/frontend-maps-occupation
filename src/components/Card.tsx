// src/components/Card.tsx
import React from "react";
import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  Typography,
  styled,
} from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

export interface CardProps {
  title?: string;
  subheader?: string;
  content?: React.ReactNode;
  image?: string;
  imageHeight?: number | string;
  actions?: React.ReactNode;
  elevation?: number;
  className?: string;
  headerSx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
  mediaSx?: SxProps<Theme>;
  actionsSx?: SxProps<Theme>;
  sx?: SxProps<Theme>;
}

const StyledCard = styled(MuiCard)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    boxShadow: theme.shadows[8],
  },
}));

const Card: React.FC<CardProps> = ({
  title,
  subheader,
  content,
  image,
  imageHeight = 140,
  actions,
  elevation = 1,
  className,
  headerSx,
  contentSx,
  mediaSx,
  actionsSx,
  sx,
}) => {
  return (
    <StyledCard elevation={elevation} className={className} sx={sx}>
      {(title || subheader) && (
        <CardHeader title={title} subheader={subheader} sx={headerSx} />
      )}
      {image && (
        <CardMedia
          component="img"
          height={imageHeight}
          image={image}
          alt={title || "Card image"}
          sx={mediaSx}
        />
      )}
      {content && (
        <CardContent sx={contentSx}>
          {typeof content === "string" ? (
            <Typography variant="body2">{content}</Typography>
          ) : (
            content
          )}
        </CardContent>
      )}
      {actions && <CardActions sx={actionsSx}>{actions}</CardActions>}
    </StyledCard>
  );
};

export default Card;
