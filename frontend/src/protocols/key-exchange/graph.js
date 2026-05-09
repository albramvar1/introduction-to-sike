import {GraphCanvas, lightTheme} from "reagraph";
import React from "react";

const nodes = [
    { id: "1", label: "73" },
    { id: "2", label: "89" },
    { id: "3", label: "235" },
    { id: "4", label: "254" },
    { id: "5", label: "316" },
    { id: "6", label: "343" },
    { id: "7", label: "99i + 10" },
    { id: "8", label: "90i + 35" },
    { id: "9", label: "102i + 51" },
    { id: "10", label: "259i + 73" },
    { id: "11", label: "247i + 78" },
    { id: "12", label: "65i + 84" },
    { id: "13", label: "333i + 97" },
    { id: "14", label: "334i + 109" },
    { id: "15", label: "119i + 121" },
    { id: "16", label: "249i + 125" },
    { id: "17", label: "343i + 125" },
    { id: "18", label: "78i + 139" },
    { id: "19", label: "261i + 140" },
    { id: "20", label: "368i + 149" },
    { id: "21", label: "331i + 153" },
    { id: "22", label: "146i + 180" },
    { id: "23", label: "3i + 215" },
    { id: "24", label: "355i + 217" },
    { id: "25", label: "430i + 218" },
    { id: "26", label: "314i + 240" },
    { id: "27", label: "100i + 247" },
    { id: "28", label: "20i + 315" },
    { id: "29", label: "186i + 325" },
    { id: "30", label: "287i + 326" },
    { id: "31", label: "174i + 332" },
    { id: "32", label: "413i + 335" },
    { id: "33", label: "333i + 347" },
    { id: "34", label: "184i + 374" },
    { id: "35", label: "172i + 401" },
    { id: "36", label: "100i + 430" },
]

const edges_2isogeny = [
    { id: "1", source: "0", target: "1" },
    { id: "2", source: "0", target: "26" },
    { id: "3", source: "0", target: "32" },
    { id: "4", source: "1", target: "0" },
    { id: "5", source: "1", target: "1" },
    { id: "6", source: "2", target: "4" },
    { id: "7", source: "2", target: "7" },
    { id: "8", source: "2", target: "16" },
    { id: "9", source: "3", target: "5" },
    { id: "10", source: "3", target: "8" },
    { id: "11", source: "3", target: "20" },
    { id: "12", source: "4", target: "2" },
    { id: "13", source: "4", target: "6" },
    { id: "14", source: "4", target: "13" },
    { id: "15", source: "5", target: "3" },
    { id: "16", source: "5", target: "11" },
    { id: "17", source: "5", target: "19" },
    { id: "18", source: "6", target: "4" },
    { id: "19", source: "6", target: "9" },
    { id: "20", source: "6", target: "34" },
    { id: "21", source: "7", target: "2" },
    { id: "22", source: "7", target: "16" },
    { id: "23", source: "7", target: "17" },
    { id: "24", source: "8", target: "3" },
    { id: "25", source: "8", target: "20" },
    { id: "26", source: "27", target: "31" },
    { id: "27", source: "28", target: "10" },
    { id: "28", source: "28", target: "30" },
    { id: "29", source: "28", target: "31" },
    { id: "30", source: "29", target: "12" },
    { id: "31", source: "29", target: "21" },
    { id: "32", source: "29", target: "22" },
    { id: "33", source: "30", target: "9" },
    { id: "34", source: "30", target: "13" },
    { id: "35", source: "30", target: "28" },
    { id: "36", source: "31", target: "27" },
    { id: "37", source: "31", target: "28" },
    { id: "38", source: "31", target: "35" },
    { id: "39", source: "32", target: "0" },
    { id: "40", source: "32", target: "8" },
    { id: "41", source: "32", target: "35" },
    { id: "42", source: "33", target: "11" },
    { id: "43", source: "33", target: "15" },
    { id: "44", source: "33", target: "22" },
    { id: "45", source: "34", target: "6" },
    { id: "46", source: "34", target: "18" },
    { id: "47", source: "34", target: "24" },
    { id: "48", source: "35", target: "21" },
    { id: "49", source: "35", target: "31" },
    { id: "50", source: "35", target: "32" },
]


const edges_3isogeny = [
    { id: "1", source: "0", target: "6" },
    { id: "2", source: "0", target: "13" },
    { id: "3", source: "0", target: "27" },
    { id: "4", source: "0", target: "31" },
    { id: "5", source: "1", target: "9" },
    { id: "6", source: "1", target: "10" },
    { id: "7", source: "1", target: "28" },
    { id: "8", source: "1", target: "30" },
    { id: "9", source: "2", target: "7" },
    { id: "10", source: "2", target: "12" },
    { id: "11", source: "2", target: "16" },
    { id: "12", source: "2", target: "35" },
    { id: "13", source: "3", target: "9" },
    { id: "14", source: "3", target: "22" },
    { id: "15", source: "3", target: "24" },
    { id: "16", source: "3", target: "30" },
    { id: "17", source: "4", target: "17" },
    { id: "18", source: "4", target: "23" },
    { id: "19", source: "4", target: "26" },
    { id: "20", source: "4", target: "32" },
    { id: "21", source: "5", target: "9" },
    { id: "22", source: "5", target: "15" },
    { id: "23", source: "5", target: "30" },
    { id: "24", source: "5", target: "33" },
    { id: "25", source: "6", target: "0" },
    { id: "26", source: "29", target: "21" },
    { id: "27", source: "30", target: "1" },
    { id: "28", source: "30", target: "3" },
    { id: "29", source: "30", target: "5" },
    { id: "30", source: "30", target: "14" },
    { id: "31", source: "31", target: "0" },
    { id: "32", source: "31", target: "16" },
    { id: "33", source: "31", target: "26" },
    { id: "34", source: "31", target: "33" },
    { id: "35", source: "32", target: "4" },
    { id: "36", source: "32", target: "12" },
    { id: "37", source: "32", target: "18" },
    { id: "38", source: "32", target: "27" },
    { id: "39", source: "33", target: "5" },
    { id: "40", source: "33", target: "19" },
    { id: "41", source: "33", target: "31" },
    { id: "42", source: "33", target: "34" },
    { id: "43", source: "34", target: "8" },
    { id: "44", source: "34", target: "25" },
    { id: "45", source: "34", target: "26" },
    { id: "46", source: "34", target: "33" },
    { id: "47", source: "35", target: "2" },
    { id: "48", source: "35", target: "12" },
    { id: "49", source: "35", target: "22" },
    { id: "50", source: "35", target: "26" },
]

function GraphView() {
    const myTheme = {
        ...lightTheme,
        node: {
            ...lightTheme.node,
            fill: '#202020',
            label: {
                color: '#202020'
            }
        },
        edge: {
            ...lightTheme.edge,
            fill: '#202020',
            arrow: {
                fill: '#202020'
            }
        }
    };
    return (
        <GraphCanvas
            nodes={nodes}
            edges={edges_3isogeny}
            theme={myTheme}
        />
    )
}

export default GraphView;