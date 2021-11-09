import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { StyledTypography, useStyles } from "../../styles";

import { TPAccount } from "./types";

const PAccount: React.FC<TPAccount> = ({ user }): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <TextField
        id="input-with-icon-textfield"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <StyledTypography paragraph>
        Добрый день, {user.name || "Пользователь"}
      </StyledTypography>

      <div className={classes.news}>Объявления и новости.</div>
    </>
  );
};

export default PAccount;
