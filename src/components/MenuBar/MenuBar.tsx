import React, {  useState, forwardRef } from 'react';
import {List, ListItem, Collapse, Button, Drawer } from '@material-ui/core';
import clsx from 'clsx';
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import Router from 'next/router';



import useStyles from './menuBarStyles';

function isSeverity(sev:string[]){

  return sev.find((item:any)=>+item.statusSeverity!==10 );;
}
function isNight(list:any){
  return list.find((item:any)=>item.name.toUpperCase() ==='NIGHT')
}

const MenuBar = (props:any) => {
    const [ menu, setMenu ] = useState<any>({});
    const { className, ...rest } = props;
    const classes  = useStyles();
    const handleClick = (item:any) => {
        let newData = {...menu, [item] : !menu[item]};
        setMenu(newData);
    }
    const CustomRouterLink = forwardRef((props:any, ref) => {
      const item:any = props.to;
      const status = isSeverity(item.lineStatuses);
      return (
      <div ref={ref} style={{ flexGrow: 1 }}>

          <a onClick={()=>{
            Router.push({
              pathname: '/section/status',
              query: { status: status ?  status.reason : 'NON-DISRUPTED' }
          })
           }}><span> {item.name || ''}</span>
            {status && <span> - DISRUPTION</span> }
            {isNight(item.serviceTypes) && <span> - NIGHT</span>}

            </a>

      </div>
    )
  });
    const handleMenu = ( children:any , level=0 ) => {
        return children.map(({children, name, url,...rest }: any) => {

            if ( !children) {

              return (
                <List component="div" disablePadding key={ name }>
                  <ListItem
                    className={classes.item}
                    disableGutters
                    style={{padding:"0px"}}
                    key={name}
                  >
                    <Button
                      className={clsx({
                        [classes.btnRoot] : true,
                        [classes.button] : true,
                        [classes.subMenu] : level
                      })}
                      component={CustomRouterLink}
                      to={{name, ...rest}}
                    >
                      {name} sdfsdf
                    </Button>
                  </ListItem>
                </List>
              )
            }
            return (
              <div key={ name }>
              <ListItem
                className={classes.item}
                disableGutters
                key={name}
                onClick={() => handleClick(name)}
              >
                <Button
                className={clsx({
                  [classes.btnRoot] : true,
                  [classes.button] : true,
                  [classes.subMenu] : level
                })}>
                  { name } { menu[ name ] ? <ExpandLess /> : <ExpandMore />}
                  </Button>
                </ListItem>
                <Collapse
                  in={ (menu[name]) ? true : false }
                  timeout="auto"
                  unmountOnExit
                  style={{
                    marginLeft: '40px'
                  }}
                >
                  { handleMenu( children, 1) }
                </Collapse>
              </div>
            )
        })
    }

    return (
      <Drawer
          anchor="left"
          classes={{ paper: classes.drawer }}
          open={true}
          variant="persistent"
        >
          <List {...rest} className={clsx(classes.root, className)} >
              { handleMenu(props.menuItems) }
              <ListItem
                className={classes.item}
                disableGutters
                key={'123123123'}
                onClick={() => Router.push({
                  pathname: '/section/search',
                  })}
              >
                <Button
                className={clsx({
                  [classes.btnRoot] : true,
                  [classes.button] : true,
                  [classes.subMenu] : 0
                })}>
                  CYCLE-HIRE
                  </Button>
                </ListItem>
          </List>
      </Drawer>
   )
}

export default MenuBar;
