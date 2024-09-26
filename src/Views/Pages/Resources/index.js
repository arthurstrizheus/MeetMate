import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import RoomResources from "./Components/RoomResources";
import Resources from "./Components/Resources";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && <Box sx={{height:'100%', overflow:'hidden'}}>{children}</Box>}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const Resournces  = ({setLoading}) => {
    const [value, setValue] = useState(0);
    const headers = ['Room Resources', 'Resources'];
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {

    });

    return(
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label='Room Resources' {...a11yProps(0)} />
                <Tab label='Resources' {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <RoomResources setLoading={setLoading}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Resources setLoading={setLoading}/>
            </CustomTabPanel>
        </Box>
    )
}

export default Resournces;