import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

function KnowlengePoint() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div>
            <List>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary="可折叠标题" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                    123
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button>
                            <ListItemText primary="子项1" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="子项2" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    )
}

export default KnowlengePoint;