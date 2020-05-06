import { I } from "../i-shape.js";
import { J } from "../j-shape.js";
import { L } from "../l-shape.js";
import { O } from "../o-shape.js";
import { S } from "../s-shape.js";
import { T } from "../t-shape.js";
import { Z } from "../z-shape.js";

export const generateNewShape = () => {
    return Math.floor(Math.random() * Math.floor(7));
}

export const createNewShape = (cells, index, row, column) => {
    switch (index) {
        case 0:
            return new I(row, column, cells);
        case 1:
            return new J(row, column, cells);
        case 2:
            return new L(row, column, cells);
        case 3:
            return new O(row, column, cells);
        case 4:
            return new S(row, column, cells);
        case 5:
            return new Z(row, column, cells);
        case 6:
            return new T(row, column, cells);
    }
}