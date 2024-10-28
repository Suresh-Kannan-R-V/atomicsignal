import StyledInputLabel from "../../components/inputlabel/InputLabel";
import StyledSelect from "../../components/select/Select";
import {
  StyledToggleButton,
  StyledToggleButtonGroup,
} from "../../components/toggleButton/StyledToggleButton";
import { FilterFormContainer, FilterFormField } from "./team.styles";

const roleFilters = ["Employee", "Manager", "Admin"];

const performanceFilters = [
  "Impactful",
  "Spectacular",
  "Very good",
  "Good",
  "Need to Improve",
  "Need to improve a lot",
  "Completely away",
];

const FilterForm = () => {
  return (
    <FilterFormContainer>
      <FilterFormField>
        <StyledInputLabel sx={{ fontSize: "12px" }}>
          Overall Performance
        </StyledInputLabel>
        <StyledToggleButtonGroup>
          {performanceFilters.map((data) => (
            <StyledToggleButton size="small" selected>
              {data}
            </StyledToggleButton>
          ))}
        </StyledToggleButtonGroup>
      </FilterFormField>
      <FilterFormField>
        <StyledInputLabel sx={{ fontSize: "12px" }}>
          Department
        </StyledInputLabel>
        <StyledSelect size="small" placeholder="Select"></StyledSelect>
      </FilterFormField>
      <FilterFormField>
        <StyledInputLabel sx={{ fontSize: "12px" }}>
          Designation
        </StyledInputLabel>
        <StyledSelect size="small" placeholder="Select"></StyledSelect>
      </FilterFormField>
      <FilterFormField>
        <StyledInputLabel sx={{ fontSize: "12px" }}>
          Reporting to
        </StyledInputLabel>
        <StyledSelect size="small" placeholder="Name"></StyledSelect>
      </FilterFormField>
      <FilterFormField>
        <StyledInputLabel sx={{ fontSize: "12px" }}>
          Overall Performance
        </StyledInputLabel>
        <StyledToggleButtonGroup>
          {roleFilters.map((data) => (
            <StyledToggleButton size="small" selected>
              {data}
            </StyledToggleButton>
          ))}
        </StyledToggleButtonGroup>
      </FilterFormField>
    </FilterFormContainer>
  );
};

export default FilterForm;
