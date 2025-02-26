// import React, { useContext } from "react";
// import { TextField, Box } from "@mui/material";
// import { useTranslation } from "react-i18next";
// import { FormDataContext } from "../context/FormDataContext";

// const Other_info = () => {
//   const { formData, setFormData } = useContext(FormDataContext);

//   const { t } = useTranslation();
//   return (
//     <Box>
//       <TextField
//         variant="outlined"
//         margin="dense"
//         fullWidth
//         id="other_info"
//         label={t("other_info")}
//         name="other_info"
//         value={formData.other_info || ""}
//         onChange={(e) =>
//           setFormData((prevData) => ({
//             ...prevData,
//             other_info: e.target.value,
//           }))
//         }
//         className="text-field"
//         multiline
//         rows={4}
//       />
//     </Box>
//   );
// };

// export default Other_info;
