import React from "react";
import ReactTooltip from "react-tooltip";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./ComponentCSS/SendSafex.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import { INSTRUMENTS } from "../../consts";

const buttonStyle = { fontSize: 11, maxWidth: 90, minWidth: 90, py: '4px', ml: '140px', bgcolor: '#13bdf3' };
const inputStye = { py: 0, mb: '15px' };
const mixinStyle = { ml: '10px', maxWidth: '30px' }

export default function SendSafex(props) {
    buttonStyle.bgcolor = props.instrument === INSTRUMENTS.SFX ? '#57e4b4' : '#13bdf3';
    return (
        <div className="send-safex-box">
            <Divider><b>{props.title}</b></Divider>
            <form className="p-4" id={props.id} onSubmit={props.send}>
                <TextField sx={inputStye} size='small' label="Safex address" variant="outlined" id="address" name="destination" />
                <TextField sx={inputStye} size='small' label="How much to send?" variant="outlined" id="amount" name="amount" />

                <div className="mb-4">
                    <label>
                        MIXINS
                        <AiOutlineInfoCircle size={15} data-tip data-for="mixinInfo" className="ml-1" />
                        <ReactTooltip id="mixinInfo" type="info" effect="solid" place="right">
                            <span>
                                Mixins are transactions that have also been sent on the Safex
                                blockchain. <br />
                                They are combined with yours for private transactions.
                                <br />
                                Changing this from the default could hurt your privacy.
                                <br />
                            </span>
                        </ReactTooltip>
                    </label>
                    <FormControl variant="standard" sx={mixinStyle}>
                        <Select
                            name="mixins"
                            defaultValue="7"
                            label="Probs"
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                        </Select>
                    </FormControl>

                    <Button sx={buttonStyle} variant="contained" type="submit">
                        SEND
                    </Button>
                </div>

            </form>
        </div>


    );
}
