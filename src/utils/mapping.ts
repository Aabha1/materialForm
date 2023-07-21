import TextComponent from "../components/TextComponent";
import NumberComponent from "../components/NumberComponent";
import CheckboxComponent from "../components/CheckboxComponent";
import DatePickerComponent from "../components/DatePickerComponent";
import DropdownComponent from "../components/DropdownComponent";
import RadioComponent from "../components/RadioComponent";
import ButtonComponent from "../components/ButtonComponent";
import PanelComponent from "../components/PanelComponent";

const map = {
  "text-input": TextComponent,
  "number-input": NumberComponent,
  checkbox: CheckboxComponent,
  datePicker: DatePickerComponent,
  dropdown: DropdownComponent,
  radio: RadioComponent,
  button: ButtonComponent,
  panel: PanelComponent,
};

export default map;
