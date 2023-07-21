import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import mappings from "../utils/mapping";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function PanelComponent(props: any) {
  const [value, setValue] = React.useState(0);
  const { items } = props;
  const mapping: any = mappings;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          {items.map((item: any) => {
            return (
              <Tab
                key={item.key}
                label={item.label.visible ? item.label.value : ""}
              />
            );
          })}
        </Tabs>
      </Box>
      {items.map((item: any) => {
        const members = item.items;
        //console.log(item);
        return (
          <TabPanel value={value} index={item.key} key={item.name}>
            {members.map((member: any) => {
              const Component = mapping[member.fieldType];
              // console.log(Component);
              if (!Component) return null;
              return (
                <Component
                  key={member.name}
                  {...member}
                  // // @ts-ignore
                  // error={error[item.name]}

                  onChange={(e: any) => {}}
                />
              );
            })}
          </TabPanel>
        );
      })}
    </Box>
  );
}
